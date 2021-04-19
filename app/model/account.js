'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const accountSchema = new Schema({
    account: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  });

  return mongoose.model('Account', accountSchema, 'account');
};
