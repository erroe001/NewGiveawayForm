// "use client"
// import  React from "react"


// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import * as Forms from "react-hook-form"
// import { z } from "zod"
// import { registerSchema } from "../validator/auth"
// import { zodResolver } from "@hookform/resolvers/zod"
// import {motion} from 'framer-motion'

 
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { cn } from '../../lib/utils';
// import { ArrowLeft, ArrowRight, Square, SquareMousePointerIcon } from "lucide-react"
// import toast, { Toaster } from "react-hot-toast"
// import ConforMation from "../../components/conformation/Conformation"

// export default function Page() {
  
//   const [formStep , setFormStep] = React.useState(1)
//   const [isRegistrationSuccess , setRegistration] = React.useState(false)
//   const [userData , setUserData] = React.useState<{_id:string , phone:string}>()
//   const [formSubmit , setFormSubmit ] = React.useState(false)
//   const form =  Forms.useForm<z.infer<typeof registerSchema>>({
//     resolver: zodResolver(registerSchema),
//     defaultValues:{
//       address:"AGARTALA",
//       board:"TBSE",
//       Class:'1',
//       email:"j@gmai.com",
//       name:"JOydeep Debnath",
//       promoter:"false",
//       school:"Madhuna Nor akdjflsdf",
//       referalCode:"",
//       phone:"999999999"
// },

//   })
//  async function onSubmit(values: z.infer<typeof registerSchema>) {
//   setFormSubmit(true)
//   toast.success("Request submit please wait" , {
//     position:"top-center"
//   })
//    try {
//      const Response = await fetch("https://giveway-backend.onrender.com/api/v1/SignupUser", {
//        method: "POST",
//        body: JSON.stringify(values),
//        headers: { "Content-Type": "application/json" },
//      });
//      const Data = await Response.json();
//      if(Data.success === true){
//        setUserData(Data.data)
//        setRegistration(true)
//        toast.success("Successfully Enter in the giveaway", {
//          position:"top-center"
//        })
//      }
//      if(Data.success === false){
//        toast.error(Data.message , {
//          position:"top-center"
//        })
//      }
//   setFormSubmit(false)
//    } catch (error) {
//      setFormSubmit(false)
//     toast.error("Something went wrong please try again later" , {
//       position:"top-center"
//     })
    
//    }
//   }


//   return (
//     <>
//     {isRegistrationSuccess ? <ConforMation id={userData?._id} phone={userData?.phone}/> :<>
//     <>
//     <Toaster/>
//     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      
//     <Card className="w-[350px]">
//       <CardHeader>
//         <CardTitle>Submit Your Application</CardTitle>
//         <CardDescription>This offer is only school students </CardDescription>
//       </CardHeader>
//      <CardContent>

//      <Form {...form} >
//       <form  className={cn(`space-y-2 overflow-hidden relative`,{
//         "h-[30rem]":formStep ===1,
        
//       })}>

// <motion.div  className={cn(` space-y-3 `)} animate={
//   {
//     translateX:`-${formStep * 100}%`
//   }
// }>
  
//         {/* Name */}
//         <FormField
//           control={form.control}
//           name="name"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Name</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter Your Name" {...field} />
//               </FormControl>
//               <FormDescription>
//                 This is your public display name.
//               </FormDescription>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         {/* Email */}
//                 <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Enter Email</FormLabel>
//               <FormControl>
//                 <Input placeholder="Enter Email" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
// {/* Phone */}
// <FormField
//           control={form.control}
//           name="phone"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Enter Phone Number </FormLabel>
//               <FormControl>
//                 <Input type="number" placeholder="8888888888" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         {/* School */}
        
// <FormField
//           control={form.control}
//           name="school"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Enter school name </FormLabel>
//               <FormControl>
//                 <Input type="text" placeholder="xyz higher school" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

// <FormField
//           control={form.control}
//           name="board"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Select your Board</FormLabel>
//               <FormControl>
//               <Select onValueChange={field.onChange} defaultValue={"TBSE"}>
//                   <SelectTrigger >
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="TBSE">TBSE</SelectItem>
//                   <SelectItem value="CBSE">CBSE</SelectItem>
//                   <SelectItem value="ICSE">ICSE</SelectItem>
//                 </SelectContent>
//               </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        
// </motion.div>
// <motion.div className={cn(`  absolute top-0 right-0 left-0 space-y-3 `)} animate={{
//   translateX:`${100 - formStep * 100}%`
// }}>
  
