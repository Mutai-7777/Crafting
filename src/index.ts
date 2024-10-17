

  import {serve } from '@hono/node-server'
  import { Hono } from 'hono'
  import "dotenv/config"
  import {logger} from 'hono/logger'
import {csrf} from 'hono/csrf'
import {trimTrailingSlash} from 'hono/trailing-slash'
import { timeout} from 'hono/timeout'
import { cors} from 'hono/cors'
import { userRouter } from './users/user.router'


const app = new Hono()
app.use (cors());

///  in built middleware     
app.use(logger())     //----time counter
app.use(csrf())      //----csrf protection
app.use(trimTrailingSlash())  //----remove trailing slash
app.use('/api/time',timeout(5000))


app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.get('/api/time', (c) => {
   setTimeout(()=> {
   console.log("data after 5 seconds")
 },5000 )
 return c.text("return data after 5 seconds")
})

//this is for custom routers 
app.route('/',userRouter)  //user


console.log(`Server is running on port ${process.env.PORT}`)

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT)|| 3000
});