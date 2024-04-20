import Tab from './Tab';
import TabPanel from './TabPanel';

/**
 *
 * Tabs Component
 * @param {number} selected (optional)- The tab to be selected
 * @param {string} testId (optional)- The testId for the Tabs component
 * @param {IData[]} data - Data for tabs
 * @param {Size} iconSize (optional)- Size for arrow icon
 * @param {Orientation} orientation (optional)- Tabs Orientation horizontal or vertical
 * @returns JSX Element
 */
const Tabs = ({
  data,
  selected,
  testId,
  iconSize,
  orientation,
  disableArrow,
}: ITabs) => {
  return (
    <Tab
      selected={selected}
      testId={testId}
      iconSize={iconSize}
      orientation={orientation}
      disableArrow={disableArrow}
    >
      {data.map((tab: any, index: number) => (
        <TabPanel
          key={index + tab.tabTitle}
          tabTitle={tab.tabTitle}
          disable={tab.disable}
          onClick={tab.onClick}
          disableSelection={tab.disableSelection}
        >
          {tab.children}
        </TabPanel>
      ))}
    </Tab>
  );
};

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
type Orientation = 'vertical' | 'horizontal';

/**
 * Interface for Tabs Component
 */
interface ITabs {
  selected?: number;
  testId?: string;
  data: {
    tabTitle:
      | React.ReactNode
      | string
      | (({ isSelected }: { isSelected: boolean }) => React.ReactNode);
    children?: React.ReactNode | string;
    disable?: boolean;
    onClick?: () => void;
  }[];
  iconSize?: Size;
  orientation?: Orientation;
  disableArrow?: boolean;
}

Tabs.defaultProps = {
  disable: false,
  testId: 'tabs',
  orientation: 'horizontal',
  disableArrow: false,
};

export default Tabs;
