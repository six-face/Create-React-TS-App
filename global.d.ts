// giving ts hints to indentify less files
declare module '*.less' {
  interface LessStyle {
    [styleName: string]: string
  }
  const style: LessStyle
  export default style
}

// images can be used as modules
declare module '*.png'
declare module '*.jpg'
