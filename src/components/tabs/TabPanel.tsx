/**
 * TabPanel Component
 * @param {React.ReactNode | string} tabTitle - Title for a tab
 * @param {React.ReactNode | string} children (optional)- Data for a specific tab
 * @param {boolean} disable (optional)- tab disable
 * @param onClick (optional) - method
 * @param {string} testId (optional)- The testId for the Tabs component
 * @returns JSX Element
 */
const TabPanel = ({ children }: ITabPanel) => {
  return <>{children}</>;
};

interface ITabPanel {
  tabTitle:
    | React.ReactNode
    | string
    | (({ isSelected }: { isSelected: boolean }) => React.ReactNode);
  children?: React.ReactNode | string;
  disable?: boolean;
  onClick?: () => void;
  disableSelection?: boolean;
}

export default TabPanel;
