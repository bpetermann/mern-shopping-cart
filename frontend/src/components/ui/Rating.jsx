import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function YourRating({ productRating }) {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component='legend'>Your rating:</Typography>
      <Rating
        name='simple-controlled'
        value={value}
        sx={{
          color: '#000',
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
          productRating(newValue);
        }}
      />
    </Box>
  );
}

function AverageRating({ average, ratings }) {
  const ratingsText = ratings === 1 ? 'User Rating: ' : 'User Ratings: ';

  return (
    <Box>
      <Typography component='legend'>
        {ratings} {ratingsText}
      </Typography>
      <Rating
        name='read-only'
        value={average}
        readOnly
        sx={{
          color: '#000',
        }}
      />
    </Box>
  );
}

export { YourRating, AverageRating };
