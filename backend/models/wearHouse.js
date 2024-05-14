import mongoose from "mongoose";
const wareSchema = mongoose.Schema({
    warehouseName:String,
    city:String,
    state:String,
    Status:Boolean,
})

const warehouse  = mongoose.model("Warehouse",wareSchema);
export default warehouse;