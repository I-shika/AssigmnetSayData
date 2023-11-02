
import React from "react";
import Link from 'next/link';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
export default function Sidebarcontainer(){
    return(<>
    <div className="landingPage">
    <div className="sidebar">
        <div className="sidebarHdng">
      abc firm
        </div>
       
        <div className="sidebarWrapper">
        <div className="sidebarRow">
            <div className="sidebarIcons"> <HomeOutlinedIcon/> </div>
             <div className="sidebarOptions">Home</div>
        </div>
       
        <div className="sidebarRow">
        <div>  <FolderOutlinedIcon/></div>
        <div className="sidebarOptions">All Files</div>
        </div>
        <div className="sidebarRow">
        <div> <BookmarkOutlinedIcon/></div>
        <div className="sidebarOptions">Saved</div>
        </div>
        <div className="sidebarRow">
            <div> <ShareOutlinedIcon/></div>
            <div className="sidebarOptions">Share</div>
        </div>
        <div className="sidebarRow">
            <div> <DeleteOutlineOutlinedIcon/></div>
            <div className="sidebarOptions">Trash</div>
        </div>
        <div className="sidebarRow">
           <div>  <SettingsOutlinedIcon/></div>
           <div className="sidebarOptions">Trash</div>
        </div>
        <div className="sidebarRow">
          <div>   <HelpOutlineOutlinedIcon/></div>
          <div className="sidebarOptions">Help and Support</div>
        </div>
        </div>
    </div>
    
    </div>
    </>)
}