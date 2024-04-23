const FoodModel=require('../model/FoodModel');

exports.Create=async(req,res)=>{
    try{
        let reqBody=req.body;
        await FoodModel.create(reqBody);
        return res.status(201).json({status:"Success",message:"Successfully created"});
    }catch(err){
        return res.status(400).send({error:err});
    }
}

exports.Read=async(req,res)=>{
    try{
        let rows=await FoodModel.find();
        return res.status(200).json({status:"Success",message:"Successfully read",row:rows});
    }catch(err){
        return res.status(400).send({error:err});
    }
}

exports.Update=async(req,res)=>{
    try{
        let {id} =req.params
        let reqBody=req.body;
        await FoodModel.updateOne({_id:id},reqBody);
        return res.status(200).json({status:"Success",message:"Successfully updated"});
    }catch(err){
        return res.status(400).send({error:err});
    }
}

exports.Delete=async(req,res)=>{
    try{
        let {id}=req.params
        await FoodModel.deleteOne({_id:id});
        return res.status(200).json({status:"Success",message:"Successfully deleted"});
    }catch(err){
        return res.status(400).send({error:err});
    }
}

