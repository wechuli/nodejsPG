const express = require("express");
const Course = require("../models/Course.model");

const router = express.Router();

//create a new post
router
  .route("/")
  .post(async (req, res) => {
    try {
      const newCourse = new Course(req.body);
      //Save the document
      await newCourse.save();

      res.status(201).json({ msg: "New course created" });
    } catch (error) {
      res.status(500).json({ message: "something went wrong", error });
    }
  })
  .get(async (req, res) => {
    try {
      const courses = await Course.find({})
        .limit(10)
        .sort("-name") //we can pass the parameter like this
        .select({ name: 1, tags: 1, author: 1, isPublished: 1 }) //or we can use an object (key pairs should be 1 to return the named parameter)
        .exec();
      res.status(200).json({ message: "success", courses });
    } catch (error) {
      //to get list of all errors
      for (field in error.errors) {
        console.log(error.errors[field]);
      }
      res.status(500).json({ error: "Unexpected error", error });
    }
  });

router.get("/comp", async (req, res) => {
  //Comparison operators
  // eq (equal)
  // ne (not equal)
  // gt (greater than)
  // gte (greater than or equal to)
  // lt (less than)
  // lte (less than or equal to)
  // in
  // nin (not in)

  //const courses = await Course.find({ price: { $gte: 10, $lte: 20 } }) //find courses between certain values
  const courses = await Course.find({ price: { $in: [10, 15, 20] } }) //find cources with prices in certain values
    .limit(10)
    .sort({ name: 1 })
    .exec();

  res.status(200).json(courses);
});

router.get("/logical", async (req, res) => {
  //Logical operators

  //or
  //and

  courses = await Course.find()
    .or([{ author: "Wechuli" }, { isPublished: true }])
    // .and([{ price: 10 }, { name: "Blah blah" }])
    .limit(10)
    .sort({ name: 1 })
    .exec();

  res.status(200).json(courses);
});

router.get("/regex", async (req, res) => {
  //Regex

  // courses = await Course.find({ author: /^Wech/ }) //Starts with Wech
  // courses = await Course.find({ author: /une$/i }) //ends with une (case insenstitive-the last flag)
  courses = await Course.find({ author: /.*chuli.*/i }) //containes 'chuli' anywhere
    .limit(10)
    .sort({ name: 1 })
    .exec();

  res.status(200).json(courses);
});

router.get("/count", async (req, res) => {
  //We can count documents
  const courses = await Course.find({})
    .countDocuments()
    .exec();

  res.status(200).json(courses);
});

router.get("/paginate", async (req, res) => {
  //Pagination
  const pageNumber = 6;
  const pageSize = 1;
  //In a realistic scenario, we would send pageSize and pageNumber as queryParameters
  //e.g /api/courses?pageNumber=2&pageSize=10

  const courses = await Course.find({})
    .skip((pageNumber - 1) * pageSize) //Specifies the number of documents to skip
    .limit(pageSize)
    .sort({ name: 1 }) //limits the page size
    .exec();

  res.status(200).json(courses);
});

module.exports = router;
