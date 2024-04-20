import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      leftHeader: {
        width: '20%',
        height: '2.5rem',
        display: 'flex',
      },
      headingText: {
        paddingLeft: '10px',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
      },
    } as const;
  }, []);
};
