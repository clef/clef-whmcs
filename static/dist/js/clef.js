(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var $, Clef, Login, Logout;

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
    $('.clef-login').prependTo($('form[action*="dologin.php"]')).css({
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

Logout = (function() {
  Logout.prototype.interval = 10000;

  function Logout() {
    setInterval(this.doLogoutCheck.bind(this), this.interval);
  }

  Logout.prototype.doLogoutCheck = function() {
    return this.userIsLoggedOut((function(_this) {
      return function(check) {
        if (check) {
          return _this.refresh();
        }
      };
    })(this));
  };

  Logout.prototype.userIsLoggedOut = function(cb) {
    return $.getJSON('/clientarea.php?ajax_logout=true', function(data) {
      return cb(data.loggedOut);
    });
  };

  Logout.prototype.refresh = function() {
    return window.location = '';
  };

  return Logout;

})();

Clef = (function() {
  function Clef(options) {
    this.options = options;
    $(document).ready(this.render.bind(this));
  }

  Clef.prototype.render = function() {
    // return this.addNavigationLinks();
  };

  Clef.prototype.addNavigationLinks = function() {
    var $changePasswordLink;
    $changePasswordLink = $('li a[href*="clientarea.php?action=changepw"]');
    if ($changePasswordLink.length) {
      return $.each($changePasswordLink, (function(_this) {
        return function(i, el) {
          var $clefLink, $el;
          $el = $(el);
          return $clefLink = $el.clone().attr('id', null).attr('href', "" + _this.options.baseURL + "/index.php?m=clef").text('Manage Passwordless Login').wrap('<li>').parent().insertAfter($el.parent());
        };
      })(this));
    }
  };

  return Clef;

})();

global.Clef = Clef;

global.ClefLogin = Login;

global.ClefLogout = Logout;


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])
