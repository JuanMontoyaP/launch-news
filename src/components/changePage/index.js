import React, { useContext } from 'react';
import HomeContext from '../../context/homeContext';

export default function ChangePage() {
  // eslint-disable-next-line no-unused-vars
  const { start, setStart } = useContext(HomeContext);

  let backButton;
  if (start > 0) {
    backButton = <button type="button" onClick={() => { setStart(start - 10); }}>Back page</button>;
  } else {
    backButton = <button type="button" disabled>Back page</button>;
  }

  return (
    <div>
      {backButton}
      <button type="button" onClick={() => { setStart(start + 10); }}>Next page</button>
    </div>
  );
}
