import prisma from "@/utils/connect"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req:NextRequest) => {

    const {searchParams} = new URL(req.url)
    const cat = searchParams.get('cat')

    try {
        
        const products = await prisma.product.findMany({
            where:{
                ...(cat ? { catSlug: cat}:{isFeatured: true}),
            },
        })
        return NextResponse.json(products,{status:200})

    } catch (error) {
        
        console.log(error)
        return NextResponse.json({message:"Somthing went to wrong"},{status:500})
    }

}