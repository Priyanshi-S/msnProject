import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      leftHeader: {
        width: '20%',
        height: '2.5rem',
        display: 'flex',
        justifyContent: 'flex-end',
      },
      setting: { paddingLeft: '10px', alignItems: 'center' },
      item: { display: 'inherit', background: 'red', height: 10, width: 10 },
    } as const;
  }, []);
};
