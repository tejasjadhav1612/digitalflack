import city from "../models/city";

export default add = (req,res)=>async{
    try{

       const  {
            id,
            stateName,
            stateCode,
            status,
        } = req.body;
        const newCity = new city({
            id,
            stateName,
            stateCode,
            status,
        });
        const saveData = newCity.save();

        res.status(200).json(saveData);
        
    }
    catch(err){
        res.status(500).json({error:err.message})
    }

};