import { useState } from 'react';
import { PiButterflyFill } from 'react-icons/pi';

import { useStyles } from './headerLeftSection.styles';

/**
 * To render Header left section component
 * @returns {JSX Element}
 */
export const HeaderLeftSection = () => {
  const style = useStyles();
  const [title, setTitle] = useState('msn');
  return (
    <div style={style.leftHeader}>
      <PiButterflyFill size="25px" />
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={() => setTitle('Refresh Page')}
        onMouseDownCapture={() => window.location.reload()}
        onMouseLeave={() => setTitle('msn')}
        style={style.headingText}
      >
        {title}
      </div>
    </div>
  );
};
