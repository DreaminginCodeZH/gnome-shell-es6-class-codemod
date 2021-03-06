const Lang = imports.lang;
const ModalDialog = imports.ui.modalDialog;

const MyExtension = new Lang.Class({
    Name: 'My.Extension',

    _my_field: 0,

    _init: function() {
        true;
    },

    enable: function() {
        true;
    },

    disable: function() {
        false;
    },

    get prop() {
        return this._prop;
    },

    set prop(prop) {
        this._prop = prop;
    }
});

const MyClass = new Lang.Class({
    Name: 'My.Class',

    _my_field: Math.PI
});

const MyDialog = new Lang.Class({
    Name: 'My.Dialog',
    Extends: ModalDialog.ModalDialog,

    _init: function() {
        this.parent({ styleClass: 'dialog',
                      destroyOnClose: false });

        this.setButtons([{ action: this.close.bind(this),
                           label: _("Close"),
                           key: Clutter.Escape }]);
    },

    open: function() {
        this._entryText.set_text('');
        this.parent();
    }
});
