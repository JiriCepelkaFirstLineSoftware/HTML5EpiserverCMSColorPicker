### HTML5EpiserverCMSColorPicker

This is DOJO widget for Episerver CMS providing the option to pick a color using HTML5 input element of type color.

### License
MIT

### Reference
Construed from [knowit/ColorPickerEditor](https://github.com/knowit/ColorPickerEditor).

### How to

1. Place the editor files in your solution. Best fits in ~/ClientResources/Scripts/Editors. Otherwise you have to change paths.
2. Edit the HTML5ColorPicker.js and change prefix path in declaration to your site prefix. That you can found in root folder module.config.

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
