
import express from 'express';
import cors from "cors"
import  {model}  from "./aiConfig.js"

const app = express();
app.use(cors())
app.use(express.json());

app.get('/api',(req,res)=>{
    res.send("hello this is a get request")
})


app.post('/api',async(req,res)=>{
    const {userInput} = req.body

   try{
       let result = await model.generateContent(userInput)

       res.json({
           status: 'success',
           message: JSON.parse(result.response.text())
       });

   }catch (err){
        res.status(500).json({
            status:"error",
            message:"An error occured",
            error:err
        })
   }
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})