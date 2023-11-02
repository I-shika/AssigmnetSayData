import {React, useState} from "react";
import { useDropzone } from "react-dropzone";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

function Dropzone({ open }) {
  const[link,setLink]=useState(null);
    const { getRootProps, getInputProps, acceptedFiles } =
      useDropzone({
        
      });
  console.log(link);
    const files = acceptedFiles.map((file) => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} value={link} onChange={(e) => setLink(e.target.files[0])} />
          <p><CloudUploadOutlinedIcon/>
            Drag 'n' drop some files here<br></br></p>
          {/* <button type="button" onClick={open} className="btn" >
Click to select files
</button> */}
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
    );
  }
  
  export default Dropzone;