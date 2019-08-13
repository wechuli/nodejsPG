const express = require("express");
const Course = require("../models/Course.model");

const router = express.Router();

/* Get all the published backend courses, sort them by their name, pick only their name and author and display them*/

router.get("/1", async (req, res) => {
  try {
    const courses = await Course.find({
      isPublished: true,
      tags: { $in: ["backend", "frontend"] }
    })
      .sort({ name: 1 })

      .select(["name", "author", "tags"])
      .exec();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json(error);
  }
});

/* Get all the published frontend and backend courses, sort them by their price in a descending order, pick only their name and author */

router.get("/2", async (req, res) => {
  try {
    const courses = await Course.find({
      isPublished: true,
      tags: { $in: ["backend", "frontend"] }
    })
      .sort({ price: -1 })
      //   .or([{ tags: "frontend" }, { tags: "backend" }])  //we could use this instead of $in to get data with tags backend and frontend
      .select({ author: -1 })
      .exec();

    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json(error);
  }
});
/* Get all the published courses that are $15 or more or have the word 'by' in their title*/ 
router.get("/3", async (req, res) => {
  const courses = await Course.find({
    isPublished: true
  })
    .or([{ price: { $gte: 15 } }, { name: /.*by.*/i }])
    .sort("-price");

  res.status(200).json(courses);
});

module.exports = router;
