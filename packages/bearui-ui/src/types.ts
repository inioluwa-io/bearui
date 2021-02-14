import {
  ButtonHTMLAttributes,
  Dispatch,
  SetStateAction,
  LinkHTMLAttributes,
  HTMLAttributes,
  ComponentType,
  ReactElement,
  ClassAttributes,
} from "react"

export type ButtonStyle = {
  corners?: "rounded" | "box"
  textColor?: string
  background?: string
  icon?: string
  borderColor?: string
  iconColor?: string
  glow?: boolean
  hoverColor?: string
  size?: "xs" | "sm" | "md" | "lg"
}

export interface ButtonProps extends ButtonStyle, ButtonHTMLAttributes<any> {
  loading?: boolean
  loadingIcon?: any
  transparent?: boolean
  iconOnly?: boolean
  gradient?: boolean
  outline?: boolean
  iconRight?: boolean
}

export type AppleSocialButton = {
  color?: "dark" | "white"
  corners?: "rounded" | "box"
} & SocialButtonProps

export type GoogleSocialButton = {
  color?: "red" | "white" | "blue"
  corners?: "rounded" | "box"
} & SocialButtonProps

export type FacebookSocialButton = {
  color?: "white" | "blue"
  corners?: "rounded" | "box"
} & SocialButtonProps

export type InstagramSocialButton = {
  color?: "white" | "purple"
  corners?: "rounded" | "box"
} & SocialButtonProps

export type SlackSocialButton = {
  color?: "white" | "purple" | "yellow"
  corners?: "rounded" | "box"
} & SocialButtonProps

export interface SocialButtonProps
  extends ButtonStyle,
    ButtonHTMLAttributes<any> {
  size?: "xs" | "sm" | "md" | "lg"
  iconOnly?: boolean
  text?: string
  gradient?: boolean
  transparent?: boolean
}
export interface LinkButtonProps extends ButtonStyle, LinkHTMLAttributes<any> {
  id?: string
  hoverColor?: string
  transparent?: string
  to: string
  iconOnly?: string
  gradient?: string
  outline?: string
  iconRight?: string
}

export type AvatarProps = {
  size?: string
  color?: string
  textColor?: string
  withBadge?: boolean
  badgeText?: string
  badgeColor?: string
  withStatus?: boolean
  statusColor?: string
  icon?: string
  src?: string
  text?: string
  alt?: string
}

export type NotifyProps = {
  text: string
  title: string
  icon?: string
  iconColor?: string
}
export type NotifyWrapper = {
  time: number
  idx: number
  close: () => any
} & NotifyProps

export type NotificationProps = {
  data: NotifyProps[]
  time?: number
}

export type SwitchProps = {
  id?: string
  active?: boolean
  disabled?: boolean
  color?: string
  offText?: string
  onText?: string
  onCheck?: (param: boolean) => void
} & HTMLAttributes<HTMLInputElement>

export type CheckBoxComponent = {
  active?: boolean
  disabled?: boolean
  color?: string
  onCheck?: (param?: boolean) => void
} & HTMLAttributes<HTMLInputElement>

export type RadioComponent = {
  value?: string
  checked?: boolean
  disabled?: boolean
  color?: string
  onCheck?: (param?: string) => void
} & HTMLAttributes<HTMLInputElement>

export type RadioGroupComponent = {
  defaultSelected?: string
  onChecked?: (param?: string) => void
} & HTMLAttributes<HTMLDivElement>

export type InputProps = {
  id?: string
  label?: string
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  icon?: string
  clearButton?: boolean
  iconRight?: boolean
  iconBorder?: boolean
  color?: string
  onError?: () => any
  validate?: "alpha" | "email" | "number"
  type?: "email" | "text" | "password" | "number" | "date"
  size?: "xs" | "sm" | "md" | "lg"
  successMessage?: string
  errorMessage?: string
  onInputChange?: (value: string) => any
} & HTMLAttributes<HTMLInputElement>

