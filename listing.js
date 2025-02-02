const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
      type: String,
      required:true,
    },
    description:String,
    image:{
        type:String,
        set:(v)=>v===""? "box1_image.jpg":v,
    },
    Price:Number,
});
const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;