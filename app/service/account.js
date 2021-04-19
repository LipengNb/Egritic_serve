'use strict';

module.exports = app => {
  class Service extends app.Service {
    async login(params) {
      const { ctx } = this;
      return await ctx.model.Account.findOne(params);
    }
  }
  return Service;
};