export type SelectComponent = {
  id?: string
  label?: string
  placeholder?: string
  defaultSelected?: string
  disabled?: boolean
  options?: string[]
  color?: string
  validate?: "alpha" | "email" | "number"
  size?: "sm" | "md" | "lg"
  onSelect?: (value: string) => any
} & HTMLAttributes<HTMLInputElement>

export type SupportedProps = (arr: any[], value: any) => boolean

// Theme types
export type RapUIThemeColorsProps = {
  primary: string
  success: string
  info: string
  warning: string
  danger: string
  transparent: string
  white: string
  dark: string
}
export type RapUIThemeModeProps = {
  background: string
  cardbackground: string
  textColor: string
}
export type RapUITheme = {
  colors: RapUIThemeColorsProps
  darkmode: RapUIThemeModeProps
  lightmode: RapUIThemeModeProps
}
export type RapUIThemeMode = "lightmode" | "darkmode"

export type ThemeMode = [
  RapUIThemeMode,
  Dispatch<SetStateAction<RapUIThemeMode>>
]

export type SideBarHook = [
  boolean,
  Dispatch<SetStateAction<any>>
]
// end theme types

// modal props
export type ModalProps = {
  active: boolean
  color?: string
  title?: string
  submitButton?: ReactElement
  onClose: () => any
} & HTMLAttributes<HTMLDivElement>
// end

// card props
export type CardProps = {
  size?: "md" | "sm" | "lg" | "xs"
  gap?: string
  align?: "left" | "right" | "center"
  lgCol?: string
  mdCol?: string
  smCol?: string
  xsCol?: string
  withBackground?: boolean
} & HTMLAttributes<HTMLDivElement>
// end

// modal props
export type ShimmerProps = {
  loading: boolean
  size?: "md" | "sm" | "lg"
  gap?: string
} & HTMLAttributes<HTMLDivElement>
// end

// display props

export type yPositionProps = "top" | "center" | "bottom"
export type xPositionProps = "left" | "center" | "right" | "stretch" | "space"

export type HTMLElement = {
  id?: string
  className?: string
} & HTMLAttributes<HTMLDivElement>

export type RowProps = {
  center?: boolean
  gap?: string
  align?: xPositionProps
  position?: yPositionProps
} & HTMLAttributes<HTMLDivElement>

export type FlexColumnProps = {
  align?: xPositionProps
  gap?: string
} & HTMLAttributes<HTMLDivElement> &
  ClassAttributes<HTMLDivElement>
// end

// datatable props

export type DatatableColumns = {
  name: string
  selector: string
}

export type DatatableRule = {
  selector: string
  onRender: (
    data: any,
    idx?: number
  ) => string | ComponentType<any> | Element | JSX.Element
}

export type DatatableComponent = {
  title?: string | HTMLAllCollection
  document: any[]
  striped?: boolean
  showControls?: boolean
  columns: DatatableColumns[]
  check?: boolean
  renderRule?: DatatableRule[]
  defaultSortIndex?: number
  onRowSelect?: (data: any) => void
  onCellSelect?: (data: any) => void
  uniqueIdentifier?: string
  actionList?: any[]
  menu?: ReactElement | string
} & HTMLAttributes<HTMLDivElement>

// end

// Data List
type ActionItem = {
  text: string
  onClick: (value: any) => void
}
type menuActionItem = {
  color?: string
  text: string
  onClick: (value: any) => void
}

export type DataListComponent = {
  document: any[]
  columns: DatatableColumns[]
  renderRule?: DatatableRule[]
  defaultSortIndex?: number
  menuActionList?: menuActionItem[]
  actionList?: ActionItem[]
  onRowSelect?: (data: any) => void
  uniqueIdentifier?: string
  menu?: ReactElement
} & HTMLAttributes<HTMLDivElement>

// end

// loeader props
export type LoaderComponent = {
  type?: "spinner" | "pulse"
  customIcon?: any
  width?: string
  height?: string
  iconSize?: number
  color?: string
  size?: string
  withBackground?: boolean
} & HTMLAttributes<HTMLDivElement>
// end

