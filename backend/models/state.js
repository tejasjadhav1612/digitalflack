import mongoose from "mongoose";

const stateSchema = mongoose.Schema({
    userID:Number,
    city:String,
    status:Boolean,

})

const state = mongoose.model("State", stateSchema);
export default state