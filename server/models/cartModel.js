const mongoose =  require('mongoose')


const cartSchema = new mongoose.Schema({
    course : {
        type: mongoose.Schema.ObjectId,
        ref: "Course",
        required: [true , "Must have a course"]
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "Cart must have customer"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


cartSchema.pre(/^find/, function (next) {
    this.populate('user').populate({
        path: 'course',
        select: 'name'
    })
    next()
})


const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart


