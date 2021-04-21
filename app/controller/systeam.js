'use strict';

module.exports = app => {
  class Controller extends app.Controller {
    // 菜单管理
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
    // 角色管理
    async getRoles() {
      try {
        const res = await this.service.systeam.getRoles();
        this.ctx.returnBody(200, res, '获取成功', 0);
      } catch (error) {
        this.ctx.returnBody(200, error, error.message, 1);
      }
    }
    async createRoles() {
      const body = this.ctx.request.body;
      try {
        const data = await this.service.systeam.createRoles(body);
        console.log(data);
        this.ctx.returnBody(200, data, '创建成功', 0);
      } catch (error) {
        this.ctx.returnBody(200, error, '创建失败', 1);
      }
    }
    async updateRoles() {
      const { ctx } = this;
      const body = ctx.request.body;
      try {
        const res = await this.service.systeam.updateMenus({ _id: body._id }, body);
        this.ctx.returnBody(200, res, '修改成功', 0);
      } catch (error) {
        this.ctx.returnBody(200, error, error.message, 1);
      }
    }
    // 账号管理
    async getAccounts() {
      try {
        const data = await this.service.systeam.getAccounts();
        this.ctx.returnBody(200, data, '获取成功', 0);
      } catch (error) {
        this.ctx.returnBody(200, error, '获取失败', 1);
      }
    }
    async createAccounts() {
      const body = this.ctx.request.body;
      try {
        const data = await this.service.systeam.createAccounts(body);
        this.ctx.returnBody(200, data, '创建成功', 0);
      } catch (error) {
        this.ctx.returnBody(200, error, '创建失败', 1);
      }
    }
  }
  return Controller;
};
