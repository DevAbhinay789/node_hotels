const express = require('express');
const router = express.Router();
// post route to add a person
const Person = require('./../models/person');
router.post('/', async(req,res) =>{
  try{
    const data = req.body;// assuming request body contains person data
    // create a new person document(record) using Mongoose model
    const newPerson = new Person(data);

    //save the new person to the database using await
    const response = await newPerson.save();
    console.log('Saved person to database');
    res.status(200).json(response);
  }
  catch (err){
    console.log(err);
    res.status(500).json({error: 'Internal server error'});
  }
})

router.put('/:id',async (req,res)=>{
  try{
    const personId = req.params.id;//extract the id from the url parameter
    const updatedPersonData = req.body; 

    const response = await Person.findByIdAndUpdate(personId,updatedPersonData, {
      new: true, // return the updated document
      runValidators: true, // Run mongoose validation

    })
    if(!response){
      return res.status(404).json({error: 'Person not found'});
    }

    console.log('date updated');
    res.status(200).json(response);

  }catch(err){
     console.log(err);
    res.status(500).json({error: 'Internal server error'});

  }
})

 
router.get('/',async (req,res) =>{
  try{
    const data =await Person.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err){
     console.log(err);
    res.status(500).json({error: 'Internal server error'});


  }
})


router.get('/:workType', async(req, res)=>{
  try{
    const workType = req.params.workType;//extract the work type from url parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await Person.find({work: workType});
      console.log('response fetched');
      res.status(200).json(response);

    }
    else{
      res.status(404).json({error: 'Invalid work type'});
    }
  }
  catch(err){
     console.log(err);
    res.status(500).json({error: 'Internal server error'});


  }
})
module.exports= router;