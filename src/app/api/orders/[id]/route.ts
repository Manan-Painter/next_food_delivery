import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest , {params}: {params: { id: string}}) => {
    const {id} = params;

    try {
        const body = await req.json()

       const product =  await prisma.product.findUnique({
            where:{
                id:id
            },
        });
        return NextResponse.json({product},{status:200})

    } catch (error) {
        console.log(error)
        return NextResponse.json({message:"something went wrong"},{status:500})
    }
}