import NewsSection from '../newsSection';
import { memo } from 'react';
import { dataArr } from './data';

/**
 * To render Body component
 * @returns {JSX Element}
 */
const Body = () => {
  return (
    <>
      {dataArr.map((news) => {
        return (
          <NewsSection
            title={news?.title}
            headingData={news?.headingData}
            data={news?.data}
          />
        );
      })}
    </>
  );
};

export default memo(Body);
