'use strict';
module.exports = app => {
  class Controller extends app.Controller {
    async login() {
      const { ctx } = this;
      const { account, password } = ctx.request.body;
      const res = await this.service.account.login({ account, password });
      ctx.body = {
        code: 0,
        data: res,
      };
    }
  }
  return Controller;
};
