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

class Clef
  constructor: (@options) ->
    $(document).ready(@render.bind(this))
  render: ->
    @addNavigationLinks()
    console.log 'hey'
  addNavigationLinks: ->
    $userDropdown = $('#Menu-Hello_User')
    if $userDropdown.length
      $password = $userDropdown.next().find('#Menu-Hello_User-Change_Password')
      $password
        .clone()
        .attr('id', null)
        .attr('href', "#{@options.baseURL}/index.php?m=clef")
        .text('Manage Passwordless Login')
        .wrap('<li></li>')
        .insertAfter($password)

global.Clef = Clef
global.ClefLogin = Login
global.ClefLogout = Logout