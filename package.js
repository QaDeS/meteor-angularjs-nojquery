Package.on_use(function (api, where) {
  api.use('ngMeteor', 'client');
  api.use('jquery', 'client');

  api.add_files('init.js', ['server']);
});
