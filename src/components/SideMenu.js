import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText, Collapse, Box, Button, Paper, Badge } from '@mui/material';
import { ExpandLess, ExpandMore, Notifications } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const notifications = [
  {
    text: "New summer collection is now available!",
    author: "Shop Team",
    date: "2024-06-18"
  },
  {
    text: "Get 20% off on your first purchase!",
    author: "Shop Team",
    date: "2024-06-17"
  },
  {
    text: "Free shipping on orders over $50.",
    author: "Shop Team",
    date: "2024-06-16"
  }
];

const SideMenu = ({ onClose }) => {
  const [openSubmenu, setOpenSubmenu] = useState({ shop: false }); // Initial state with submenus closed
  const [showNotifications, setShowNotifications] = useState(1);
  const [newNotification, setNewNotification] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSubmenuState = JSON.parse(localStorage.getItem('submenuState'));
    if (storedSubmenuState) {
      setOpenSubmenu(storedSubmenuState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('submenuState', JSON.stringify(openSubmenu));
  }, [openSubmenu]);

  const handleNavigate = (path) => {
    onClose();
    navigate(path);
  };

  const handleToggleSubmenu = (menu) => {
    setOpenSubmenu((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  const handleLoadMore = () => {
    setShowNotifications(notifications.length);
    setNewNotification(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', width:'200px' }}>
      <Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1, mb: 1 }}>
          <img src="/logo192.png" alt="Logo" style={{ width: '80px' }} />
          <Typography variant="h6" sx={{ mt: 1, mb: 2 }}>
            General Luna Shop
          </Typography>
        </Box>
        <List>
          <ListItem button onClick={() => handleNavigate('/')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleToggleSubmenu('shop')}>
            <ListItemText primary="Shop" />
            {openSubmenu.shop ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={openSubmenu.shop} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigate('/shop')}>
                <ListItemText primary="Men's Clothing" />
              </ListItem>
              <ListItem button sx={{ pl: 4 }} onClick={() => handleNavigate('/shop')}>
                <ListItemText primary="Women's Clothing" />
              </ListItem>
            </List>
          </Collapse>
          {/* <ListItem button onClick={() => handleNavigate('/register')}>
            <ListItemText primary="Register" />
          </ListItem> */}
          <ListItem button onClick={() => handleNavigate('/login')}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button onClick={() => handleNavigate('/contact')}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ mt: 4, mb: 5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h5" gutterBottom sx={{ flexGrow: 1 }}>
            Notifications
          </Typography>
          {newNotification && (
            <Badge badgeContent={1} color="error">
              <Notifications color="action" />
            </Badge>
          )}
        </Box>
        <Paper elevation={3} sx={{ p: 2, maxHeight: '200px', overflow: 'auto' }}>
          {notifications.slice(0, showNotifications).map((note, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body1" gutterBottom>
                {note.text}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                - {note.author}, {note.date}
              </Typography>
            </Box>
          ))}
          {showNotifications < notifications.length && (
            <Button variant="contained" color="primary" onClick={handleLoadMore}>
              Load More
            </Button>
          )}
        </Paper>
      </Box>
    </Box>
  );
};

export default SideMenu;
