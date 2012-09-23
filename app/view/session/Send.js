Ext.define('GS.view.session.Send', {
  extend: 'Ext.Toolbar',
  xtype: 'sessionSend',

  config: {
    layout: {
      type: 'hbox',
      align: 'center'
    },

    items: [
      { 
        xtype: 'textfield',
        flex: 1,
        text: 'Send',
        placeHolder: 'Text Message'
      },
      { 
        xtype: 'button',
        text: 'Send',
      }
    ]
  }

});