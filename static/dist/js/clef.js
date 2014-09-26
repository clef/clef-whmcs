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
    this.addNavigationLinks();
    return console.log('hey');
  };

  Clef.prototype.addNavigationLinks = function() {
    var $password, $userDropdown;
    $userDropdown = $('#Menu-Hello_User');
    if ($userDropdown.length) {
      $password = $userDropdown.next().find('#Menu-Hello_User-Change_Password');
      return $password.clone().attr('id', null).attr('href', "" + this.options.baseURL + "/index.php?m=clef").text('Manage Passwordless Login').wrap('<li></li>').insertAfter($password);
    }
  };

  return Clef;

})();

global.Clef = Clef;

global.ClefLogin = Login;

global.ClefLogout = Logout;


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzZXBvbGxhay9jbGVmeS9wbHVnaW5zL3dobWNzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qZXNzZXBvbGxhay9jbGVmeS9wbHVnaW5zL3dobWNzL3N0YXRpYy9zcmMvY29mZmVlL2NsZWYuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxzQkFBQTs7QUFBQSxDQUFBLEdBQUksTUFBSixDQUFBOztBQUFBO0FBR2UsRUFBQSxlQUFBLEdBQUE7QUFDWCxJQUFBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFBLEdBQUE7ZUFDaEIsS0FBQyxDQUFBLE1BQUQsQ0FBQSxFQURnQjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWxCLENBQUEsQ0FEVztFQUFBLENBQWI7O0FBQUEsa0JBR0EsTUFBQSxHQUFRLFNBQUEsR0FBQTtBQUNOLElBQUEsQ0FBQSxDQUFFLGFBQUYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxDQUFBLENBQUUsaUJBQUYsQ0FEYixDQUVFLENBQUMsR0FGSCxDQUdJO0FBQUEsTUFBQSxPQUFBLEVBQVMsT0FBVDtLQUhKLENBQUEsQ0FBQTtXQUlBLElBQUMsQ0FBQSxpQkFBRCxDQUFBLEVBTE07RUFBQSxDQUhSLENBQUE7O0FBQUEsa0JBU0EsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO0FBQ2pCLFFBQUEsZ0NBQUE7QUFBQTtBQUFBO1NBQUEsMkNBQUE7d0JBQUE7QUFDRSxvQkFBQSxVQUFVLENBQUMsVUFBWCxDQUFzQjtBQUFBLFFBQUEsRUFBQSxFQUFJLE1BQUo7T0FBdEIsRUFBQSxDQURGO0FBQUE7b0JBRGlCO0VBQUEsQ0FUbkIsQ0FBQTs7ZUFBQTs7SUFIRixDQUFBOztBQUFBO0FBaUJFLG1CQUFBLFFBQUEsR0FBVSxLQUFWLENBQUE7O0FBQ2EsRUFBQSxnQkFBQSxHQUFBO0FBQ1gsSUFBQSxXQUFBLENBQVksSUFBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLElBQXBCLENBQVosRUFBdUMsSUFBQyxDQUFBLFFBQXhDLENBQUEsQ0FEVztFQUFBLENBRGI7O0FBQUEsbUJBR0EsYUFBQSxHQUFlLFNBQUEsR0FBQTtXQUNiLElBQUMsQ0FBQSxlQUFELENBQWlCLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLEtBQUQsR0FBQTtBQUNmLFFBQUEsSUFBcUIsS0FBckI7QUFBQSxpQkFBTyxLQUFDLENBQUEsT0FBRCxDQUFBLENBQVAsQ0FBQTtTQURlO01BQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakIsRUFEYTtFQUFBLENBSGYsQ0FBQTs7QUFBQSxtQkFNQSxlQUFBLEdBQWlCLFNBQUMsRUFBRCxHQUFBO1dBQ2YsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxrQ0FBVixFQUE4QyxTQUFDLElBQUQsR0FBQTthQUM1QyxFQUFBLENBQUcsSUFBSSxDQUFDLFNBQVIsRUFENEM7SUFBQSxDQUE5QyxFQURlO0VBQUEsQ0FOakIsQ0FBQTs7QUFBQSxtQkFTQSxPQUFBLEdBQVMsU0FBQSxHQUFBO1dBQ1AsTUFBTSxDQUFDLFFBQVAsR0FBa0IsR0FEWDtFQUFBLENBVFQsQ0FBQTs7Z0JBQUE7O0lBakJGLENBQUE7O0FBQUE7QUE4QmUsRUFBQSxjQUFFLE9BQUYsR0FBQTtBQUNYLElBRFksSUFBQyxDQUFBLFVBQUEsT0FDYixDQUFBO0FBQUEsSUFBQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQWxCLENBQUEsQ0FEVztFQUFBLENBQWI7O0FBQUEsaUJBRUEsTUFBQSxHQUFRLFNBQUEsR0FBQTtBQUNOLElBQUEsSUFBQyxDQUFBLGtCQUFELENBQUEsQ0FBQSxDQUFBO1dBQ0EsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBRk07RUFBQSxDQUZSLENBQUE7O0FBQUEsaUJBS0Esa0JBQUEsR0FBb0IsU0FBQSxHQUFBO0FBQ2xCLFFBQUEsd0JBQUE7QUFBQSxJQUFBLGFBQUEsR0FBZ0IsQ0FBQSxDQUFFLGtCQUFGLENBQWhCLENBQUE7QUFDQSxJQUFBLElBQUcsYUFBYSxDQUFDLE1BQWpCO0FBQ0UsTUFBQSxTQUFBLEdBQVksYUFBYSxDQUFDLElBQWQsQ0FBQSxDQUFvQixDQUFDLElBQXJCLENBQTBCLGtDQUExQixDQUFaLENBQUE7YUFDQSxTQUNFLENBQUMsS0FESCxDQUFBLENBRUUsQ0FBQyxJQUZILENBRVEsSUFGUixFQUVjLElBRmQsQ0FHRSxDQUFDLElBSEgsQ0FHUSxNQUhSLEVBR2dCLEVBQUEsR0FBRSxJQUFDLENBQUEsT0FBTyxDQUFDLE9BQVgsR0FBb0IsbUJBSHBDLENBSUUsQ0FBQyxJQUpILENBSVEsMkJBSlIsQ0FLRSxDQUFDLElBTEgsQ0FLUSxXQUxSLENBTUUsQ0FBQyxXQU5ILENBTWUsU0FOZixFQUZGO0tBRmtCO0VBQUEsQ0FMcEIsQ0FBQTs7Y0FBQTs7SUE5QkYsQ0FBQTs7QUFBQSxNQStDTSxDQUFDLElBQVAsR0FBYyxJQS9DZCxDQUFBOztBQUFBLE1BZ0RNLENBQUMsU0FBUCxHQUFtQixLQWhEbkIsQ0FBQTs7QUFBQSxNQWlETSxDQUFDLFVBQVAsR0FBb0IsTUFqRHBCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJCA9IGpRdWVyeVxuXG5jbGFzcyBMb2dpblxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICAkKGRvY3VtZW50KS5yZWFkeSA9PlxuICAgICAgQHJlbmRlcigpXG4gIHJlbmRlcjogLT5cbiAgICAkKCcuY2xlZi1sb2dpbicpXG4gICAgICAucHJlcGVuZFRvKCQoJy5sb2dpbmNvbnRhaW5lcicpKVxuICAgICAgLmNzc1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgQGluaXRpYWxpemVCdXR0b25zKClcbiAgaW5pdGlhbGl6ZUJ1dHRvbnM6IC0+XG4gICAgZm9yIGJ1dHRvbiBpbiAkKCcuY2xlZi1idXR0b24tdG8tcmVuZGVyJylcbiAgICAgIENsZWZCdXR0b24uaW5pdGlhbGl6ZSBlbDogYnV0dG9uXG5cbmNsYXNzIExvZ291dFxuICBpbnRlcnZhbDogMTAwMDBcbiAgY29uc3RydWN0b3I6IC0+XG4gICAgc2V0SW50ZXJ2YWwgQGRvTG9nb3V0Q2hlY2suYmluZCh0aGlzKSwgQGludGVydmFsXG4gIGRvTG9nb3V0Q2hlY2s6IC0+XG4gICAgQHVzZXJJc0xvZ2dlZE91dCAoY2hlY2spID0+XG4gICAgICByZXR1cm4gQHJlZnJlc2goKSBpZiBjaGVja1xuICB1c2VySXNMb2dnZWRPdXQ6IChjYikgLT5cbiAgICAkLmdldEpTT04gJy9jbGllbnRhcmVhLnBocD9hamF4X2xvZ291dD10cnVlJywgKGRhdGEpIC0+XG4gICAgICBjYihkYXRhLmxvZ2dlZE91dClcbiAgcmVmcmVzaDogLT5cbiAgICB3aW5kb3cubG9jYXRpb24gPSAnJ1xuXG5jbGFzcyBDbGVmXG4gIGNvbnN0cnVjdG9yOiAoQG9wdGlvbnMpIC0+XG4gICAgJChkb2N1bWVudCkucmVhZHkoQHJlbmRlci5iaW5kKHRoaXMpKVxuICByZW5kZXI6IC0+XG4gICAgQGFkZE5hdmlnYXRpb25MaW5rcygpXG4gICAgY29uc29sZS5sb2cgJ2hleSdcbiAgYWRkTmF2aWdhdGlvbkxpbmtzOiAtPlxuICAgICR1c2VyRHJvcGRvd24gPSAkKCcjTWVudS1IZWxsb19Vc2VyJylcbiAgICBpZiAkdXNlckRyb3Bkb3duLmxlbmd0aFxuICAgICAgJHBhc3N3b3JkID0gJHVzZXJEcm9wZG93bi5uZXh0KCkuZmluZCgnI01lbnUtSGVsbG9fVXNlci1DaGFuZ2VfUGFzc3dvcmQnKVxuICAgICAgJHBhc3N3b3JkXG4gICAgICAgIC5jbG9uZSgpXG4gICAgICAgIC5hdHRyKCdpZCcsIG51bGwpXG4gICAgICAgIC5hdHRyKCdocmVmJywgXCIje0BvcHRpb25zLmJhc2VVUkx9L2luZGV4LnBocD9tPWNsZWZcIilcbiAgICAgICAgLnRleHQoJ01hbmFnZSBQYXNzd29yZGxlc3MgTG9naW4nKVxuICAgICAgICAud3JhcCgnPGxpPjwvbGk+JylcbiAgICAgICAgLmluc2VydEFmdGVyKCRwYXNzd29yZClcblxuZ2xvYmFsLkNsZWYgPSBDbGVmXG5nbG9iYWwuQ2xlZkxvZ2luID0gTG9naW5cbmdsb2JhbC5DbGVmTG9nb3V0ID0gTG9nb3V0Il19
