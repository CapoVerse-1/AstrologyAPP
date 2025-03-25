import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Panchang = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Panchang
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Today's Panchang
          </Typography>
          <Typography variant="body1" paragraph>
            Detailed Panchang information will be available here.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Panchang; 