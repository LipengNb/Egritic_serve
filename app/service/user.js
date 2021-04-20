'use strict';

module.exports = app => {
  class Service extends app.Service {
    async login(params) {
      return await this.ctx.model.User.findOne(params);
    }
    async getMenus() {
      return await this.ctx.model.Menus.find();
    }
  }
  return Service;
};
