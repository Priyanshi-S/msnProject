import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      tabItems: {
        width: '100%',
        boxShadow: '0px 4px 10px rgba(35, 0, 73, 0.3)',
        background: '#f5f5f5',
        padding: `20px`,
        borderRadius: '8px',
        marginRight: '40px',
      },
      wrapper: { paddingBottom: '50px' },
      tabs: { display: 'flex', justifyContent: 'center' },
      data: { display: 'flex', height: 80, justifyContent: 'space-between' },
    } as const;
  }, []);
};
