'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const rolesSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    menus: {
      type: Array,
    },
    enable: {
      type: Boolean, Number,
      required: true,
    },
  });

  return mongoose.model('Roles', rolesSchema, 'roles');
};
