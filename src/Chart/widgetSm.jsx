import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "./datas";
import "./widgetSm.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">مدرسان برتر پردیسان</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img src={user.img} className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
