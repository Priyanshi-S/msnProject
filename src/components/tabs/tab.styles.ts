import { useMemo } from 'react';

/**
 * Tabs component styles
 * @returns object
 */

export function useStyles() {
  return useMemo(
    () =>
      ({
        tabContainer: {
          display: 'flex',
          justifyContent: 'space-between',
        },
        list: {
          scrollBehavior: 'smooth',
          flex: 1,
          '&:: WebkitOverflowScrolling': 'touch',
          whiteSpace: 'nowrap',
          overflowX: 'scroll',
          '&:: -Webkit-Scrollbar': {
            display: 'none', // Safari and Chrome
          },
          '&::MsOverflowStyle': 'none' /* IE and Edge */,
        },
        tab: {
          width: 'auto',
          padding: '4px',
        },
        listItem: {
          display: 'inline-block',
          padding: '10px',
          cursor: 'pointer',
        },
        arrow: {
          cursor: 'pointer',
          background: 'transparent',
          fontSize: 20,
        },
        disableArrow: {
          opacity: 0.3,
          cursor: 'default',
          pointerEvents: 'none',
        },
        children: {
          padding: '32px',
        },
        disabled: {
          cursor: 'default',
          pointerEvents: 'none',
        },
        verticalTabContainer: {
          display: 'block',
          textAlign: 'center',
          width: '100%',
        },
        verticalList: {
          height: 300,
          scrollBehavior: 'smooth',
          flex: 1,
          '&:: WebkitOverflowScrolling': 'touch',
          whiteSpace: 'nowrap',
          overflowY: 'scroll',
          '&:: -Webkit-Scrollbar': {
            display: 'none', // Safari and Chrome
          },
          '&::MsOverflowStyle': 'none' /* IE and Edge */,
        },
        verticalTab: {
          display: 'flex',
          width: 'auto',
          padding: '4px',
        },
        verticalListItem: {
          textAlign: 'left',
          display: 'block',
          padding: '10px',
          cursor: 'pointer',
        },
      } as const),
    []
  );
}
