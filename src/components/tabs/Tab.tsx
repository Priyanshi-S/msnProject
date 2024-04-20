import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useStyles } from './tab.styles';
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

const SCROLL_WIDTH = 100;
const SCROLL_HEIGHT = 100;

const Horizontal = 'horizontal';

enum PositionScroll {
  left,
  right,
  scroll,
  top,
  down,
}

/**
 * Tab Component
 * @param {any} children - The tabTitle, children of tabs
 * @param {number} selected (optional)- The tab to be selected
 * @param {string} testId (optional)- The testId for the Tabs component
 * @param {ICustomStyles} customStyles (optional)- custom styles for tabs component
 * @param {Size} iconSize (optional)- Size for arrow icon
 * @param {Orientation} orientation (optional)- Tabs Orientation horizontal or vertical
 * @returns JSX Element
 */

const Tab = ({
  children,
  selected,
  testId,
  iconSize,
  orientation,
  disableArrow,
}: ITab) => {
  const styles = useStyles();

  const [overflowActive, setOverflowActive] = useState(false);
  const [state, setState] = useState({ selected });
  const [scrollPosition, setScrollPosition] = useState(PositionScroll.scroll);

  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (state.selected !== selected) {
      setState({ selected });
    }
  }, [selected]); // eslint-disable-line react-hooks/exhaustive-deps

  /**
   * Method to check content overflow
   */
  useEffect(() => {
    const isOverflowActive = (event: any) => {
      return orientation === Horizontal
        ? event.offsetWidth < event.scrollWidth
        : event.offsetHeight < event.scrollHeight;
    };

    if (isOverflowActive(ref.current)) {
      setOverflowActive(true);
      return;
    }
    setOverflowActive(false);
  }, [overflowActive, orientation]);

  /**
   * Method to check Scroll Position
   */
  const onScroll = () => {
    const maxScroll = ref.current!.scrollWidth - ref.current!.clientWidth;
    const position = ref.current!.scrollLeft;
    if (position === 0) {
      setScrollPosition(PositionScroll.left);
    } else if (position >= maxScroll) {
      setScrollPosition(PositionScroll.right);
    } else {
      setScrollPosition(PositionScroll.scroll);
    }
  };

  /**
   * Method to check Vertical Scroll Position
   */
  const onVerticalScroll = () => {
    const maxScroll = ref.current!.scrollHeight - ref.current!.clientHeight;
    const position = ref.current!.scrollTop;
    if (position === 0) {
      setScrollPosition(PositionScroll.top);
    } else if (position >= maxScroll - 1) {
      setScrollPosition(PositionScroll.down);
    } else {
      setScrollPosition(PositionScroll.scroll);
    }
  };

  useEffect(() => {
    orientation === Horizontal ? onScroll() : onVerticalScroll();
  }, [orientation]);

  /**
   * Method to handle onClick event
   */
  const handleChange = (index: number) => {
    setState({ selected: index });
  };

  /**
   * Method to handle left and right arrow clicks
   */
  const scroll = useCallback((scrollOffset: number) => {
    ref.current!.scrollLeft += scrollOffset;
  }, []);

  /**
   * Method to handle up and down arrow clicks
   */
  const verticalScroll = useCallback((scrollOffset: number) => {
    ref.current!.scrollTop += scrollOffset;
  }, []);

  /**
   * Method to get content of Tab
   */
  const getContent = useMemo(
    () => (
      <ul
      style={ styles.list}
        ref={ref}
        onScroll={orientation === Horizontal ? onScroll : onVerticalScroll}
      >
        {children.map((element: any, index: number) => {
          return (
            <li
              role="presentation"
              key={index + element.props.tabTitle}
              data-testid={`${testId}-listItem`}
              style={styles.listItem
              }
              onClick={() => {
                if (!element.props.disableSelection) {
                  handleChange(index); // Updating tab state
                }
                if (element.props.onClick) {
                  element.props.onClick(index);
                }
              }}
              onKeyDown={element.props.onClick || (() => handleChange(index))}
            >
              {typeof element.props.tabTitle === 'function'
                ? element.props.tabTitle({
                    isSelected: state.selected === index,
                  })
                : element.props.tabTitle}
            </li>
          );
        })}
      </ul>
    ),
    [
      orientation,
      children,
      styles.list,
      state.selected,
      styles.listItem,
      styles.disabled,
      styles.verticalList,
      styles.verticalListItem,
      testId,
    ]
  );

  const getBackArrow = useMemo(
    () =>
      orientation === Horizontal ? (
        <button
          onClick={() => scroll(-(ref.current!.clientWidth - SCROLL_WIDTH))}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
      ) : (
        <button
          // variant="link"
          onClick={() =>
            verticalScroll(-(ref.current!.clientHeight - SCROLL_HEIGHT))
          }
        >
          <MdOutlineKeyboardArrowUp />
        </button>
      ),
    [
      orientation,
      scroll,
      verticalScroll,
      scrollPosition,
      styles.arrow,
      styles.disableArrow,
      iconSize,
      testId,
    ]
  );

  const getForwardArow = useMemo(
    () =>
      orientation === Horizontal ? (
        <button onClick={() => scroll(ref.current!.clientWidth - SCROLL_WIDTH)}>
          <MdOutlineKeyboardArrowRight />
        </button>
      ) : (
        <button
          onClick={() =>
            verticalScroll(ref.current!.clientHeight - SCROLL_HEIGHT)
          }
        >
          <MdOutlineKeyboardArrowDown />
        </button>
      ),
    [
      orientation,
      scroll,
      verticalScroll,
      scrollPosition,
      styles.arrow,
      styles.disableArrow,
      iconSize,
      testId,
    ]
  );

  return (
    <div style={styles.tab}>
      <div
        style={styles.tabContainer}
      >
        {disableArrow ? null : overflowActive ? getBackArrow : null}
        {getContent}
        {disableArrow ? null : overflowActive ? getForwardArow : null}
      </div>
      <div style={styles.children} data-testid={`${testId}-children`}>
        {children[state.selected!]}
      </div>
    </div>
  );
};

type Size = 'xs' | 's' | 'm' | 'l' | 'xl';
type Orientation = 'vertical' | 'horizontal';

/**
 * Interface for Tabs Component
 */
interface ITab {
  children: any;
  selected?: number;
  testId?: string;
  iconSize?: Size;
  orientation?: Orientation;
  disableArrow?: boolean;
  disableSelection?: boolean;
}

/**
 * Default Props for Tabs Component
 */
Tab.defaultProps = {
  selected: 0,
  iconSize: 'l',
  orientation: 'horizontal',
  disableArrow: false,
  disableSelection: false,
};

export default Tab;
