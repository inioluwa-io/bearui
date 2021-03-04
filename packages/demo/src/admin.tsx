import * as React from "react"
import { FunctionComponent } from "react"
import { CoreAdminContext, AdminProps } from "ra-core"

const CoreAdmin: FunctionComponent<AdminProps> = ({
  authProvider,
  children,
  customReducers,
  customSagas,
  dataProvider,
  history,
  i18nProvider,
  initialState,
}) => {
  return (
    <CoreAdminContext
      authProvider={authProvider}
      dataProvider={dataProvider}
      i18nProvider={i18nProvider}
      history={history}
      customReducers={customReducers}
      customSagas={customSagas}
      initialState={initialState}
    >
      {children}
    </CoreAdminContext>
  )
}

export default CoreAdmin
