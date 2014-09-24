(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var $, Login, Logout;

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

global.ClefLogin = Login;

global.ClefLogout = Logout;


}).call(this,typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXNzZXBvbGxhay9jbGVmeS9wbHVnaW5zL3dobWNzL25vZGVfbW9kdWxlcy9ndWxwLWJyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9qZXNzZXBvbGxhay9jbGVmeS9wbHVnaW5zL3dobWNzL3N0YXRpYy9zcmMvY29mZmVlL2NsZWYuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQSxnQkFBQTs7QUFBQSxDQUFBLEdBQUksTUFBSixDQUFBOztBQUFBO0FBR2UsRUFBQSxlQUFBLEdBQUE7QUFDWCxJQUFBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFBLEdBQUE7ZUFDaEIsS0FBQyxDQUFBLE1BQUQsQ0FBQSxFQURnQjtNQUFBLEVBQUE7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWxCLENBQUEsQ0FEVztFQUFBLENBQWI7O0FBQUEsa0JBR0EsTUFBQSxHQUFRLFNBQUEsR0FBQTtBQUNOLElBQUEsQ0FBQSxDQUFFLGFBQUYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxDQUFBLENBQUUsaUJBQUYsQ0FEYixDQUVFLENBQUMsR0FGSCxDQUdJO0FBQUEsTUFBQSxPQUFBLEVBQVMsT0FBVDtLQUhKLENBQUEsQ0FBQTtXQUlBLElBQUMsQ0FBQSxpQkFBRCxDQUFBLEVBTE07RUFBQSxDQUhSLENBQUE7O0FBQUEsa0JBU0EsaUJBQUEsR0FBbUIsU0FBQSxHQUFBO0FBQ2pCLFFBQUEsZ0NBQUE7QUFBQTtBQUFBO1NBQUEsMkNBQUE7d0JBQUE7QUFDRSxvQkFBQSxVQUFVLENBQUMsVUFBWCxDQUFzQjtBQUFBLFFBQUEsRUFBQSxFQUFJLE1BQUo7T0FBdEIsRUFBQSxDQURGO0FBQUE7b0JBRGlCO0VBQUEsQ0FUbkIsQ0FBQTs7ZUFBQTs7SUFIRixDQUFBOztBQUFBO0FBaUJFLG1CQUFBLFFBQUEsR0FBVSxLQUFWLENBQUE7O0FBQ2EsRUFBQSxnQkFBQSxHQUFBO0FBQ1gsSUFBQSxXQUFBLENBQVksSUFBQyxDQUFBLGFBQWEsQ0FBQyxJQUFmLENBQW9CLElBQXBCLENBQVosRUFBdUMsSUFBQyxDQUFBLFFBQXhDLENBQUEsQ0FEVztFQUFBLENBRGI7O0FBQUEsbUJBR0EsYUFBQSxHQUFlLFNBQUEsR0FBQTtXQUNiLElBQUMsQ0FBQSxlQUFELENBQWlCLENBQUEsU0FBQSxLQUFBLEdBQUE7YUFBQSxTQUFDLEtBQUQsR0FBQTtBQUNmLFFBQUEsSUFBcUIsS0FBckI7QUFBQSxpQkFBTyxLQUFDLENBQUEsT0FBRCxDQUFBLENBQVAsQ0FBQTtTQURlO01BQUEsRUFBQTtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBakIsRUFEYTtFQUFBLENBSGYsQ0FBQTs7QUFBQSxtQkFNQSxlQUFBLEdBQWlCLFNBQUMsRUFBRCxHQUFBO1dBQ2YsQ0FBQyxDQUFDLE9BQUYsQ0FBVSxrQ0FBVixFQUE4QyxTQUFDLElBQUQsR0FBQTthQUM1QyxFQUFBLENBQUcsSUFBSSxDQUFDLFNBQVIsRUFENEM7SUFBQSxDQUE5QyxFQURlO0VBQUEsQ0FOakIsQ0FBQTs7QUFBQSxtQkFTQSxPQUFBLEdBQVMsU0FBQSxHQUFBO1dBQ1AsTUFBTSxDQUFDLFFBQVAsR0FBa0IsR0FEWDtFQUFBLENBVFQsQ0FBQTs7Z0JBQUE7O0lBakJGLENBQUE7O0FBQUEsTUE4Qk0sQ0FBQyxTQUFQLEdBQW1CLEtBOUJuQixDQUFBOztBQUFBLE1BK0JNLENBQUMsVUFBUCxHQUFvQixNQS9CcEIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIkID0galF1ZXJ5XG5cbmNsYXNzIExvZ2luXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgICQoZG9jdW1lbnQpLnJlYWR5ID0+XG4gICAgICBAcmVuZGVyKClcbiAgcmVuZGVyOiAtPlxuICAgICQoJy5jbGVmLWxvZ2luJylcbiAgICAgIC5wcmVwZW5kVG8oJCgnLmxvZ2luY29udGFpbmVyJykpXG4gICAgICAuY3NzXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICBAaW5pdGlhbGl6ZUJ1dHRvbnMoKVxuICBpbml0aWFsaXplQnV0dG9uczogLT5cbiAgICBmb3IgYnV0dG9uIGluICQoJy5jbGVmLWJ1dHRvbi10by1yZW5kZXInKVxuICAgICAgQ2xlZkJ1dHRvbi5pbml0aWFsaXplIGVsOiBidXR0b25cblxuY2xhc3MgTG9nb3V0XG4gIGludGVydmFsOiAxMDAwMFxuICBjb25zdHJ1Y3RvcjogLT5cbiAgICBzZXRJbnRlcnZhbCBAZG9Mb2dvdXRDaGVjay5iaW5kKHRoaXMpLCBAaW50ZXJ2YWxcbiAgZG9Mb2dvdXRDaGVjazogLT5cbiAgICBAdXNlcklzTG9nZ2VkT3V0IChjaGVjaykgPT5cbiAgICAgIHJldHVybiBAcmVmcmVzaCgpIGlmIGNoZWNrXG4gIHVzZXJJc0xvZ2dlZE91dDogKGNiKSAtPlxuICAgICQuZ2V0SlNPTiAnL2NsaWVudGFyZWEucGhwP2FqYXhfbG9nb3V0PXRydWUnLCAoZGF0YSkgLT5cbiAgICAgIGNiKGRhdGEubG9nZ2VkT3V0KVxuICByZWZyZXNoOiAtPlxuICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcnXG5cblxuZ2xvYmFsLkNsZWZMb2dpbiA9IExvZ2luXG5nbG9iYWwuQ2xlZkxvZ291dCA9IExvZ291dCJdfQ==
