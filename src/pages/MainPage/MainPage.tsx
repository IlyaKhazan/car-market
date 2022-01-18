import * as React from 'react';

export const MainPage = ({onInit}) => {
  React.useEffect(() => {
    onInit();
  }, []);
  return (
    <main>
      MainPage
    </main>
  );
};
