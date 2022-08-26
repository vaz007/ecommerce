import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import CheckboxProton from './CheckboxProton'
import data from '../data.json'
import {
  selectedCategory
} from "../redux-helpers/actions/filterAction";
import { ShoppingBag } from '@mui/icons-material';

const drawerWidth = 240;

function Filter({ window, selectedCategory }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [categoryFilter, setCategoryFilter] = useState([])
  const [selectCategory, setSelectCategory] = useState([])

  useEffect(() => {
    let unique = _.uniqBy(data.products, 'category');
    // let addChekedField = [];
    // unique.map((item) => {
    //   return addChekedField.push({ ...item, checked: false })
    // })
    setCategoryFilter(() => unique);
  }, [selectedCategory])


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChangeChecked = (id) => {

    // const cusinesStateList = cuisines;
    const changeCheckedCategory = categoryFilter.map((item) =>

      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCategoryFilter(() => [...changeCheckedCategory])
    selectedCategory([...changeCheckedCategory]);
  };
  const drawer = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <div>
        <p className='label'>category</p>
        {categoryFilter.map((product) => (
          <CheckboxProton
            key={product.id}
            product={product}
            label={product.category}
            changeChecked={handleChangeChecked}
          />
        ))}
      </div>
    </Box >

  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Ecommerce
          </Typography>
          <Link to="/cart">
            <IconButton
              color="inherit"
              edge="end"
              style={{
                color: "white",
                marginRight: "1rem"
              }}
            >
              <ShoppingBag />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Filter.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default connect(null, { selectedCategory })(Filter);;
