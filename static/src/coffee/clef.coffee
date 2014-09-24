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

global.ClefLogin = Login