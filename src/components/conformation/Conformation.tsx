'use client'

import { Input } from "@/components/ui/input"
import { ArrowRight, LinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { OWN_WEB_URL } from "@/app/constants"
import toast, { Toaster } from "react-hot-toast"
import { useState } from "react"

type Tprops= {
  id:string | undefined ,
   phone:string| undefined
}
function ConforMation(props:Tprops) {
  const Images = [{icon:"/Whatsapp.svg" , name:"Whatsapp" , link:`whatsapp://send?text=${OWN_WEB_URL}  participate on this and get a chance to win mega giveaway do not waste your time grab the chance your referCode ${props.phone}
  `} , {icon:"/facebook.svg" , name:"Facebook" , link:`https://www.facebook.com/sharer/sharer.php?u=${OWN_WEB_URL}`} , {icon:"/twitter.svg" , name:"Twitter" , link:`https://twitter.com/intent/tweet?url=${OWN_WEB_URL}`} , {icon:"/telegram.svg" , name:"Telegram" , link:`https://telegram.me/share/url?url=${OWN_WEB_URL}`} , {icon:"/linkedin.svg" , name:"Linkedin" , link:`https://www.linkedin.com/sharing/share-offsite/?url=${OWN_WEB_URL}`} , {icon:"/mail.svg" , name:"Email" , link:`mailto:?subject=Check%20out%20this%20website%20and%20participate%20to%20win%20a%20mega%20giveaway&body=Hey%20there!%0A%0ADo%20not%20miss%20out%20on%20this%20amazing%20opportunity%20to%20win%20big.%20Simply%20click%20on%20the%20link%20below%20to%20participate%20in%20our%20mega%20giveaway%3A%0A%0Ahttps%3A%2F%2F${OWN_WEB_URL}`}]
  const [counter , setCounter] = useState(0)
  if(counter > 3){
    setCounter(3)
  }
  return (
    <>
    <main className="flex justify-center items-center mt-6 flex-col">
      <Toaster></Toaster>
      <div className="heading flex justify-center items-center flex-col">
      <Image
      src={"/gift box.svg"}
      alt="Great Job"
        width={20}
        height={20}
        className="w-full"
      />
      <Image
      src={"/GREAT JOB.svg"}
      alt="Great Job"
        width={20}
        height={20}
        className="w-[280px]"

      />
      <h3 className="text-xl text-blue-900 text-center"  >The more you share , the better your chances of winning</h3>
      </div>
      <h3 className="text-xl text-blue-900 mb-4" >Share with your friends</h3>
      <div className="inline-flex w-[25rem] w-max-[40rem] relative w-min-[1rem]">
      <Input aria-readonly type="text" readOnly value={`${OWN_WEB_URL}/giveaway`} className=" text-center rounded-2xl text-xl  " />
      <LinkIcon  onClick={()=>{
        navigator.clipboard.writeText(`${OWN_WEB_URL}`)
        toast.success("Copy successfully done!" , {
          position:"top-center"
        })
      }
        } className="text-center mt-2 absolute right-5"/>
      </div>
          <div className="mt-4 shareOtpion bg-white w-full h-full py-10 pb-36">

      <div className="shareOptions">

        <h1 className="text-2xl text-blue-900 text-center mb-4 ">Share via</h1>
        <h1 className="text-center text-black text-xl md:text-3xl mt-4 mb-8">{counter=== 3 ? "Your task is done please share with your friends to win prizes":<>Your shared  {counter} time out of 3`</>}</h1>
        <div className="options grid items-center justify-center grid-cols-3 gap-10">
          {Images.map((item , index)=>(
            <div className="text-center justify-center"key={index}>

            <Link onClick={()=>setCounter(prev=>prev+1)} target="_blank" href={item.link}><Image key={index}
            src={item.icon}
            alt={item.name}
            width={20}
            height={20}
            className="w-[45px] "
            /></Link>
            <h3 className="text-black">{item.name}</h3>
            </div>
          ))}
        </div>
       
      </div>
      <h2 className="text-2xl text-blue-900 text-center mb-4 mt-6 ">Visit our website </h2>
      <div className="grid md:grid-cols-2 items-center justify-center gap-6 centered">
      <div className="inline-flex w-[25rem] w-max-[35rem]  relative w-min-[1rem]">
      <Input aria-readonly type="text" readOnly value={`https://myClassestripura.com`} className=" text-center rounded-3xl sm:text-xl text-xs" />
      <Link target="_blank" href={'https://myClassestripura.com'}><ArrowRight className="text-center mt-2 absolute right-5"/></Link>
      </div>
      <div className="inline-flex w-[25rem] w-max-[35rem]  relative w-min-[1rem]">
      <Input aria-readonly type="text" readOnly value={`https://www.thebookmart.in`} className=" text-center rounded-3xl sm:text-xl text-xs " />
      <Link target="_blank" href={"https://www.thebookmart.in"}><ArrowRight  className="text-center mt-2 absolute right-5"/></Link>
      </div>
      </div>
      </div>
  

    </main>
    </>

  )
}

export default ConforMation