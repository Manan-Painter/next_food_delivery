import prisma from "@/utils/connect"
import { NextResponse } from "next/server"


export const GET = async () => {

    try {
        
        const category = await prisma.category.findMany()
        return NextResponse.json(category,{status:200})

    } catch (error) {
        
        console.log(error)
        return NextResponse.json({message:"Somthing went to wrong"},{status:500})
    }

}