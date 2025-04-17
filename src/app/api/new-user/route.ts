import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request : Request){

    try {

        const user = await prisma.user.create({
            data: {
                name : 'shlok',
                email : 'shlok@gmail.com',
                age : 12
            }
        })

        return NextResponse.json(
            { message : "Welcome" },
            { status : 200 }
        )
        
    } catch (error) {

        return NextResponse.json(
            { message : "Some error occured" },
            { status : 500 }
        )
        
    }

}