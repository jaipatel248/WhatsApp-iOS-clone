import {SearchBar, TopBar} from '@whatsapp/whatsapp-ui';

type Props = unknown;

const SettingsTopBar = (props: Props) => {
  return (
    <>
      <TopBar title='Settings' />
      <SearchBar />
    </>
  );
};

export default SettingsTopBar;
