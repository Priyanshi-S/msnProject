import { memo } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { useStyles } from './newsSection.styles';

/**
 * To News section component
 * @param {string} title
 * @param {string[]} headingData
 * @param {any} data
 * @returns {JSX Element}
 */
const NewsSection = ({ title, headingData, data }: INewsSection) => {
  const style = useStyles();

  return (
    <div style={style.wrapper}>
      <div style={style.titleWrapper}>
        <div style={style.title}>
          {title}
          <MdOutlineKeyboardArrowRight />
        </div>
        {headingData.map((heading) => {
          return <div style={style.heading}>{heading}</div>;
        })}
      </div>

      <div style={style.sectionWrapper}>
        <div style={style.section}>
          {
            <div>
              <img
                src={data[0]?.img}
                alt="Description of the image"
                style={style.image}
              />
              {data[0]?.title}
              {data[0]?.channel}
            </div>
          }
        </div>
        <div style={style.data}>
          {data.map((item: any, idx: number) => {
            return (
              <div style={style.items} key={idx}>
                {item?.title}
                {item?.channel}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface INewsSection {
  title: string;
  headingData: string[];
  data: any;
}

export default memo(NewsSection);
