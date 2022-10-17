import { useState } from "react";
import useRouter from "next/router";
import React from "react";


// const [id, setId] = useState()

import { post } from "../../../../../data/post";
// var tit
// const router = useRouter()


// const post = posts.map(function(data){
//     if (data.title==="this is the first data for this test app  as long as we are here"){
//         tit == title
//         tit = data.title
//     }
// })


export default function handler(req, res) {
    
  res.status(200).json(post);
}
