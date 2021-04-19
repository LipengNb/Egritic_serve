'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const menusSchema = new Schema({
    pid: {
      type: String, Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    router: {
      type: String,
      required: true,
    },
    authority: {
      type: String,
      required: true,
    },
    enable: {
      type: Boolean, Number,
      required: true,
    },
    sort: {
      type: Number, String,
      required: true,
    },
    btn_perms: Array,
  });

  return mongoose.model('Menus', menusSchema, 'menus');
};
