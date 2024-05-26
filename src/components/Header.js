import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

import "./Header.css";
import { useDataLayerValue } from "../DataLayer";

export default function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  // console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, Song or Podcasts" type="text" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="RQ" />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
