
const AppError = require("./../error/appError");
const catchAsync = require('./../error/catchAsync')
const User = require("../models/userModel");
const multer = require('multer');


const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/users')
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`)
  }
 
})

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image'))
    cb(null, true)
  else {
    cb(new AppError("Not an image!Please upload only a images", 401), false)
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

exports.uploadUserPhoto = upload.single('photo')

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};


exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file)
  // 1) Create error if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This route is not for password updates. Please use /updateMyPassword.',
        400
      )
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'username');
  if(req.file) filteredBody.photo = req.file.filename

  // 3) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});



exports.getOneUser = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (!user) {
    return next(new AppError("Please Log In", 401))
  }

  res.status(200).json({
    status: "success",
    data: {
      user
    }
  });
})