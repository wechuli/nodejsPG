const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    minlength: 5,
    maxlength: 255,
    // match:/regex/,
    required: true
  },
  category: {
    type: String,
    enum: ["Web", "Mobile", "Network"],
    required: true
  },
  author: {
    type:String,
    lowercase:true, //Make all entered values lowercase
    uppercase:true, //Make all entered values to uppercase
    trim:true //adds a trim setter
  },
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function(v, callback) {
        //Do some async work e.g
        setTimeout(() => {
          const result = v && v.length > 0;
          callback(result);
        }, 4000);

        //Custom validate function
        // return v && v.length > 0;
      },
      message: "A course should have atleast one tag" //Custom validate message
    }
  },
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: {
    type: Number,
    required: function() {
      return this.isPublished; //make a field to be optionally required
    },
    min: 10,
    max: 3400,
    get:v=>Math.round(v), //getters allow you to transfrom the representation of the data as it travels from the raw mongodb document
    set:v=>Math.round(v) //setters allow you to transform the mongoose document's data before it gets to the raw mongodb document
  }
});

module.exports = mongoose.model("course", courseSchema);
