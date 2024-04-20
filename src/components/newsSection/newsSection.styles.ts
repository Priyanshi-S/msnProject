import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      wrapper: { borderTop: '2px solid gray', padding: '10px' },
      items: {
        display: 'flex',
        width: 'calc(32% - 2px)',
        marginBottom: '16px',
        padding: `20px 16px 0`,
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0px 4px 10px rgba(35, 0, 73, 0.3)',
        background: '#fcfcfc',
        zIndex: '-1',
      },
      titleWrapper: { display: 'flex', alignItems: 'center' },
      title: { fontWeight: 'bold', fontSize: 'large', paddingRight: '20px' },
      heading: { color: 'gray', fontSize: 'medium', paddingRight: '14px' },
      sectionWrapper: { display: 'flex', paddingTop: '20px' },
      section: {
        width: '30%',
        boxShadow: '0px 4px 10px rgba(35, 0, 73, 0.3)',
        background: '#f5f5f5',
        marginBottom: '16px',
        padding: `20px 16px 0`,
        borderRadius: '8px',
        marginRight: '40px',
      },
      image: { width: '430px', height: '200px' },
      data: {
        display: 'flex',
        flexWrap: 'wrap',
        flex: '50%',
        justifyContent: 'space-between',
      },
    } as const;
  }, []);
};
