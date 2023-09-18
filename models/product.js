var mongoose=require('mongoose');
var productschema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter a product name"]
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:false
    }
},
{
    timestamps:true
});

var Product=mongoose.model('product',productschema);

module.exports = Product;



