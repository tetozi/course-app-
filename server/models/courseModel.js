const mongoose = require('mongoose');




const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "The course must have name"],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, "Must have description"],
    trim: true,
    maxlength: [2000, "A description name must have less or equal then 50 characters"]
  },
  imageUrl: {
    type: String,
    required: [true, 'Course  must have a image']

  },
  duration: {
    type: String,
    required: [true, 'The course must have a duration time'],

  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },

  customers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    }
  ]

}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
})

courseSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'course',
  localField: '_id'
});

courseSchema.pre('save', function (next) {
  
  next()
})

courseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'customers',
    select: '-__v -passwordChangedAt'
  });

  next();
});




const Course = mongoose.model('Course', courseSchema)

module.exports = Course