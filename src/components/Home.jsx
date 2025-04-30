import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function FixedContainer() {
  return (
    <React.Fragment>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '50vh' }} />
      </Container>
    </React.Fragment>
  );
}
