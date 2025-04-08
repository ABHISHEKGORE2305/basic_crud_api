
import User from "../model/userModel.mjs"


export const create= async (req,res)=>{
    try{
        const userData= new User(req.body)
        const{email}=userData
        const userExist=await User.findOne({email})

        if(userExist){
            return req.status(400).json({message:"user already exist"})

        }

        const savedUser=await userData.save();
        res.status(200).json(savedUser);

    }catch(error){
        res.status(500).json({error:"server error"})

    }
}
export const fetch = async (req,res)=> {

    try{
        const users= await User.find()
        if(users.length===0){
            res.status(404).json({message:"user not found"})
        }
        else{
            res.status(200).json(users)
        }
    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
}


export const update= async(req,res)=>{
    try{
        const id =req.params.id;
        const userExist= await User.findOne({_id:id})
        if (!userExist){
            return res.status(404).json({message:"user already exists"})

        }
        else{
            const updateuser = await User.findByIdAndUpdate(id,req.body,{new:true})
            res.status(201).json(updateuser)

        }
    }catch(error){
        res.send(500).json({error:"internal server error"})

    }
}

export const deleteuser= async(req,res) =>{
    try{
        const id=req.params.id
        const userExist=await User.findById({_id:id})
        if (!userExist){
            res.status(404).json({message:"user not found!"})

        }
        
        await User.findByIdAndDelete(id)
        res.status(201).json({message:"user  deleted"})
        

    }catch(error){
        res.status(500).json({message:"internal server problem"})
        
    }
}