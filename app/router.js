'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/login', controller.account.login);
  // 系统配置
  router.get('/systeam/menus/find', controller.systeam.menus);
  router.post('/systeam/menus/create', controller.systeam.createMenus);
  router.post('/systeam/menus/delete', controller.systeam.deleteMenus);
  router.post('/systeam/menus/update', controller.systeam.updateMenus);
};
