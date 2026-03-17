const mongoose=require("mongoose");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/day12")
  .then(function(){console.log("connected to mongodDB")})
  .catch(function(){console.error("some error occurs while connecting")})
  ;
}

module.exports=main