"use client";
import React, {
  useState,
} from "react";
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
import Dropzone from "./dropzone";
import Forms from "./form";
import { Upload } from "@mui/icons-material";
const PopupExample = () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
);
export default function Dashboard() {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const options = [
    { value: 'Hindi', label: 'Hindi' },
    { value: 'Malayalam', label: 'Malayalam' },
    { value: 'English', label: 'English' }
  ]
  const [language, setLanguage] = useState('');
  const [file, setFile] = useState('');
  const [link, setLink] = useState('');
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const handlelanguageChange = (e) => {
    const file = e.target.files[0];
    setLanguage(file);
  };
 const onDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
  }

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
              contentStyle={{ width: '60%', height: '80%', borderRadius: '2rem' }} open={open} closeOnDocumentClick onClose={closeModal} className="popup">
              <div className="formWrapper">
                <div className="formFirstBox">
                  <div className="formHdng">
                    Transcribe File
                  </div>
                  <div className="formClose">
                    <ClearOutlinedIcon />
                  </div>
                </div>
                <div className="forminputs">
                  <div className="languageWrapper">
                    <div className="languageHdng">
                      Transcription language
                    </div>
                    <div className="languageInput">
                      <Select options={options} value={language} />
                    </div>
                  </div>
                  <div className="FilesWrapper">
                  <Dropzone/>
                  </div>
                  <div className="linkWrapper">
                    <div className="linkHdng">
                      Import from Link
                    </div>
                    <div className="linkInputBox">   
                      <input type="text" className="linkInput" placeholder="Paste a Drobpox, Google Drive or Youtube URL here"
                       value={link} onChange={(e) => setLink(e.target.value)}></input>
                    </div>
                  </div>
<div className="checkboxCond">
  <div className="inputcheckbox">
<input type="checkbox"></input> Speaker identification
</div>
</div>
                </div>
                <div className="submitButton">
                  <button className="submitForm"> Transcribe File </button>
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