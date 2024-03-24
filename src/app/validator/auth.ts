

import z from 'zod'



export const registerSchema  = z.object({
  email:z.string().email("Please provide the valid email "),
  name:z.string().min(3,{message:"Name must be at least 3 character"}).max(100 , {message:"Name must be within 100 character"}),
  phone:z.string().min(10, {message:"Number should be contain 10 digit"}).max(10 , {message:"Number should be contain 10 digit"}),
  school:z.string().min(15 ,  {message:"School name should be contain 10  to 150 digit"}).max(150),
  Class:z.string().default("1"),
  board:z.string().default("TBSE"),
  address:z.string().default("AGARTALA"),
  promoter:z.string().default("false"),
  referalCode:z.string().default("883743226")
})