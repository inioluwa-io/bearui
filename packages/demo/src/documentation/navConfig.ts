import {
  mdiAccountOutline,
  mdiAlertDecagramOutline,
  mdiBriefcaseOutline,
  mdiCubeOutline,
  mdiKey,
} from "@mdi/js"
import { NavigationConfigProps } from "../configs"

const navigationConfig: NavigationConfigProps[] = [
  {
    key: "Introduction",
    path: "/documentation/introduction",
    title: "Introduction",
    icon: mdiBriefcaseOutline,
    breadcrumb: false,
    subMenu: [],
  },
  {
    key: "Structure",
    path: "/documentation/structure",
    title: "Structure",
    icon: mdiBriefcaseOutline,
    breadcrumb: false,
    subMenu: [],
  },
  {
    key: "Installation",
    path: "/documentation/installation",
    title: "Installation",
    icon: mdiBriefcaseOutline,
    breadcrumb: false,
    subMenu: [],
  },
  {
    key: "TemplateSetting",
    path: "/documentation/templatesetting",
    title: "Template Setting",
    icon: mdiBriefcaseOutline,
    breadcrumb: false,
    subMenu: [],
  },
  {
    key: "Routing",
    path: "/documentation/routing",
    title: "Routing",
    icon: mdiBriefcaseOutline,
    breadcrumb: false,
    subMenu: [],
  },
  {
    key: "Components",
    path: "/documentation/components",
    title: "Components",
    icon: mdiBriefcaseOutline,
    breadcrumb: false,
    subMenu: [],
  },
]

export default navigationConfig
