const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose
const bcrypt = require('bcrypt-nodejs'); // A native JS bcrypt library for NodeJS
/*
// Validate Function to check e-mail length
let titleLengthChecker = (title) => {
    // Check if e-mail exists
    if (!title) {
        return false; // Return errors
    } else if (title.length < 5 || title.length > 50) {// Check the length of title string 
        return false; // Return error if not within proper length
    } else {
        return true; // Return as valid e-mail
    }
};

// Validate Function to check if valid e-mail format
let alphaNumericTitleChecker = (title) => {
    // Check if e-mail exists
    if (!title) {
        return false; // Return error
    } else {
        // Regular expression to test for a valid e-mail
        const regExp = new RegExp(/^[a-zA-z0-9 ]+$/);
        return regExp.test(title); // Return regular expression test results (true or false)
    }
};

// Array of Email Validators
const titleValidators = [
    // First Email Validator
    {
        validator: titleLengthChecker,
        message: 'Title must be more than 5 characters but no more than 50'
    },
    // Second Email Validator
    {
        validator: alphaNumericTitleChecker,
        message: 'Title must be a alphanumeric'
    }
];

// Validate Function to check username length
let bodyLengthChecker = (body) => {
    // Check if username exists
    if (!body) {
        return false; // Return error
    } else if (body.length < 3 || body.length > 500) {// Check length of username string
        return false; // Return error if does not meet length requirement
    } else {
        return true; // Return as valid username
    }
};

// Array of Username validators
const bodyValidators = [
    // First Username validator
    {
        validator: bodyLengthChecker,
        message: 'Body must be more than 5 characters but no more than 500.'
    }
];

// Validate Function to check password length
let commentLengthChecker = (comment) => {
    // Check if password exists
    if (!comment[0]) {
        return false; // Return error
    } else if (comment[0].length < 1 || comment[0].length > 200) { // Check password length
        return false; // Return error if passord length requirement is not met
    } else {
        return true; // Return password as valid
    }
};

// Array of Password validators
const commentValidators = [
    // First password validator
    {
        validator: commentLengthChecker,
        message: 'Comments may not exceed 200 characters.'
    }
];

// User Model Definition
const blogSchema = new Schema({
    title: { type: String, required: true, validator: titleValidators },
    body: { type: String, required: true, validator: bodyValidators },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: String, default: 0 },
    linkedBy: { type: Array },
    dislikes: { type: Number, default: 0 },
    dislikedBy: { type: Array },
    comments: [{
        comment: { type: String, validate: commentValidators },
        commentator: { type: String }
    }]
});

// Schema Middleware to Encrypt Password
blogSchema.pre('save', function (next) {
    // Ensure password is new or modified before applying encryption
    if (!this.isModified('password'))
        return next();

    // Apply encryption
    bcrypt.hash(this.password, null, null, (err, hash) => {
        if (err) return next(err); // Ensure no errors
        this.password = hash; // Apply encryption to password
        next(); // Exit middleware
    });
});

// Export Module/Schema
module.exports = mongoose.model('Blog', blogSchema);
*/
// Validate Function to check blog title length
let titleLengthChecker = (title) => {
    // Check if blog title exists
    if (!title) {
      return false; // Return error
    } else {
      // Check the length of title
      if (title.length < 5 || title.length > 50) {
        return false; // Return error if not within proper length
      } else {
        return true; // Return as valid title
      }
    }
  };
  
  // Validate Function to check if valid title format
  let alphaNumericTitleChecker = (title) => {
    // Check if title exists
    if (!title) {
      return false; // Return error
    } else {
      // Regular expression to test for a valid title
      const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
      return regExp.test(title); // Return regular expression test results (true or false)
    }
  };
  
  // Array of Title Validators
  const titleValidators = [
    // First Title Validator
    {
      validator: titleLengthChecker,
      message: 'Title must be more than 5 characters but no more than 50'
    },
    // Second Title Validator
    {
      validator: alphaNumericTitleChecker,
      message: 'Title must be alphanumeric'
    }
  ];
  
  // Validate Function to check body length
  let bodyLengthChecker = (body) => {
    // Check if body exists
    if (!body) {
      return false; // Return error
    } else {
      // Check length of body
      if (body.length < 5 || body.length > 500) {
        return false; // Return error if does not meet length requirement
      } else {
        return true; // Return as valid body
      }
    }
  };
  
  // Array of Body validators
  const bodyValidators = [
    // First Body validator
    {
      validator: bodyLengthChecker,
      message: 'Body must be more than 5 characters but no more than 500.'
    }
  ];
  
  // Validate Function to check comment length
  let commentLengthChecker = (comment) => {
    // Check if comment exists
    if (!comment[0]) {
      return false; // Return error
    } else {
      // Check comment length
      if (comment[0].length < 1 || comment[0].length > 200) {
        return false; // Return error if comment length requirement is not met
      } else {
        return true; // Return comment as valid
      }
    }
  };
  
  // Array of Comment validators
  const commentValidators = [
    // First comment validator
    {
      validator: commentLengthChecker,
      message: 'Comments may not exceed 200 characters.'
    }
  ];
  
  // Blog Model Definition
  const blogSchema = new Schema({
    title: { type: String, required: true, validate: titleValidators },
    body: { type: String, required: true, validate: bodyValidators },
    createdBy: { type: String },
    createdAt: { type: Date, default: Date.now() },
    likes: { type: Number, default: 0 },
    likedBy: { type: Array },
    dislikes: { type: Number, default: 0 },
    dislikedBy: { type: Array },
    comments: [{
      comment: { type: String, validate: commentValidators },
      commentator: { type: String },
      likesComment: {type: Number, default: 0},
      likedCommentBy: {type: Array},
      dislikesComment: {type: Number, default:0},
      dislikedCommentBy: {type: Array}
    }]
  });
  
  // Export Module/Schema
  module.exports = mongoose.model('Blog', blogSchema);