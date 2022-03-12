import { useCallback, useState } from 'react';
import cn from 'classnames';

import styles from './styles.css';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';

export const SearchBar = (props) => {
  return (
    <section className={styles.searchbar}>
      <div className={styles.searchbar_buttongroup}>
        <Button
          text='New'
          variant='contained'
          width='70px'
          size='s'
          color='secondary'
          pressed={true}
        />
        <Button
          text='Used'
          variant='contained'
          width='70px'
          size='s'
          color='secondary'
        />
      </div>
      <div className={styles.searchbar_wrapper}>
        <Input placeholder='Search for keywords' />

        <Button
          text='Search'
          size='l'
          width='118px'
          variant='contained'
          color='primary'
        />
      </div>
    </section>
  );
};
