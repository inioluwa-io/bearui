import React, { useEffect, useCallback, useState } from "react"
import {
  Card,
  Container,
  Tabs,
  FlexColumn,
  DataList,
  FlexRow,
} from "@bearui/ui"
import MediaWidgetProps from "./components/mediaWidget"
import {
  mdiAppleIcloud,
  mdiDatabase,
  mdiDropbox,
  mdiGoogleDrive,
} from "@mdi/js"
import { document } from "./mock"
import RenderIcon, { supportedIconType } from "./components/renderIcon"

const getFileExtension = (file: string) => {
  const fileSplit = file.split(".")
  if (fileSplit.length > 1) {
    return fileSplit[fileSplit.length - 1]
  }
  return ""
}
const getFileName = (file: string) => {
  const fileSplit = file.split(".")
  if (fileSplit.length > 1) {
    return fileSplit.slice(0, fileSplit.length - 1).join("")
  }
  return file
}

const getFileFormat = (fileName: string): supportedIconType => {
  const extension = getFileExtension(fileName)

  type SupportedFormat = {
    images: string[]
    videos: string[]
    music: string[]
  }
  const supportedFormat: SupportedFormat = {
    images: ["jpg", "jpeg", "png"],
    videos: ["mp4", "mkv"],
    music: ["mp3"],
  }
  if (extension === "") {
    return "document"
  } else if (supportedFormat.videos.includes(extension)) {
    return "video"
  } else if (supportedFormat.images.includes(extension)) {
    return "image"
  } else if (supportedFormat.music.includes(extension)) {
    return "music"
  }
  throw new Error("Invalid extension")
}

const Files: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const [filteredDocument, setFilteredDocument] = useState<any>(document)

  const filterDocument = useCallback((): any => {
    let tmp = []
    let format: supportedIconType | "" = ""
    switch (tabIndex) {
      case 0: {
        format = ""
        break
      }
      case 1: {
        format = "video"
        break
      }
      case 2: {
        format = "image"
        break
      }
      case 3: {
        format = "music"
        break
      }
      case 4: {
        format = "document"
        break
      }
    }
    if (format === "") {
      tmp = document
    } else {
      for (let i = 0; i < document.length; i++) {
        if (getFileFormat(document[i].name) === format) {
          tmp.push(document[i])
        }
      }
    }
    setFilteredDocument(tmp)
  }, [tabIndex])

  useEffect(() => {
    filterDocument()
  }, [filterDocument])
  return (
    <Container>
      <Card xsCol="12" withBackground={false}>
        <h3>File Manager</h3>
      </Card>
      <MediaWidgetProps
        totalSpace={500}
        unit="GB"
        usedSpace={312}
        icon={mdiDatabase}
        title="Local Storage"
        color="#932ed2"
      ></MediaWidgetProps>
      <MediaWidgetProps
        totalSpace={100}
        unit="GB"
        usedSpace={80}
        icon={mdiDropbox}
        title="Dropbox"
        color="primary"
      ></MediaWidgetProps>
      <MediaWidgetProps
        totalSpace={100}
        unit="GB"
        usedSpace={23}
        icon={mdiGoogleDrive}
        title="Google Drive"
        color="#ffd04b"
      ></MediaWidgetProps>
      <MediaWidgetProps
        totalSpace={100}
        unit="GB"
        usedSpace={37}
        icon={mdiAppleIcloud}
        title="iCloud"
        color="#00a2ed"
      ></MediaWidgetProps>
      <Card xsCol="12" withBackground={false} />
      <Card xsCol="12" withBackground={false}>
        <h5>My Files</h5>
        <FlexColumn gap="0px">
          <Tabs
            onTabClick={(key?: number) => {
              if (typeof key === "number") {
                setTabIndex(key)
              }
            }}
            align="left"
            list={[
              { title: "All", content: "" },
              { title: "Video", content: "" },
              { title: "Images", content: "" },
              { title: "Music", content: "" },
              { title: "Documents", content: "" },
            ]}
          ></Tabs>

          <DataList
            actionList={[
              {
                text: "Delete",
                onClick: (value: any) => {
                  //   const tmp = invoiceList.filter(invoice => invoice !== value)
                  //   setInvoiceList(tmp)
                },
              },
            ]}
            defaultSortIndex={0}
            uniqueIdentifier="_id"
            renderRule={[
              {
                selector: "name",
                onRender: (data: any, idx?: number) => {
                  return (
                    <FlexRow gap="10px">
                      <RenderIcon type={getFileFormat(data.name)} />{" "}
                      <p style={{ fontWeight: 500 }}>
                        {getFileName(data.name)}
                      </p>
                    </FlexRow>
                  )
                },
              },
            ]}
            columns={[
              { name: "Name", selector: "name" },
              { name: "File Item", selector: "fileItem" },
              { name: "Last Modified", selector: "last_modified" },
              { name: "Size", selector: "size" },
            ]}
            document={filteredDocument}
          />
        </FlexColumn>
      </Card>
    </Container>
  )
}
export default Files
