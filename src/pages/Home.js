import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from '@mui/material';
import {
  Chat as ChatIcon,
  Call as CallIcon,
  Stars as StarsIcon,
  Event as EventIcon,
} from '@mui/icons-material';

const features = [
  {
    title: 'Live Chat Consultations',
    description:
      'Connect instantly with experienced astrologers through our real-time chat platform.',
    icon: <ChatIcon fontSize="large" />,
    path: '/chat',
  },
  {
    title: 'Voice Call Sessions',
    description:
      'Get personalized guidance through voice calls with our expert astrologers.',
    icon: <CallIcon fontSize="large" />,
    path: '/call',
  },
  {
    title: 'Daily Horoscopes',
    description:
      'Discover your daily, weekly, and monthly horoscope predictions.',
    icon: <StarsIcon fontSize="large" />,
    path: '/horoscope',
  },
  {
    title: 'Panchang',
    description:
      'Access detailed Panchang calculations for auspicious timing and dates.',
    icon: <EventIcon fontSize="large" />,
    path: '/panchang',
  },
];

const Home = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{ fontWeight: 'bold' }}
              >
                Discover Your Path
              </Typography>
              <Typography variant="h5" paragraph>
                Connect with expert astrologers for personalized guidance and
                insights into your life's journey.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/astrologers')}
                sx={{
                  mt: 2,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                }}
              >
                Consult Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/assets/hero-image.png"
                alt="Astrology"
                sx={{
                  width: '100%',
                  maxWidth: 500,
                  height: 'auto',
                  display: 'block',
                  margin: '0 auto',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ mb: 6 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      color: theme.palette.primary.main,
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    sx={{ mb: 2 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ mb: 2 }}
                  >
                    {feature.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(feature.path)}
                    sx={{ mt: 'auto' }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          bgcolor: 'background.default',
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              textAlign: 'center',
              p: 4,
              background: `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.secondary.light} 90%)`,
              color: 'white',
            }}
          >
            <CardContent>
              <Typography variant="h4" component="h3" gutterBottom>
                Start Your Journey Today
              </Typography>
              <Typography variant="h6" paragraph>
                Get personalized astrological guidance from our expert astrologers.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                onClick={() => navigate('/register')}
                sx={{
                  mt: 2,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                }}
              >
                Sign Up Now
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Home; 