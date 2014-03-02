Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.use('ngMeteor', 'client');

  api.add_files('init.js', ['server']);
});
