# rap-ui

A frontend react framework for building beautiful UI.

## Features

- Easy to use components
- Uses Material design icon pack
- Themeable
- Themeable

## Contributing

You are welcome to give us a hand!!

## Documentation

Rap-ui comes with default color scheme props for all color related properties: primary, success, info, danger, warning, transparent, white , dark.

### Button

This components returns a button. You can pas the following props

- size: string - ("xs","sm","md","lg")
- background: string - ("primary","success","info","danger","warning", "transparent","white","dark", css color value : rgb, hex, rgba)
- textColor: string - (css color value : rgb, hex, rgba)
- gradient:boolean - (should convert button background-color to gradient. - default false)
- outline:boolean - (should outline the button and make background transparent. Note: border color also works with background color if borderColor prop is not set. - default false)
- iconRight:boolean - (move Icon to the right - default false)
- icon:string - (set the path of icon. Note: it uses mdi package)
- iconColor:string - (set the color icon.)
- borderColor:string - (Sets outline's color. - default false)
- iconOnly:boolean - (this will hide the text and show only the icon in the button - default false)
- glow:boolean - (this adds a glow effect on the button - default false)
