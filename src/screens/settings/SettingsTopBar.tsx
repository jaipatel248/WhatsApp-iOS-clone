import React from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import TopBar from "../../components/topBar/TopBar";

type Props = {};

const SettingsTopBar = (props: Props) => {
  return (
    <>
      <TopBar title="Settings" />
      <SearchBar />
    </>
  );
};

export default SettingsTopBar;
