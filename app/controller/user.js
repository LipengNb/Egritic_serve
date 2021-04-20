'use strict';
module.exports = app => {
  class Controller extends app.Controller {
    async login() {
      const { ctx } = this;
      const { account, password } = ctx.request.body;
      try {
        const userInfo = await this.service.user.login({ account, password });
        const token = await ctx.getToken(JSON.parse(JSON.stringify(ctx.request.body)));
        ctx.session.token = token;
        ctx.returnBody(200, { userInfo, token }, '登录成功', 0);
      } catch (error) {
        ctx.returnBody(202, error, '登录失败', 1);
      }
    }
    async getMenus() {
      const { ctx } = this;
      try {
        const res = await this.service.user.getMenus();
        ctx.returnBody(200, res, '登录成功', 0);
      } catch (error) {
        ctx.returnBody(202, error, '获取失败', 1);
      }
    }
  }
  return Controller;
};
