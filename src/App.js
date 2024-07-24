import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Grid, Card, CardContent, Button, Container, Drawer, List, ListItem, ListItemIcon, ListItemText, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SchoolIcon from '@mui/icons-material/School';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#ffffff',
  color: '#000000',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0'
});

const StyledContainer = styled(Container)({
  padding: '24px 16px',
  backgroundColor: '#f4f6f8',
  minHeight: '100vh'
});

const StyledCard = styled(Card)({
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
  border: '1px solid #e0e0e0',
});

const StyledCardOne = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
  border: '1px solid #e0e0e0',
  width: '500px',
  backgroundColor: 'skyblue',
  height: '163px',
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Make it full width on small screens
    marginLeft: '0', // Remove left margin on small screens
    height: '235px',
  },
}));

const StyledCardTwo = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
  border: '1px solid #e0e0e0',
  width: '270px',
  marginLeft: '140px',
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Make it full width on small screens
    marginLeft: '0', // Remove left margin on small screens
    marginTop: '16px', // Add top margin for spacing on small screens
  },
}));

const StyledCardThree = styled(Card)(({ theme }) => ({
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
  border: '1px solid #e0e0e0',
  width: '270px',
  marginLeft: '50px',
  [theme.breakpoints.down('sm')]: {
    width: '100%', // Make it full width on small screens
    marginLeft: '0', // Remove left margin on small screens
    marginTop: '16px', // Add top margin for spacing on small screens
  },
}));

const StyledCardNotifications = styled(Card)({
  borderRadius: '8px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
  border: '1px solid #e0e0e0',
  backgroundColor: 'skyblue',
});

const StyledButton = styled(Button)({
  backgroundColor: 'black',
  color: '#ffffff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#1666c1'
  },
  marginLeft: 'auto',
  display: 'block',
});

const drawerWidth = 240;

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <List>
        <ListItem button>
          <ListItemIcon><DirectionsBusIcon /></ListItemIcon>
          <ListItemText primary="Bus" />
        </ListItem>
        <ListItem button>
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary="School" />
        </ListItem>
        {isMobile && (
          <>
            <ListItem button>
              <ListItemText primary="Realtime" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Reports" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Alerts" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="User name" />
            </ListItem>
          </>
        )}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Qiktrack
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'left' }}>
            <TextField
              variant="outlined"
              placeholder="Search"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              sx={{ 
                maxWidth: { xs: '70%', sm: '600px', md: '800px', lg: '1000px' }, 
                maxWidth: 600, 
                borderRadius: '25px', 
                '& .MuiOutlinedInput-root': {
                  borderRadius: '25px',
                }
              }}
            />
          </Box>
          {!isMobile && (
            <>
              <Button color="inherit">Realtime</Button>
              <Button color="inherit">Dashboard</Button>
              <Button color="inherit">Reports</Button>
              <Button color="inherit">Alerts</Button>
              <Button color="inherit" startIcon={<AccountCircleIcon />} endIcon={<ArrowDropDownIcon />}>
                User name
              </Button>
            </>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <StyledContainer>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" align="left" gutterBottom>
                Welcome, Aatreya Academy 👋
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StyledCardOne>
                <CardContent>
                  <Typography variant="h6" align="left">Total Students (in School)</Typography>
                  <Typography variant="h4" align="left">50</Typography>
                  <Grid container spacing={1} justifyContent="flex-end">
                    <Grid item xs={3} sm={3} sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px', backgroundColor: 'white' }}>
                      <Typography color="textSecondary" align="center">Present: 12</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px', backgroundColor: 'white', marginLeft: '5px', marginRight: '5px' }}>
                      <Typography color="textSecondary" align="center">Absent: 12</Typography>
                    </Grid>
                    <Grid item xs={3} sm={3} sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px', backgroundColor: 'white' }}>
                      <Typography color="textSecondary" align="center">On Leave: 12</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCardOne>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StyledCardTwo>
                <CardContent>
                  <Typography variant="h6">Total Teachers (in School)</Typography>
                  <Typography variant="h4">60</Typography>
                  <Grid container spacing={1}>
                    <Grid item sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px', marginTop: '15px' }}>
                      <Typography color="textSecondary">Present: 22</Typography>
                    </Grid>
                    <Grid item sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px', marginTop: '15px', marginLeft: '10px' }}>
                      <Typography color="textSecondary">Absent: 22</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCardTwo>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StyledCardThree>
                <CardContent>
                  <Typography variant="h6">Total Buses (in School)</Typography>
                  <Typography variant="h4">23</Typography>
                  <Grid container spacing={1}>
                    <Grid item sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px', marginTop: '15px' }}>
                      <Typography color="textSecondary">Route: 28</Typography>
                    </Grid>
                    <Grid item sx={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '8px', marginTop: '15px', marginLeft: '10px' }}>
                      <Typography color="textSecondary">Trip: 14</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </StyledCardThree>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StyledCard style={{ backgroundColor: '#E6E6FA' }}>
                <CardContent>
                  <Typography variant="h6">All Notices</Typography>
                  <Typography color="textSecondary">
                    Keep Track on all Notices of your School
                  </Typography>
                  <StyledButton fullWidth={isMobile}>
                    View All
                  </StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StyledCard style={{ backgroundColor: '#e8f5e9' }}>
                <CardContent>
                  <Typography variant="h6">All Reminders</Typography>
                  <Typography color="textSecondary">
                    Keep Track on all Reminders of your School
                  </Typography>
                  <StyledButton fullWidth={isMobile}>
                    View All
                  </StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <StyledCard style={{ backgroundColor: '#fff3e0' }}>
                <CardContent>
                  <Typography variant="h6">All Announcements</Typography>
                  <Typography color="textSecondary">
                    Reach the all Announcement by your School
                  </Typography>
                  <StyledButton fullWidth={isMobile}>
                    View All
                  </StyledButton>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12}>
              <StyledCardNotifications>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>11th B Class has no teacher, view the Live CCTV Camera</Typography>
                    <Box display="flex" alignItems="center">
                      <StyledButton>Check it out</StyledButton>
                      <IconButton>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </StyledCardNotifications>
            </Grid>

            <Grid item xs={12}>
              <StyledCardNotifications>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>11th B Class has no teacher, view the Live CCTV Camera</Typography>
                    <Box display="flex" alignItems="center">
                      <StyledButton>Check it out</StyledButton>
                      <IconButton>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </StyledCardNotifications>
            </Grid>

            <Grid item xs={12}>
              <StyledCardNotifications>
                <CardContent>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>11th B Class has no teacher, view the Live CCTV Camera</Typography>
                    <Box display="flex" alignItems="center">
                      <StyledButton>Check it out</StyledButton>
                      <IconButton>
                        <CloseIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </StyledCardNotifications>
            </Grid>
          </Grid>
        </StyledContainer>
      </Box>
    </Box>
  );
}

export default App;
