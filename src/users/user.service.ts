
import {eq} from "drizzle-orm";
 import db from "../Drizzle/db";
 import { TIUser,TSUser, CardholderTable } from "../Drizzle/schema";
 


 export const usersService =  async (): Promise<TSUser[] |null> => {
    return await db.query.CardholderTable.findMany();

 }

 export const getuserService = async (id: number): Promise<TIUser | undefined> => {
   return await db.query.CardholderTable.findFirst({
      where : eq(CardholderTable.user_id, id),
      with:{
         bookings:true,
         
      }
   })
 }

 //creating a new user
 export const createUserService = async (user: TIUser) :Promise<string | undefined> => {
       await db.insert(CardholderTable).values(user)
    return "Found $404";
 }