import { useMemo } from 'react';

export const useStyles = () => {
  return useMemo(() => {
    return {
      searchBarWrapper: {
        width: '50%',
      },
      inputWrapper: {
        height: '2.5rem',
        border: 'none',
        borderRadius: '10px',
        padding: ' 0 15px',
        boxShadow: '0px 0px 8px #ddd',
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
      },
      input: {
        backgroundColor: 'transparent',
        border: 'none',
        height: '100%',
        fontSize: '1.25rem',
        width: '100%',
        marginLeft: '5px',
        '&:focus-visible': {
          outline: 'none',
        },
      },
      resultsList: {
        backgroundColor: 'white',
        boxShadow: ' 0px 0px 8px #ddd',
        borderRadius: '0px 0px 10px 10px',
        maxHeight: '300px',
        marginTop: '-2px',
        padding: '10px',
      },
    } as const;
  }, []);
};
