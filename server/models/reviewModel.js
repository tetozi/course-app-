const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    review: {
        type: String,
        required: [true, "Review canot be empty!"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    course: {
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
        required: [true, 'Review must belong a course.']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, 'Review must belong a user']
    }
},
    {
        toJSON: { virtuals: true },
        toObject: { virtual: true }
    }
)


reviewSchema.pre(/^find/, function(next) {
    this.populate({
        path: 'user',
        select: [ 'username', 'photo']
   
    }),
    next()
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review