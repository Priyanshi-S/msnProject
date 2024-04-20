import HocComponent from '../hocComponent';
import Tabs from '../tabs';
import { memo, useEffect, useState } from 'react';
import { tabsData } from './tabsData';
import { useStyles } from './trendingSection.styles';

const apiLink = 'https://jsonplaceholder.org/posts';

/**
 * To render Trending news section component
 * @param {any} data
 * @returns {JSX Element}
 */
const TrendingSection = ({ data }: any) => {
  const style = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabs, setTabs] = useState<any>([]);

  useEffect(() => {
    tabsData?.map((item: any) => {
      setTabs((prevState: any) => [
        ...prevState,
        {
          tabTitle: item?.name,
          onClick: (index?: number) => {
            setSelectedTab(index!);
          },
          children: <div style={style.tabItems}>{item?.description}</div>,
        },
      ]);
    });
  }, [tabsData]);

  return (
    <div style={style.wrapper}>
      <div style={style.tabs}>
        <Tabs data={tabs} testId="customercare-tabs" selected={selectedTab} />
      </div>
      <div>
        <div style={style.data}>
          {data?.map((item: any) => {
            return <img src={item?.image} alt="Description of the image" />;
          })}
        </div>
      </div>
    </div>
  );
};

//Implementation of Higher Order Component
const TrendingSectionComp = HocComponent(
  'Trending Section',
  TrendingSection,
  apiLink
);

export default memo(TrendingSectionComp);
