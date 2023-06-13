const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mad_hav:mad_hav@madhav11.t8k8rva.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("ee");
})
.catch(err=>console.log(err));
let Schema = mongoose.Schema;
const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})
var studentModel = mongoose.model("students",studentSchema);
module.exports = studentModel