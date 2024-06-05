import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req){
    // console.log("Checked req",req);

    //create header

    const requestHeader = new Headers(req.Headers)
    // console.log("Request Header", requestHeader);

    // URL Query params
    const { searchParams } = new URL(req.url)
    // console.log("Search params :",searchParams);
    // console.log("get search key :",searchParams.get("search"))

    //cookies

    const getCookies = req.cookies
    // console.log("cooki", getCookies);

    const cooki2 = cookies()
    // console.log("cooki2", cooki2);


    return NextResponse.json({"msg": "Hello NextJS API"})
}

//post api 

export async function POST(req){
    console.log("POST ",req);

    // const res = await req.json()
    // console.log("Response", res);
    //Response { title: 'megha new', body: 'this is new id' }

    const formData = await req.formData()
    console.log("Form Data: ", formData);

    return NextResponse.json({"msg": "Post success"}, {status: 201}) // created status 201  
}