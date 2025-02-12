"use client"

import Image from "next/image";
import Link from "next/link";
export default function Home() {

  return (
   <main className="w-full h-full">
    <Image
              src="/c.svg"
              alt="Giveaway Page"
              width={800}
              height={80}
              priority
              className="lg:w-full md:w-full"
            />
            <Link href='/giveaway' style={{bottom:"0", marginTop:"-5rem"  , zIndex:10000000 ,display:"flex" , alignItems:"center" , justifyContent:"center" , textDecoration:"none"}}>
   <button  style={{padding:".5rem 1.5rem" , borderRadius:"1.4rem" , outline:"none" , border:"1px solid white" , cursor:"pointer" , background:"teal", color:"white"  , fontSize:"1.2rem"}}>
    Enter Giveaway
    </button>
   </Link>
   </main>
  );
}