// {/* Board */}



//         {/* Current Class */}
//         <FormField
//           control={form.control}
//           name="Class"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Select Your Current Class</FormLabel>
//               <FormControl>
//               <Select onValueChange={field.onChange} defaultValue={"1"}>
//                   <SelectTrigger >
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 <SelectContent>
//                 {["1","2","3","4","5","6","7","8","9","10","11","12"].map((item)=>(
//                   <SelectItem key={item} value={String(item)}>{item}</SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         {form.watch().Class=== "11" || form.watch().Class=== "12"?   <FormField
//           control={form.control}
//           name="address"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Are you interested to school promoter</FormLabel>
//               <FormControl>
//               <Select onValueChange={field.onChange} defaultValue={"ARTS"}>
//                   <SelectTrigger >
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="ARTS">ARTS</SelectItem>
//                   <SelectItem value="SCIENCE">SCIENCE</SelectItem>
//                   <SelectItem value="COMMERCE">COMMERCE</SelectItem>
//                 </SelectContent>
//               </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />:<></> }


//         {/* Promoter */}


        
// <FormField
//           control={form.control}
//           name="promoter"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Are you interested to school promoter</FormLabel>
//               <FormControl>
//               <Select onValueChange={field.onChange} defaultValue={"false"}>
//                   <SelectTrigger >
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="true">true</SelectItem>
//                   <SelectItem value="false">false</SelectItem>
//                 </SelectContent>
//               </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
        

//         <FormField
//           control={form.control}
//           name="address"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Are you interested to school promoter</FormLabel>
//               <FormControl>
//               <Select onValueChange={field.onChange} defaultValue={"AGARTALA"}>
//                   <SelectTrigger >
//                     <SelectValue placeholder="Select a verified email to display" />
//                   </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="AGARTALA">AGARTALA</SelectItem>
//                   <SelectItem value="OUTSIDE AGARTALA">OUTSIDE AGARTALA</SelectItem>
//                 </SelectContent>
//               </Select>
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

// {/* Referal Code */}

// <FormField
//           control={form.control}
//           name="referalCode"
//           render={({ field }) => (
//             <FormItem>
//               <FormLabel>Enter your referCode </FormLabel>
//               <FormControl>
//                 <Input type="number" placeholder="8888888888" {...field} />
//               </FormControl>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//         </motion.div>
//         <div className={cn("bottom-0",{
//           "absolute":formStep ===1 
//         })}>
//         <div className={cn(`flex gap-[8.5rem]`,{
//           "hidden":formStep === 0
//         })}>
//         <Button type="button" onClick={()=>{
//           setFormStep(0)
//         }} ><ArrowLeft/> Back</Button>

//           <Button disabled={formSubmit? true :false}  type="submit" onClick={form.handleSubmit(onSubmit)} >{formSubmit ?  "Wait" :"Submit "}</Button>
        
//         </div>
       
//         </div>
//         <Button type="button"  onClick={()=>{
//           form.trigger(["name" , "email" , "phone" ,  "school"])

//           const nameState  = form.getFieldState("name")
//           const emailState  = form.getFieldState("email")
//           const schoolState  = form.getFieldState("name")
//           const phoneState  = form.getFieldState("phone")
//           if((!nameState.isDirty || nameState.invalid) && (!emailState.isDirty || emailState.invalid)  && (!schoolState.isDirty || schoolState.invalid) && (!phoneState.isDirty || phoneState.invalid)) return;
//           toast.success("Fill next informations" , {position:"top-center"})
//           setFormStep(1)
//         }} variant="default" className={cn({
//           "hidden":formStep === 1
//         })}  >Next Step <ArrowRight/> </Button>

//       </form>
//     </Form>
//      </CardContent>

//     </Card>
//     </div>
//     </>
    
//     </>
    
//     }
//     </>


//   )
// }
