export const formatDataProviderSuccessMessage = (prop: any) => {
  switch (prop) {
    case "getOne":
      return "Successfully fetched data"
    default:
      "Successfull"
  }
}
export const formatDataProviderFailedMessage = (prop: any) => {
  switch (prop) {
    case "getOne":
      return "Could not fetched data"
    default:
      "Failed"
  }
}
