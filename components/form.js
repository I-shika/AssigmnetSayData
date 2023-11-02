import {React,useState,} from "react"
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Select from 'react-select';
const Forms = () =>{
    const options = [
        { value: 'Hindi', label: 'Hindi' },
        { value: 'Malayalam', label: 'Malayalam' },
        { value: 'English', label: 'English' }
      ]
const[language,setLanguage]=useState('');
const[file,setFile]=useState<File | undefined>('');
const[link,setLink]=useState('');
const handlelanguageChange = (e) => {
    const file = e.target.files[0];
    setLanguage(file);
  };
return(<>
<div className="formFirstBox">
<div className="formHdng">
    Transcribe File
    </div>
    <div className="formClose">
<ClearOutlinedIcon/>
    </div>
</div>
<div className="forminputs">
    <div className="languageWrapper">
    <div className="languageHdng">
 Transcript language
    </div>
    <div className="languageInput">
    <Select options={options} value={language}/>
    </div>
    </div>
    <div className="FilesWrapper">
    <input id="image" type="file" name="image" value={file} onChange={(e) => setFile(e.target.value)} />
    </div>
    <div className="linkWrapper">
       <div className="linkHdng">
        Import from Link
       </div>
       <div className="linkinput">
<input type="text" placeholder="Paste a Drobpox, Google Drive or Youtube URL here" value={link} onChange={(e) => setLink(e.target.value)}></input>
       </div>
    </div>


</div>
</>)
}

export default Forms