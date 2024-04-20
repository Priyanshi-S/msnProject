import { CiGlobe } from 'react-icons/ci';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { IoIosSettings } from 'react-icons/io';
import { FaIdCardAlt } from 'react-icons/fa';
import { useStyles } from './settingOptions.styles';

//setting data
const arr: any[] = [
  { icon: <HiOutlineBellAlert size="25px" />, id: 'alert' },
  { icon: <IoIosSettings size="25px" />, id: 'settings' },
  { icon: <FaIdCardAlt size="25px" />, id: 'about' },
  { icon: <CiGlobe size="25px" />, id: 'language' },
];

/**
 * Coponent to render Settings options
 * @returns {JSX.Element}
 */
export const SettingOptions = () => {
  const style = useStyles();
  const onIconClick = (item: string) => {
    return <div style={style.item}>{item}</div>;
  };

  const SettingsToRender = () => {
    return arr?.map((item, idx) => {
      return (
        <div
          key={idx}
          style={style.setting}
          onClick={() => onIconClick(item?.id)}
        >
          {item?.icon}
        </div>
      );
    });
  };

  return (
    <div style={style.leftHeader}>
      <SettingsToRender />
    </div>
  );
};
