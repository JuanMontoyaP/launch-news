import React, { useContext } from 'react';
import HomeContext from '../../context/homeContext';

export default function NextPage() {
  const data = useContext(HomeContext);
  // console.log(data);

  return (
    <div>
      <button type="button" onClick={() => console.log(data)}>Next page</button>
    </div>
  );
}
