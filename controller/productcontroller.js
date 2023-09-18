var Product = require("../models/product");
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var productController = (app) => {

    //save products
  app.post("/product", urlencodedParser, async function (req, res) {
    //  res.send(req.body);
    try {
      var product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  });

  //fetch prodcts
  app.get("/product", async function (req, res) {
    try {
      var results = await Product.find({});
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  });

  //fetch a special product
  app.get("/product/:id", async function (req, res) {
    try {
      var { id } = req.params.id;
      var results = await Product.find(id);
      res.status(200).json(results);
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ message: err.message });
    }
  });

 // update a product
  app.put('/product/:id',urlencodedParser,async function(req,res)
  {
    try{
        var {id}=req.params.id;
        var product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});//give the normal id not the object
        if(!product){
            return res.status(404).json({message:`cannot find any product with ID ${id} `});
        }
      
        
        res.status(200).json(product);

    }catch(err)
    {
        console.log(err.message);
        res.status(500).json({message:err.message});
    }
  })

  //delete a product

  app.delete('/product/:id',async function(req,res){
    try{
        var {id}=req.params.id;
        var target=await Product.findOneAndDelete(id);
        if(!target)
        {
            return res.status(404).json({message:`cannot find any product with ID ${id} `});

        }
        res.status(200).json(target);


    }catch(err)
    {
        console.log(err.message);
        res.status(500).json({message:err.message});
    }
  });
  


};

module.exports = productController;
