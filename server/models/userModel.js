const mongoose = require('mongoose')
const validator =  require('validator')
const bcrypt = require ("bcryptjs")


const userSchema =  new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide your username"],
        unique: true,
        minlength: [true, "The username should be at least 5 characters."],
      },
      email:{
        type:String,
        required: [true, "Please provide your email"],
        unique: true,
        lowercase:true,
        validate:[validator.isEmail, 'Please provide a valid email']
      },
      course:{
        type: mongoose.Schema.ObjectId,
        ref: 'Course',
      },
      photo: String,
      password: {
        type: String,
        required: [true, "Provided in password"],
        minlength: [true, "The password should be at least 5 characters "],
        select: false,
      },
      passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
          // This only works on CREATE and SAVE!!!
          validator: function (el) {
            return el === this.password;
          },
          message: "Passwords are not the same!",
        },
      },
})


    userSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
  
    // Delete passwordConfirm field
    this.passwordConfirm = undefined;
    next();
  });
  userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };
  
  
  const User = mongoose.model("User", userSchema);
  
  module.exports = User;
