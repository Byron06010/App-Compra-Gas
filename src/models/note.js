const {Schema,model}=require("mongoose");

const noteschema=new Schema({
    producto: {
        type:String,
        required:true
    },
    precio:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    cantidad:{
        type:String,
        required:true
    },
    pago:{
        type:String,
        required:true
    },
    direccion:{
        type: String,
        required:true

    },
    user:{
        type: String,
        required:true

    }
    
},{
    timestamps:true
})

module.exports = model("note",noteschema);