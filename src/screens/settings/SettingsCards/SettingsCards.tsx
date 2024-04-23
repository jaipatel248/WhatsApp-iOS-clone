import React from "react";
import ProfileCard from "./ProfileCard";
import BroadCastCard from "./BroadCastCard";
import AccountSettingsCard from "./AccountSettingsCard";
import HelpAndAboutUsSettingsCard from "./HelpAndAboutUsSettingsCard";

const SettingsCards: React.FC = () => {
  return (
    <div>
      <ProfileCard name="Jay" avatarUrl="hello" />
      <BroadCastCard />
      <AccountSettingsCard />
      <HelpAndAboutUsSettingsCard />
    </div>
  );
};

export default SettingsCards;
