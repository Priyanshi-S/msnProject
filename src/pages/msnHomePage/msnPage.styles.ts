import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      wrapper: { background: 'rgb(213, 212, 208)' },
      sectionWrapper: {
        margin: '0px 60px',
        padding: `20px 16px 0`,
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 4px 10px rgba(35, 0, 73, 0.3)',
        background: 'rgb(244, 244, 242)',
        zIndex: 50,
      },
      header: {
        display: 'flex',
        width: '93%',
        position: 'fixed',
        top: '0px',
        alignItems: 'center',
        justifyContent: 'center',
        'z-index': '100px',
        transitionDuration: '0.5s',
        marginLeft: '-16px',
      },
      body: { marginTop: '108px' },
    } as const;
  }, []);
};
