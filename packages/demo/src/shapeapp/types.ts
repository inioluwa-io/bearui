export interface IShape {
  draw: (attr?: any) => void
  save: () => void
  clearSaved: () => void
  getSaved: () => any
}
