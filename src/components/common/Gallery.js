import { Fragment } from 'react';
import { Box } from '@mui/material';

const Gallery = ({urlComic}) => {
  return (
    <Fragment>
      <Box
        component="img"
        alt="The house from the offer."
        src={urlComic}
      />
    </Fragment>
  );
};

export default Gallery;
