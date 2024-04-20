import HeaderLeftSection from '../headerLeftSection';
import SearchBar from '../searchBar';
import SettingOptions from '../settingOptions';
import { memo } from 'react';
import { useStyles } from './header.styles';

/**
 * To render Header component
 * @returns {JSX Element}
 */
const Header = () => {
  const style = useStyles();
  return (
    <>
      <div style={style.header}>
        <HeaderLeftSection />
        <SearchBar />
        <SettingOptions />
      </div>
    </>
  );
};

export default memo(Header);
