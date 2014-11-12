$ = jQuery

class Login
  constructor: ->
    $(document).ready =>
      @render()
  render: ->
    $('.clef-login')
      .prependTo($('form[action*="dologin.php"]'))
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
  addNavigationLinks: ->
    $changePasswordLink = $('li a[href*="clientarea.php?action=changepw"]')
    if $changePasswordLink.length
      $.each $changePasswordLink, (i, el) =>
        $el = $(el)
        $clefLink = $el
          .clone()
          .attr('id', null)
          .attr('href', "#{@options.baseURL}/index.php?m=clef")
          .text('Manage Passwordless Login')
          .wrap('<li>')
          .parent()
          .insertAfter($el.parent())

global.Clef = Clef
global.ClefLogin = Login
global.ClefLogout = Logout