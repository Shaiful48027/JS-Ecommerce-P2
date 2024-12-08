//here is requier file connected
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());


const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); //from mongodb

const uri = process.env.URI; //create .env file for security.

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    
    await client.connect();
    console.log('this server is connect');
    

    //For Slider Function
    const db = client.db('js-e-commerce'); //call from mongodb Database name.
    const dbcollection = db.collection('sliders'); //call from mongodb collection name.
    const orderCollection = db.collection('orders'); //call from mongodb collection name.
    const productsCollection = db.collection('products'); //call from mongodb collection name.


    // for Dashboard Report

    app.get('/report', async(req, res)=>{

      const date = new Date();
      const todays = date.toLocaleDateString();
      const conditions = {date : todays}
      console.log(conditions);
      
      const todaysOrder = (await orderCollection.find(conditions).toArray()).length;
      const totalProduct = await productsCollection.countDocuments();
      const totalOrdres = await orderCollection.countDocuments();
      const totalSlider = await dbcollection.countDocuments();

      const data = {
        todaysOrder,
        totalProduct,
        totalOrdres,
        totalSlider
      }
      res.send(data);
    });


    //For Slider Function
    app.get('/sliders', async(req, res)=>{  //create link for slider port (frontend => hhtp://localhost:5000/sliders)
      const resuls = await dbcollection.find().toArray();
      res.send(resuls);
    });


    //For All Products

    app.get('/api/product', async(req, res)=>{
      const result = await productsCollection.find().toArray();
      res.send(result);
    });


    //For Product Function

    

    app.get('/api/porducts', async(req, res)=>{ //create link for product port (frontend => hhtp://localhost:5000/api/porducts)
      
      const totalproducts = await productsCollection.countDocuments(); //all product 
      let skip = 0;

      if (totalproducts > 10){
            skip = totalproducts -8;        
      }
      else{
        skip = 0;
      }
      const result = await productsCollection.find().skip(skip).toArray();
      res.send(result);
    });


    //for Product id details

    app.get('/productid/:id', async(req, res)=>{
      const {id} = req.params;
      const result = await productsCollection.findOne({_id : new ObjectId(id)});
      res.send(result);
    });


    //order manegment
    app.post('/new-order', async(req, res)=>{
      const data = req.body;
      const result = await orderCollection.insertOne(data)
      res.send(result);
    });


    //all orders
    app.get('/all-order', async(req, res)=>{
      const results = await orderCollection.find().toArray();
      res.send(results);
    })


    app.listen(5000, ()=>{  // for port local link 
      console.log('this port is 5000')});

  } finally {
    
  }
};

run().catch(console.dir);
