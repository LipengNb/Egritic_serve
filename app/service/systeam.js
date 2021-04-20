'use strict';

module.exports = app => {
  class Service extends app.Service {
    // 菜单管理
    async getMenus() {
      return await this.ctx.model.Menus.find();
    }
    async createMenus(params) {
      return await this.ctx.model.Menus.create(params);
    }
    async deleteMenus(params) {
      return await this.ctx.model.Menus.remove(params);
    }
    async updateMenus(id, params) {
      return await this.ctx.model.Menus.update(id, params);
    }
    // 角色管理
    async createRoles(params) {
      return await this.ctx.model.Roles.create(params);
    }
    async getRoles() {
      return await this.ctx.model.Roles.find();
    }
  }
  return Service;
};
