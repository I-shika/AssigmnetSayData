import React from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

function Dropzone({ open }) {
    const { getRootProps, getInputProps, acceptedFiles } =
      useDropzone({});
  
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p><CloudUploadOutlinedIcon/>
            Drag 'n' drop some files here<br></br></p>
          <button type="button" onClick={open} className="btn">
Click to select files
</button>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
    );
  }
  
  export default Dropzone;