"use client";
import React, {
  useState,
  useEffect
} from "react";
require('dotenv').config();
import Image from 'next/image'
import saydat from '../public/saydat.jpeg'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TitleOutlinedIcon from '@mui/icons-material/TitleOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import dashboardData from "./dashboarddata";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import Select from 'react-select';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDropzone } from "react-dropzone";
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
// import Dropzone from "./dropzone";
import axios from "axios";
// import Forms from "./form";
// import { Upload } from "@mui/icons-material";
const apiKey = process.env.OPEN_API_URL_KEY;
const dropboxkey = process.env.DROPBOX_ACCESS_TOKEN

const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: "77015a7a21784a959045b038a7ed6bcb",
    "content-type": "application/json",
    "transfer-encoding": "chunked",
  },
})


const PopupExample = () => (

  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
export default function Dashboard() {
  const [status, setStatus] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [assemblyAiApiKey, setAssemblyAiApiKey] = useState(apiKey);

  const [searchInput, setSearchInput] = useState("");
  const [language, setLanguage] = useState('');
  const [transcription, setTranscription] = useState(null);
  const [transcript, setTranscript] = useState("")
  const [Audio, setAudio] = useState(null);
  const [Link, setLink] = useState('');
  const [open, setOpen] = useState(false);
  const[output,setOutput]=useState('');
  const closeModal = () => setOpen(false);
  const myDropzone = useDropzone();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadFileToDropbox(file);
    }
  };
  const uploadFileToDropbox = (file) => {
    const dbx = new dropbox.Dropbox({ accessToken: dropboxkey });

    dbx.filesUpload({
      path: '/' + file.name,
      contents: file,
    })
    .then((response) => {
      setFileLink(response.result.path_display);
      setStatus('File uploaded to Dropbox. Ready to transcribe.');
    })
    .catch((error) => {
      console.error('Error uploading file to Dropbox', error);
      setStatus('Error uploading file to Dropbox. Please try again.');
    });
};
const transcribeFile = async () => {
  try {
    const response = await axios.post(
      'https://api.assemblyai.com/v2/transcript',
      { audio_url: `https://www.dropbox.com${fileLink}?raw=1` },
      {
        headers: {
          Authorization: assemblyAiApiKey,
          'Content-Type': 'application/json',
        },
      }
    );

    const transcriptId = response.data.id;
    setStatus(`Transcription initiated successfully. Transcript ID: ${transcriptId}`);
  } catch (error) {
    console.error('Error initiating transcription', error);
    setStatus('Error initiating transcription. Please try again.');
  }
};
  // const [audioFile, setAudioFile] = useState(null);
  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   console.log(file);
  //   setAudioFile(file);

  // };
   

    const options = [
      { value: 'Hindi', label: 'Hindi' },
      { value: 'Malayalam', label: 'Malayalam' },
      { value: 'English', label: 'English' }
    ]

    var arr = myDropzone.files;
        console.log(arr)
    const { getRootProps, getInputProps, acceptedFiles } =
      useDropzone({
        onDrop: (files) => {
        }
      });
      async function trancribe(){
       
          assembly
          try {
            const response = await assembly.post("/transcript", {
              audio_url: Audio.path,
            });
      
            setTranscriptID(response.data.id);
          } catch (error) {
            console.error('Transcription error:', error);
          }
        }
      
	
    const files = acceptedFiles.map((file) => (
    
      <li key={file.path}>
          setAudio(File);
        {file.path} - {file.size} bytes
      </li>
    ));
    const handleChange = (e) => {
     
      setLanguage(e);
    };

    const handlelanguageChange = (e) => {
      const file = e.target.files[0];
      setLanguage(file);
    };
  //   const { getInputProps, open } = useDropzone({
  //   accept: 'audio/*',
  //   onDrop: (acceptedFiles) => {
  //     // Do something with the accepted file
  //     set(acceptedFiles[0]);
  //   },
  // });
    
  const showdata =()=> {
    console.log(language);
    console.log(Link);
    console.log("link");
    console.log("checking")
    console.log("Accepted Files:",acceptedFiles);
    trancribe();
    
  }
    // const [uploadURL, setUploadURL] = useState("");
    // const [transcriptID, setTranscriptID] = useState("")
    // const [transcriptData, setTranscriptData] = useState("")
    // const [transcript, setTranscript] = useState("")
  
    // useEffect(() => {
    //   if (audioFile) {
    //     assembly
    //       .post("/upload", audioFile)
    //       .then((res) => setUploadURL(res.data.upload_url))
    //       .catch((err) => console.error(err))
    //   }
    // }, [audioFile])
    // Submit the Upload URL to AssemblyAI and retrieve the Transcript ID
  // const submitTranscriptionHandler = () => {
  //   assembly
  //     .post("/transcript", {
  //       audio_url: uploadURL,
  //     })
  //     .then((res) => {
  //       setTranscriptID(res.data.id)
  //     })
  //     .catch((err) => console.error(err))
  // }

	// console.log(transcriptID)

    return (<>
      <div className="landngPage">
        <div className="searchBarWrapper">

          <div className="searchBarBox">
            <div>  <SearchIcon className="searchIcon" /> </div>
            <div>    <input type="search"
              placeholder="Search here..."
              className="searchBar"
              onChange={handleChange}
              value={searchInput} />
            </div>
          </div>
          <div className="rightbarBox">
            <div className="reminders">
              <NotificationsNoneOutlinedIcon className="reminderIcon" />
            </div>
            <div className="profileCard">
              <Image
                className="profilepic"
                src={saydat}
                width="40px"
                height="40px"
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
        <div className="landngPageSecondBox">
          <div className="firstRowLndngPage">
            <div>
              <div className="dashboardUsername">
                Welcome Shakirat
              </div>
              <div>
                Upload your audio and Video to covert to text
              </div>
            </div>
            <div>
              <button className="transcribeButton" onClick={() => setOpen(o => !o)} >Transcribe File</button>
              <Popup
                contentStyle={{ width: '60%', height: '80%', borderRadius: '2rem' }} 
                open={open} closeOnDocumentClick onClose={closeModal} className="popup">
                <div className="formWrapper">
                  <div className="formFirstBox">
                    <div className="formHdng">
                      Transcribe File
                    </div>
                    <div className="formClose"  onClick={closeModal} >
                      <ClearOutlinedIcon  />
                    </div>
                  </div>
                  <div className="forminputs">
                    <div className="languageWrapper">
                      <div className="languageHdng">
                        Transcription language
                      </div>
                      <div className="languageInput">
                        <Select options={options} value={language}  onChange={handleChange}/>
                      </div>
                    </div>
                    
                    <div className="FilesWrapper">
                    <div className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} onChange={handleFileChange} />
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
                    </div>
                    <div className="linkWrapper">
                      <div className="linkHdng">
                        Import from Link
                      </div>
                      <div className="linkInputBox">
                        <input type="text" className="linkInput" placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
                          value={Link} onChange={(e) => setLink(e.target.value)}/>
                      </div>
                    </div>
                    <div className="checkboxCond">
                      <div className="inputcheckbox">
                        <input type="checkbox"></input> Speaker identification
                      </div>
                    </div>
                  </div>
                  <div className="submitButton">
                    <button className="submitForm" onClick={transcribeFile} > Transcribe File </button>
                  </div>


                </div>

              </Popup>
            </div>

          </div>
          <div className="secondRowLndngPage">
            <div className="uploadedFileWrapper">
              <div className="uploadedFileIcon">
                <FolderOutlinedIcon />
              </div>
              <div className="uploadedFileCount">
                100
              </div>
              <div className="uploadedFileTxt">
                Uploaded Files
              </div>
            </div>
            <div className="transcribedFileWrapper">
              <div className="transcribedFileIcon">
                <TitleOutlinedIcon />
              </div>
              <div className="transcribedFileCount">
                50
              </div>
              <div className="transcribedFileTxt">
                Transcribed
              </div>
            </div>

            <div className="savedFileWrapper">
              <div className="savedFileIcon">
                <BookmarkBorderOutlinedIcon />
              </div>
              <div className="savedFileCount">
                20
              </div>
              <div className="savedFileTxt">
                Saved
              </div>
            </div>
          </div>
          <div className="thirdRow">
            <div className="dashboardHdng">
              Recent Files
            </div>
            <hr size='1px' color="#E4E7EC" />
            <div className="tableHdngRow">
            <div className="tableHdng">
              <input type="checkbox" className="checkBox"></input>
              </div>
              <div className="tableHdng">
                Name
              </div>
              <div className="tableHdng">
                Type
              </div>
              <div className="tableHdng">
                Duration
              </div>
              <div className="tableHdng">
                Date Created
              </div>
              <div className="tableHdng">
                Last Updated
              </div>
              <div className="tableHdng">
                Action
              </div>
            </div>

            {dashboardData.map(item => (<>
              <hr size='1px' color="#E4E7EC" />
              <div className="tableHdngRow">
                <div className="tabledata">
              <input type="checkbox" className="checkBox"></input>
              </div>
                <div className="tabledata">
                  {item.Name}
                </div>
                <div className="tabledata">
                  {item.Type}
                </div>
                <div className="tabledata">
                  {item.Duration}
                </div>
                <div className="tabledata">
                  {item.DateCreated}
                </div>
                <div className="tabledata">
                  {item.LastUpdated}
                </div>
                <div className="tabledata">

                </div>
              </div>

            </>))}


          </div>

        </div>


      </div>


    </>)
  }