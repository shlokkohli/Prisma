import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request : Request, { params } : { params: Promise<{ id : string }> }){

    try {

        const {id} = await params;

        const {name, email} = await request.json();

        const user = await prisma.user.upsert({
            where: {
                id : parseInt(id),
            },
            update: {
                name,
                email
            },
            create: {
                name,
                email
            }
        })

        return NextResponse.json(
            { message : 'updated user successfully' },
            { status : 200 }
        )

        
    } catch (error) {

        return NextResponse.json(
            { message : 'Some error occured in the params', error },
            { status : 500 }
        )
        
    }

}