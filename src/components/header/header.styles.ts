import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      header: {
        display: 'flex',
        background: 'rgb(244, 244, 242)',
        boxSizing: 'border-box',
        alignItems: 'center',
        position: 'relative',
        justifyContent: 'center',
        padding: '0px',
        width: '100%',
        height: '108px',
      },
    } as const;
  }, []);
};
