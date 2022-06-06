import React, { useContext } from 'react';
import HomeContext from '../../context/homeContext';

export default function NextPage() {
  // eslint-disable-next-line no-unused-vars
  const { start, setStart } = useContext(HomeContext);

  return (
    <div>
      <button type="button" onClick={() => { setStart(start + 10); }}>Next page</button>
    </div>
  );
}
