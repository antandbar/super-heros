import { Fragment } from 'react';
import Button from '@mui/material/Button';
import Gallery from '../common/Gallery';
const HerosPage = () => {
  return (
    <Fragment>
      <Gallery/>
      <p>This is test</p>
      <Button variant="contained">Hello World</Button>
    </Fragment>
  );
};

export default HerosPage;
