import { Fragment } from 'react';
import { Box } from '@mui/material';
const Gallery = () => {
  return (
    <Fragment>
       <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
      />
    </Fragment>
  );
};

export default Gallery;
