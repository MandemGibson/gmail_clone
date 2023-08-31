import React from "react";
import "./Sidebar.css";
import { Button, IconButton } from "@mui/material";
import {
  AccessTime,
  Add,
  Duo,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import SidebarOptions from "./SidebarOptions";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<Add />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOptions Icon={Inbox} title="Inbox" number={53} selected={true} />
      <SidebarOptions Icon={Star} title="Starred" number={50} />
      <SidebarOptions Icon={AccessTime} title="Snoozed" number={50} />
      <SidebarOptions Icon={LabelImportant} title="Important" number={50} />
      <SidebarOptions Icon={NearMe} title="Sent" number={50} />
      <SidebarOptions Icon={Note} title="Drafts" number={50} />
      <SidebarOptions Icon={ExpandMore} title="More" />

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
