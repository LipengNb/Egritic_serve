'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 用户信息
  router.post('/login', controller.user.login);
  router.get('/user/menus', controller.user.getMenus);
  // ---------------- 系统配置 ----------------
  // > 菜单管理
  router.get('/systeam/menus/find', controller.systeam.menus);
  router.post('/systeam/menus/create', controller.systeam.createMenus);
  router.post('/systeam/menus/delete', controller.systeam.deleteMenus);
  router.post('/systeam/menus/update', controller.systeam.updateMenus);
  // > 角色管理
  router.get('/systeam/roles/find', controller.systeam.getRoles);
  router.post('/systeam/roles/create', controller.systeam.createRoles);
  router.post('/systeam/roles/update', controller.systeam.updateRoles);
  //  > 账号管理
  router.get('/systeam/accounts/find', controller.systeam.getAccounts);
  router.post('/systeam/accounts/create', controller.systeam.createAccounts);
  // getRoles
};
