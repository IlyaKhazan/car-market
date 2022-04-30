import { useCallback, useState } from 'react';
import cn from 'classnames';

import styles from './styles.css';

type Props = {
  text: string;
};

export const CarBodyButton = ({ text }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div
      className={cn(styles.carbodybutton, {
        [styles['carbodybutton--hover']]: isHovered,
      })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className={styles.carbodybutton_image} src="" alt="" />
      <p>{text}</p>
    </div>
  );
};
