'use strict';
module.exports = {
  /**
   * 返回客户端的内容
   * @param status // 接口是否成功
   * @param data // 返回数据
   * @param message // 返回信息提示
   * @param code // 返回状态码
   **/

  returnBody(status = 200, data = {}, message = 'success', code = 200) {
    this.status = status;
    this.body = {
      status,
      data,
      message,
      code,
    };
  },
  async getToken(data) {
    return await this.app.jwt.sign(data, this.app.config.jwt.secret, { expiresIn: 30 * 24 * 60 * 60 + 's' });
  },
  async checkToken(token) {
    return await this.app.jwt.verify(token, this.app.config.jwt.secret);
  },
};
