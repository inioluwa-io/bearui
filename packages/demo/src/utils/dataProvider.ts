import simpleRestProvider from "ra-data-simple-rest"
import appConfig from "../configs/appConfig"

const restProvider = simpleRestProvider(appConfig.restEndPoint)

export default restProvider
