import Image from "next/image";
import { Inter } from "next/font/google";
import { GetPicture} from "../component/GetPicture";
import {Navbar} from "../component/Navbar";

import {useState, useEffect } from "react";


const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const [data,setData]=useState([]);
  const [curr,setCurr]=useState(0);

  const prev=()=> setCurr(curr=>(curr===0?data.length-1:curr-1))
  const next=()=>setCurr((curr)=>(curr===data.length-1?0:curr+1))

  useEffect(()=>{
      GetPicture().then( (p)=>setData(p.results) );
   
   
  },[]);

  if(!data){
    return <div>Loading...</div>;
    
  }

 


 
  return (
    <>
      <Navbar/>
      <div className="overflow-x-auto flex  my-5 h-[400x] w-auto">
      
         { data ? data.map(item=> (<img src={item.urls.raw} className="w-auto shadow-lg mx-2 shadow-blue-950 ml-[2px] h-[400px] transition-transform ease-in-out duration-700" style={{transform:`translateX(-${curr*100}%)`}} alt="cars"/>)) : <p>null</p>
         }
       
      </div>
      <div className="flex justify-between items-center mx-4">
        <button onClick={prev} className="bg-black rounded-sm px-2 text-white font-serif shadow-lg  shadow-teal-500 font-semibold hover:bg-gray-500 hover:text-black">Previous</button>
        <button onClick={next} className="bg-black rounded-sm px-2 text-white font-serif font-semibold shadow-teal-500 shadow-lg hover:bg-gray-500 hover:text-black">Next</button>
      </div>
    
    </>  
    );
}
