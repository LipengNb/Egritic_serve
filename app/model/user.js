'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    account: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  return mongoose.model('User', userSchema, 'user');
};
