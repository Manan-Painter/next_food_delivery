import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// FETCH ALL ORDERS
export const GET = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const orders = session.user.isAdmin
      ? await prisma.order.findMany()
      : await prisma.order.findMany({
          where: { userEmail: session.user.email! },
        });

    return new NextResponse(JSON.stringify(orders), { status: 200 });
  } catch (err) {
    console.error("Error fetching orders:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// CREATE ORDER
export const POST = async (req: NextRequest) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "You are not authenticated!" }),
      { status: 401 }
    );
  }

  try {
    const body = await req.json();

    // Validate incoming data
    if (!body || !body.price || !body.userEmail) {
      return new NextResponse(JSON.stringify({ message: "Invalid data!" }), {
        status: 400,
      });
    }

    const order = await prisma.order.create({ data: body });

    const options = {
      amount: order.price.toNumber() * 100, // Convert to smallest currency unit
      currency: "INR",
      receipt: `rcp_${order.id}`, // Unique receipt ID
    };

    const razorpay_order = await razorpay.orders.create(options);

    const responsePayload = {
      ...order,
      razorpay_order_id: razorpay_order.id,
    };

    return new NextResponse(JSON.stringify(responsePayload), { status: 201 });
  } catch (err) {
    console.error("Error creating order:", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
