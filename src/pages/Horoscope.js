import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Horoscope = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Daily Horoscope
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Box>
          <Typography variant="h6" gutterBottom>
            Your Daily Reading
          </Typography>
          <Typography variant="body1" paragraph>
            Today's horoscope reading will be available once you select your zodiac sign.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Horoscope; 