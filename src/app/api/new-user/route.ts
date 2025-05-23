import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request : Request){

    try {

        const {name, email} = await request.json();
        
        const user = await prisma.user.create({
            data: {
                name : name,
                email : email
            }
        })

        return NextResponse.json(
            { message : "Welcome", user },
            { status : 200 }
        )
        
    } catch (error) {

        return NextResponse.json(
            { message : "Some error occured", error },
            { status : 500 }
        )
        
    }

}