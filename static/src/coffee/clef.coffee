$ = jQuery

class Login
  constructor: ->
    $(document).ready =>
      @render()
  render: ->
    $('.clef-login')
      .prependTo($('.logincontainer'))
      .css
        display: 'block'
    @initializeButtons()
  initializeButtons: ->
    for button in $('.clef-button-to-render')
      ClefButton.initialize el: button

class Logout
  interval: 10000
  constructor: ->
    setInterval @doLogoutCheck.bind(this), @interval
  doLogoutCheck: ->
    @userIsLoggedOut (check) =>
      return @refresh() if check
  userIsLoggedOut: (cb) ->
    $.getJSON '/clientarea.php?ajax_logout=true', (data) ->
      cb(data.loggedOut)
  refresh: ->
    window.location = ''


global.ClefLogin = Login
global.ClefLogout = Logout