import { NextResponse } from "next/server";

// export const GET = async(req, context) => {
//     console.log("request", req);
//     console.log("context", context);

//     return NextResponse.json({"msg": "success"}, {status : 200})
// }

//getting id 

export const GET = async(req, {params}) => {
    console.log("prarams", params);
    return NextResponse.json({"msg": "success"})
}

