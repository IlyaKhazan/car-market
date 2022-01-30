import * as React from 'react';
import {Routes, Route} from 'react-router-dom';

import {MainPage} from '../pages/MainPage';
import {CatalogPage} from '../pages/CatalogPage/CatalogPage';

export const App = ({title}) => {
  React.useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  );
};
