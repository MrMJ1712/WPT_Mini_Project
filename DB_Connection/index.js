import express, { response } from 'express';
import mongoose from 'mongoose';
import { CarDetails } from './Cars.js'
import cors from 'cors';


const app=express();
app.use(cors())

app.use(express.json());

const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1/cars'); 
        console.log("connected to database...!");
    } catch(error){
        console.log("Error db not connected");
    }
}

app.post("/enter",async(request,response)=>{
    try{
        const reqData = request.body;
        console.log(reqData);
        const Details = new CarDetails(reqData);
        console.log(Details);
        await Details.save();
        response.send({message:'Details Inserted'})
    } catch(error){
        response.send({message:"Something went wrong..!"});
    }
})

app.get("/detail",async(request,response)=>{
    try{
        const Details = await CarDetails.find();
        response.send({Details:Details});
    } catch(error){
        response.send({message:'Something went wrong..!'});
    }
})

app.get("/detail/:_id",async(request,response)=>{
    try{
        const Details = await CarDetails.find({_id:request.params._id});
        if(Details==null){
            response.send({message:"Details Not Found"});
        }
        else{
            response.send({Details:Details});
        }
    } catch(error){
        response.send({message:'Something went wrong'});
    }
})


app.delete("/delete/:_id",async(request,response)=>{
    try{
        await CarDetails.deleteOne({_id:request.params._id});
        response.send({message:'Car deleted'});
    } catch(error){
        response.send({message:'something went wrong...!'})
    }
})

app.put("/puts/:_id",async(request,response)=>{
    try{
        await CarDetails.updateOne({_id:request.params._id},request.body);
        response.send({message:"ok updated data"})
    } catch(error){
        response.send('something went again wrong')
    }
})

app.listen(5550,()=>{
    console.log('Server is running on port 4900');
    connectDb();
});