// loeader props

export type BreadcrumbItem = {
  name: ReactElement | string
  to: string
}
export type BreadcrumbComponent = {
  item: BreadcrumbItem[]
  color?: string
  seperator?: string
} & HTMLAttributes<HTMLDivElement>
// end

// tabs props

export type TabList = {
  title: ReactElement | string
  content: ReactElement | string
  color?: string
}

export type TabsComponent = {
  align?: "center" | "right" | "fixed"
  position?: "top" | "left" | "right"
  list: TabList[]
  color?: string
  onTabClick?: () => void
} & HTMLAttributes<HTMLDivElement>
//

// Tooltips

export type TooltipComponent = {
  textColor?: string
  background?: string
  position?: "left" | "right" | "bottom" | "top"
  delay?: string
  text: string
} & HTMLAttributes<HTMLDivElement>
// end

// Tooltips

type CollapseItem = {
  label: ReactElement | string
  content: ReactElement | string | any
  disabled?: boolean
  active?: boolean
}

export type CollapseComponent = {
  accordion?: boolean
  listener?: "hover" | "click"
  icon?: any
  items: CollapseItem[]
} & HTMLAttributes<HTMLDivElement>
// end

// Dropdown

type DropdownItem = {
  disabled?: boolean
  value: ReactElement | string
}
type DropdownList =
  | {
      type?: "group"
      name?: string
      disabled?: boolean
      items: DropdownItem[]
    }
  | ReactElement
  | string

export type DropdownComponent = {
  list?: DropdownList[]
  listener?: "hover" | "click"
  showIcon?: boolean
} & HTMLAttributes<HTMLDivElement>
// end

// Chip
export type ChipComponent = {
  closable?: boolean
  closeIcon?: string
  color?: string
  transparent?: boolean
  items?: string[]
  itemsPlaceholder?: string
  autoSuggestion?: any[]
  onItemUpdate?: (value: string[]) => void
  onInputChange?: (value: string) => void
} & HTMLAttributes<HTMLDivElement>
// end

// Chip
export type ProgressComponent = {
  height?: string
  width?: string
  color?: string
  percent: number | string
} & HTMLAttributes<HTMLDivElement>
// end

// Chip
export type PaginationIndexes = {
  startIndex: number
  endIndex: number
}
export type PagnitionComponent = {
  perPage?: number
  documentLength: number
  onPageGoto: (startIndex: number, endIndex: number) => void
  color?: string
  prevIcon?: string
  nextIcon?: string
  max?: number
} & HTMLAttributes<HTMLDivElement>
// end

// Navbar
export type NavbarPosition = "static" | "sticky" | "hidden" | "floating"

export type NavbarComponent = {
  links: (ReactElement | string)[]
  pinToMobile?: number[]
  position?: NavbarPosition
} & HTMLAttributes<HTMLDivElement>
// end

// Layout
export type LayoutComponent = {
  navbar?: ReactElement | Element
  notification: NotifyProps[]
  sideBar?: ReactElement
} & HTMLAttributes<HTMLDivElement>
// end

export type AuthProvider = {
  login?: (params: any) => Promise<any>
  logout?: (params: any) => Promise<any>
}

export type NotificationQueue = (params: NotifyProps) => any

export type NotificationContextProvider = [NotifyProps[], Function]

export type CrudRequest = "create" | "delete" | "update" | "read"

export type Identifier = string | number
export interface Record {
  id?: Identifier
  [key: string]: any
}

export interface GetResult {
  data: Record
}
export type ResourceState = {
  [key: string]: GetResult
}

// Redux store state props
export type StoreState = {
  notificationReducer: { notification: NotifyProps[] }
  resourceReducer: { resource: ResourceState }
}
// end

// QueryStore props
export type QueryStoreProps = () => {
  getAll: (
    resource: string
  ) => {
    [key: string]: any
  }
  getOne: (
    resource: string,
    params: Record
  ) => {
    [key: string]: any
  }
}
// end
