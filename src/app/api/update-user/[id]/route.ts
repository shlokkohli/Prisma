import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request : Request, { params } : { params: Promise<{ id : string }> }){

    try {

        const {id} = await params;

        const {name, email} = await request.json();

        const user = await prisma.user.update({
            where: {
                id : parseInt(id),
            },
            data: {
                name : name,
                email : email
            }
        })

        return NextResponse.json(
            { message : 'updated user successfully' },
            { status : 200 }
        )
        
    } catch (error) {

        return NextResponse.json(
            { message : "Some occured in the params" },
            { status : 500 }
        )
        
    }
    
}