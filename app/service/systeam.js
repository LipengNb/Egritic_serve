'use strict';

module.exports = app => {
  class Service extends app.Service {
    async getMenus() {
      const { ctx } = this;
      return await ctx.model.Menus.find();
    }
    async createMenus(params) {
      const { ctx } = this;
      return await ctx.model.Menus.create(params);
    }
    async deleteMenus(params) {
      const { ctx } = this;
      return await ctx.model.Menus.remove(params);
    }
    async updateMenus(id, params) {
      const { ctx } = this;
      return await ctx.model.Menus.update(id, params);
    }
  }
  return Service;
};
