import mongoose from "mongoose";
const citySchema = mongoose.Schema({
    stateName: String,
    stateCode: String,
    status:Boolean,
    cityName:String,
    cityCode:Number,
});
const city = mongoose.model("City",citySchema);
export default city;