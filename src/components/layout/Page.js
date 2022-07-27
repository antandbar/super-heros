import React from 'react';
import Title from '../common/Title';
import './Page.css';


function Page({ title, children }) {
  return (
    <div className='page-grid'>
      <Title title={title}></Title>
      <section>{children}</section>
    </div>
  );
}

export default Page;
