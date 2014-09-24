(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var $, Login;

$ = jQuery;

Login = (function() {
  function Login() {
    $(document).ready((function(_this) {
      return function() {
        return _this.render();
      };
    })(this));
  }

  Login.prototype.render = function() {
    $('.clef-login').prependTo($('.logincontainer')).css({
      display: 'block'
    });
    return this.initializeButtons();
  };

  Login.prototype.initializeButtons = function() {
    var button, _i, _len, _ref, _results;
    _ref = $('.clef-button-to-render');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      button = _ref[_i];
      _results.push(ClefButton.initialize({
        el: button
      }));
    }
    return _results;
  };

  return Login;

})();

global.ClefLogin = Login;


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzZXBvbGxhay9jbGVmeS9wbHVnaW5zL3dobWNzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qZXNzZXBvbGxhay9jbGVmeS9wbHVnaW5zL3dobWNzL3N0YXRpYy9zcmMvY29mZmVlL2NsZWYuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxRQUFBOztBQUFBLENBQUEsR0FBSSxNQUFKLENBQUE7O0FBQUE7QUFHZSxFQUFBLGVBQUEsR0FBQTtBQUNYLElBQUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsQ0FBQSxTQUFBLEtBQUEsR0FBQTthQUFBLFNBQUEsR0FBQTtlQUNoQixLQUFDLENBQUEsTUFBRCxDQUFBLEVBRGdCO01BQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBbEIsQ0FBQSxDQURXO0VBQUEsQ0FBYjs7QUFBQSxrQkFHQSxNQUFBLEdBQVEsU0FBQSxHQUFBO0FBQ04sSUFBQSxDQUFBLENBQUUsYUFBRixDQUNFLENBQUMsU0FESCxDQUNhLENBQUEsQ0FBRSxpQkFBRixDQURiLENBRUUsQ0FBQyxHQUZILENBR0k7QUFBQSxNQUFBLE9BQUEsRUFBUyxPQUFUO0tBSEosQ0FBQSxDQUFBO1dBSUEsSUFBQyxDQUFBLGlCQUFELENBQUEsRUFMTTtFQUFBLENBSFIsQ0FBQTs7QUFBQSxrQkFTQSxpQkFBQSxHQUFtQixTQUFBLEdBQUE7QUFDakIsUUFBQSxnQ0FBQTtBQUFBO0FBQUE7U0FBQSwyQ0FBQTt3QkFBQTtBQUNFLG9CQUFBLFVBQVUsQ0FBQyxVQUFYLENBQXNCO0FBQUEsUUFBQSxFQUFBLEVBQUksTUFBSjtPQUF0QixFQUFBLENBREY7QUFBQTtvQkFEaUI7RUFBQSxDQVRuQixDQUFBOztlQUFBOztJQUhGLENBQUE7O0FBQUEsTUFnQk0sQ0FBQyxTQUFQLEdBQW1CLEtBaEJuQixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQgPSBqUXVlcnlcblxuY2xhc3MgTG9naW5cbiAgY29uc3RydWN0b3I6IC0+XG4gICAgJChkb2N1bWVudCkucmVhZHkgPT5cbiAgICAgIEByZW5kZXIoKVxuICByZW5kZXI6IC0+XG4gICAgJCgnLmNsZWYtbG9naW4nKVxuICAgICAgLnByZXBlbmRUbygkKCcubG9naW5jb250YWluZXInKSlcbiAgICAgIC5jc3NcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIEBpbml0aWFsaXplQnV0dG9ucygpXG4gIGluaXRpYWxpemVCdXR0b25zOiAtPlxuICAgIGZvciBidXR0b24gaW4gJCgnLmNsZWYtYnV0dG9uLXRvLXJlbmRlcicpXG4gICAgICBDbGVmQnV0dG9uLmluaXRpYWxpemUgZWw6IGJ1dHRvblxuXG5nbG9iYWwuQ2xlZkxvZ2luID0gTG9naW4iXX0=
