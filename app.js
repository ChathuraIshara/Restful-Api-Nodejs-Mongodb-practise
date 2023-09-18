var express=require('express');


var productController=require('./controller/productcontroller')

var app=express();
var mongoose=require('mongoose');



mongoose.connect('mongodb+srv://chathura:test@cluster0.kkdmc6p.mongodb.net/Ecommerce?retryWrites=true&w=majority');


app.use(express.json());




productController(app);

app.listen(3000,()=>
{
    console.log("Node api is listening to the port 3000!");
});

