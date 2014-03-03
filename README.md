# Angular without jQuery

Use Angular without jQuery on Meteor.

## Why?

AngularJS contains its own jQuery implementation called jqLite. Unless you are using serious jQuery Plug-ins, this is enough to power your site

**USE AT YOUR OWN RISK!**

Getting rid of jQuery is achieved with a really dirty hack. Alas, this seems to be the only reliable way to do it at the moment. You have been warned.

## How to install

1. `npm install -g meteorite` (if not already installed)
2. `mrt add angular-nojquery`
3. edit .meteorite/packages and make following packages appear in order **before** all other packages:
```
	ngMeteor
	angular-nojquery
	jquery
```
You read correctly. jQuery (or better: a modified shim) has to be loaded last in order. Told you it was a dirty hack, right?

Test your site leaving the inspector open to see if any actual jQuery dependencies pop up. Should you at one point need jQuery again, `mrt remove angular-jquery`, and optionally reorder your .meteor/packages.

## License

This package is licensed with the MIT license.

## Contributors
- [Michael Klaus](https://github.com/QaDeS/)
