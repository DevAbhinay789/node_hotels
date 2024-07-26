const express = require('express');
const router = express.Router();

const MenuItem = require('./../models/MenuItem');//do file piche jaa rhe hai

router.post('/', async(req,res) =>{
  try{
    const data = req.body;// assuming request body contains person data
    const newMenu = new MenuItem(data);

    //save the new person to the database using await
    const response = await newMenu.save();
    console.log('Saved person to database');
    res.status(200).json(response);
  }
  catch (err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }
})

router.get('/',async (req,res) =>{
  try{
    const data =await MenuItem.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err){
     console.log(err);
    res.status(500).json({error: 'Internal server error'});


  }

})

module.exports = router;