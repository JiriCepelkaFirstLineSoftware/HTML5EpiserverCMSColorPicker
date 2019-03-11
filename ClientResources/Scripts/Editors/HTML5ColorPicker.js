define([
  "dojo/on",
  "dojo/_base/declare",

  "dijit/_Widget",
  "dijit/_TemplatedMixin",
  "dijit/_CssStateMixin",
],
  function (
    on,
    declare,

    _Widget,
    _TemplatedMixin,
    _CssStateMixin,
  ) {
    return declare("alloy/editors/HTML5ColorPicker", [_Widget, _TemplatedMixin, _CssStateMixin],
      {

        templateString:
          "<div class=\"dijitInline\">\
             <div class=\"HTML5ColorPickerControl\" data-dojo-attach-point=\"HTML5ColorPickerControl\"></div>\
             <input type=\"color\" title=\"Color picker\" class=\"HTML5ColorPicker\" data-dojo-attach-point=\"HTML5ColorPicker\">\
           <div>",

        postCreate: function () {

          this._bindEvents(this);
          this._loadCssFile();
        },

        _setValueAttr: function (value) {
          this.HTML5ColorPicker.value = value
          this._setControlColor(value);
        },

        _setReadOnlyAttr: function (value) {
          this._set("readOnly", value);
        },

        _setValue: function (value) {

          this._set("value", value);
          this._setControlColor(value);

          if (this._started) {
            this.onChange(value);
          }
        },

        _setControlColor(value) {

          this.HTML5ColorPickerControl.style.backgroundColor = value;
        },

        _bindEvents: function (myself) {

          on(this.HTML5ColorPickerControl, "click", function (e) {
            myself.HTML5ColorPicker.click();
          });

          on(this.HTML5ColorPicker, "change", function (e) {
            myself._setValue(e.currentTarget.value);
          });
        },

        _loadCssFile: function () {

          let script;
          if (navigator.userAgent.toLowerCase().indexOf('edge') > -1) {
            script = 'HTML5ColorPicker_Edge';
          }
          else {
            script = 'HTML5ColorPicker';
          }

          var cssId = 'HTML5ColorPickerCss';
          if (!document.getElementById(cssId)) {
            let head = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = '/ClientResources/Scripts/Editors/themes/' + script + '.css';
            link.media = 'all';
            head.appendChild(link);
          }
        },
      });
  });

