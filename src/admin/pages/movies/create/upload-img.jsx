import { Upload, message } from "antd";
import React, { useEffect, useState } from "react";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const UploadImg = ({ form, img }) => {
  const [file, setFile] = useState(img)
  const onFileChange = ((fileList) => {
    setFile([fileList.file])
    form.setFieldValue(
      "img",
      "http://127.0.0.1:4000/uploads/" + fileList.file.name
    );
  })
  useEffect(() => {
    setFile(img)
  }, [img])

  const props = {
    listType: "picture",
    name: "img",
    defaultFileList: img,
    maxCount: 1,
    multiple: false,
    action: "http://127.0.0.1:4000/upload-img",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <>
      <Dragger {...props} fileList={file} onChange={onFileChange} >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from
          uploading company data or other banned files.
        </p>
      </Dragger>
    </>
  );
};

export default UploadImg;
