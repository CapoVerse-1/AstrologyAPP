import React from 'react';
import { Container, Typography, Paper, Box, Grid, Avatar, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              sx={{ width: 120, height: 120, mb: 2 }}
              src={user?.avatar || 'https://via.placeholder.com/120'}
            />
            <Typography variant="h5" gutterBottom>
              {user?.name || 'User Name'}
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              {user?.email || 'user@example.com'}
            </Typography>
            <Button variant="outlined" color="primary" sx={{ mt: 2 }}>
              Edit Profile
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1" paragraph>
                <strong>Name:</strong> {user?.name || 'Not set'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> {user?.email || 'Not set'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Phone:</strong> {user?.phone || 'Not set'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Date of Birth:</strong> {user?.dateOfBirth || 'Not set'}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Gender:</strong> {user?.gender || 'Not set'}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile; 