### HTML5EpiserverCMSColorPicker

This is Dojo widget for Episerver CMS providing the option to pick a color using HTML5 input element of type color.

### License
MIT

### Reference
Construed from [knowit/ColorPickerEditor](https://github.com/knowit/ColorPickerEditor).

### How to

1. Place the editor files in your solution. Best fits in ~/ClientResources/Scripts/Editors. Otherwise you have to change paths.
2. Edit the HTML5ColorPicker.js and change prefix path in declaration to your site prefix. That you can found in root folder module.config.

    ##### Script

    ``` javascript
    return declare("YOUR_SITE_PREFIX/editors/HTML5ColorPicker", [_Widget, _TemplatedMixin, _CssStateMixin],
     ```
    ##### Config

    ```xml
    <dojo>    
      <paths>
        <add name="YOUR_SITE_PREFIX" path="Scripts" />
      </paths>
        …
    ```
    
3. Decorate you properties.
    ```c#
    [ClientEditor(ClientEditingClass = "YOUR_SITE_PREFIX/editors/HTML5ColorPicker")]
    public virtual string Color { get; set; }
    ```
### Encouragement

Since MIT licensed you are encouraged to alter the files to meet your needs. Especially the styles must not suit everyone and MS Edge is not to able to open its picker on JS click so it is treated differently.

### Browser support

Works with:
* Firefox
* Chrome
* Edge
