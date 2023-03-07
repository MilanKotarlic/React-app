import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HEADER_MENU_ITEMS } from "../../constants/header.constants";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleToggleUserMenu = (event, isActionOpen = true) => {
		if(isActionOpen) {
			setAnchorElUser(event.currentTarget);
		} else {
			setAnchorElUser(null);
		}
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

	const handleNavigate = (route) => {
		navigate(route); 
		setActive(route)
	}


  const location = useLocation();
  const navigate = useNavigate();
  const [isActive, setActive] = useState(location.pathname);

	const activeItemStyle = (route) => {
		return {
			fontWeight:  isActive === route ? 'bold' : 'Normal',
			background:  isActive === route ? '#1163b4' : 'transparent'
		}
	}

  const renderHeaderMenu = () =>
    HEADER_MENU_ITEMS.map((item) => (
				<Button
					key={item.name}
					onClick={() => handleNavigate(item.route)}
					sx={{ my: 2, color: 'white', display: 'block', ...activeItemStyle(item.route) }}
				>
					{item.name}
				</Button>
    ));

  return (
		<AppBar position="static">
		<Container maxWidth="xl">
			<Toolbar disableGutters>
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						mr: 2,
						display: { xs: 'none', md: 'flex' },
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					LOGO
				</Typography>

				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}
						color="inherit"
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: 'bottom',
							horizontal: 'left',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'left',
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: 'block', md: 'none' },
						}}
					>{renderHeaderMenu()}
					</Menu>
				</Box>
				<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
				<Typography
					variant="h5"
					noWrap
					component="a"
					href=""
					sx={{
						mr: 2,
						display: { xs: 'flex', md: 'none' },
						flexGrow: 1,
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					LOGO
				</Typography>
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					{renderHeaderMenu()}
				</Box>

				<Box sx={{ flexGrow: 0 }}>
					<Tooltip title="Open settings">
						<IconButton onClick={(e) => handleToggleUserMenu(e)} sx={{ p: 0 }}>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
						</IconButton>
					</Tooltip>
					<Menu
						sx={{ mt: '45px' }}
						id="menu-appbar"
						anchorEl={anchorElUser}
						anchorOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						keepMounted
						transformOrigin={{
							vertical: 'top',
							horizontal: 'right',
						}}
						open={Boolean(anchorElUser)}
						onClose={(e) => handleToggleUserMenu(e, false)}
					>
						{settings.map((setting) => (
							<MenuItem key={setting} onClick={(e) => handleToggleUserMenu(e, false)}>
								<Typography textAlign="center">{setting}</Typography>
							</MenuItem>
						))}
					</Menu>
				</Box>
			</Toolbar>
		</Container>
	</AppBar>
  );
};

export default Header;