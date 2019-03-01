### UglyHTML5EpiserverCMSColorPicker

This is DOJO widget for Episerver CMS providing the option to pick a color using HTML5 input element of type color.

### License
MIT

### Reference
Slipped on [knowit/ColorPickerEditor](https://github.com/knowit/ColorPickerEditor).

### How to

1. Place the editor file in you solution. Best fits in in ~/ClientResources/Scripts/Editors.
2. Edit the HTML5ColorPicker and change path in declaration to your site prefix. That you can found in root folder module.config

<dojo>    
    <paths>
      <add name="YOUR_SITE_PREFIX" path="Scripts" />
    </paths>
…
3. Decorate you properties.
  
    [ClientEditor(ClientEditingClass = "alloy/editors/HTML5ColorPicker")]
    public virtual string ColorTest3 { get; set; }
