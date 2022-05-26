const catchAsync = require('./../error/catchAsync')
const AppError = require('./../error/appError')

exports.deleteOne = Model => catchAsync(async (req, res, next) => {

    const document = await Model.findByIdAndDelete(req.params.id);

    if (!document) {
        return next(new AppError("Course not found"), 404)
    }

    res.status(204).json({
        status: 'success',
        data: null
    });

});


exports.updateOne = Model =>  catchAsync(async (req, res, next) => {

    const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!document) {
      return next(new AppError("Course not found"), 404)
    }
  
    res.status(200).json({
      status: 'success',
      data: {
       data: document
      }
    });
  
  });


  exports.createOne = Model => catchAsync(async (req, res, next) => {
    if (!req.body.user) req.body.user = req.user.id
  
    const document = await Model.create(req.body);
  
    res.status(201).json({
      status: 'success',
      data: {
        data: document
      }
    });
  
  });

