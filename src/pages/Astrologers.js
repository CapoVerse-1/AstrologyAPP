import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const Astrologers = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom>
        Our Expert Astrologers
      </Typography>
      <Grid container spacing={3}>
        {/* Placeholder for astrologer cards */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/200"
              alt="Astrologer"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Expert Astrologer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Specialized in Vedic astrology and horoscope readings
              </Typography>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Book Consultation
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Astrologers; 