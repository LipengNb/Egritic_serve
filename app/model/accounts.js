'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const accountsSchema = new Schema({
    account: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    nickname: String,
    role_name: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'roles',
    },
    gender: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    enable: {
      type: Boolean,
      required: true,
    },
    create_time: {
      type: Date,
      default: Date.now,
    },
  });

  return mongoose.model('Accounts', accountsSchema, 'accounts');
};
