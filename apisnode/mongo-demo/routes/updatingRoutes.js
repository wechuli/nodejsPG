const express = require("express");
const Courses = require("../models/Course.model");

const router = express.Router();

router.post("/queryfirst/:id", async (req, res) => {
  //Query first update
  const { id } = req.params;
  const course = await Courses.findById(id);
  if (course) {
    // course.isPublished = true;
    // course.author = "Another Author"; //we can update it this way or use the set method
    course.set({
      isPublished: true,
      author: "Another Author"
    });
    const result = await course.save();
    res.status(200).json(result);
  } else {
    res.status(404).json({ error: "course not found" });
  }
});

router.post("/updatefirst/:id", async (req, res) => {
  //update first
  const { id } = req.params;

  const result = await Courses.updateOne(  
    { _id: id }, //an object to locate the required document
    {
      $set: {
        //Check mongoDB update operators to get a hang of how this works
        author: "Wafula P",
        isPublished: true
      }
    }
  ); //first argument is the query, getting the documents, second argument is the update
  //Alternatively we may want the updates object back and thus we can use findByIdAndUpdate, syntax changes a little bit but not much -see below
//   const result = await Courses.findByIdAndUpdate(  
//     id,  //now we just pass the id rather than an object
//     {
//       $set: {
//         //Check mongoDB update operators to get a hang of how this works
//         author: "Wafula P",
//         isPublished: true
//       }
//     },{new:true} //we need to pass this object set to true if we want back the updated document
//   );

  res.status(200).json(result);
});


//Removing a document

router.delete('/delete/:id', async (req,res)=>{
    const {id} = req.params;
    const result = await Courses.deleteOne({_id:id});
    // const result = await Courses.deleteMany({isPublished:false}); //Delete many documents
    //const course = await Courses.findByIdAndDelete(id); //find and delete a document and return the deleted document

    res.status(200).json(result);
})

module.exports = router;
