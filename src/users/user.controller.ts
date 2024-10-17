
import {Context} from 'hono'
import { usersService,getuserService,createUserService} from './user.service';



export const listUsers = async ( c: Context) => { ``
  const data = await usersService();
  if (data == null || data.length==0) {
    return c.text("hello Ian user not found",404)

  }

  return c.json(data,200);
}


//getting rusers
export const getUser = async ( c: Context) => {
  const id = parseInt(c.req.param("id"));
  if(isNaN(id)) return c.text("Invalid ID",400) 

  const user = await getuserService(id);
  if (user == undefined) {
    return c.text("Helllo Ian no Users yet",404);
}
return c.json(user,200);
}

//creating user
export const createUser = async ( c: Context) => {
  try {
    const user = await c.req.json();
    const createdUser = await createUserService(user);
    console.log(createdUser)
    if (!createdUser) return c.text("User not created",404);
    
    return c.json(createdUser,201);
  }
  catch (error:any) {
    return c.json({error:error?.message},400)
  }
}
