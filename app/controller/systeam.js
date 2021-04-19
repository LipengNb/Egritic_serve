'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    async menus() {
      const { ctx } = this;
      const res = await this.service.systeam.getMenus();
      ctx.body = {
        code: 0,
        data: res,
      };
    }
    async createMenus() {
      const { ctx } = this;
      const body = ctx.request.body;
      const res = await this.service.systeam.createMenus(body);
      ctx.body = {
        code: 0,
        data: res,
      };
    }
    async deleteMenus() {
      const { ctx } = this;
      const body = ctx.request.body;
      const res = await this.service.systeam.deleteMenus(body);
      ctx.body = {
        code: 0,
        data: res,
      };
    }
    async updateMenus() {
      const { ctx } = this;
      const body = ctx.request.body;
      const res = await this.service.systeam.updateMenus({ _id: body._id }, body);
      ctx.body = {
        code: 0,
        data: res,
      };
    }
  }
  return Controller;
};
