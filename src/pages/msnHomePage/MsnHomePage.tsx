import Body from './../../components/body';
import Header from './../../components/header';
import TrendingSectionComp from './../../components/trendingSection';
import { useStyles } from './msnPage.styles';

/**
 * Application home page
 * @returns {JSX.Element}
 */
const MsnHomePage = (): JSX.Element => {
  const style = useStyles();
  return (
    <div style={style.wrapper}>
      <div style={style.sectionWrapper}>
        <div style={style.header}>
          <Header />
        </div>
        <div style={style.body}>
          <TrendingSectionComp />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default MsnHomePage;
