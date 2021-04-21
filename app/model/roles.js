'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const rolesSchema = new Schema({
    role_name: {
      type: String,
      required: true,
    },
    name: {
      type: String,
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
