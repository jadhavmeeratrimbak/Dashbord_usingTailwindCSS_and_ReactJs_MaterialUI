import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";

import InputBase from "@mui/material/InputBase";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableChartIcon from "@mui/icons-material/TableChart";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonAddAltSharpIcon from "@mui/icons-material/PersonAddAltSharp";
import { useNavigate } from "react-router-dom";
import { blueGrey } from "@mui/material/colors";

const drawerWidth = 260;
const drawerHeight = 700;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  p: 2,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function ResponsiveDrawer(props) {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className=" ">
      <List sx={{ width: "100%", maxWidth: 360,bgcolor: "#093445" }} component="nav">
        <div>
          <ListItemButton>
         
            <ListItemText className="text-white font-semibold text-9xl">
              <div className="font-medium text-2xl text-white p-2">
              
                Material Dashbord
              </div>
            </ListItemText>
          </ListItemButton>
        </div>

        <Divider className=" border border-white" />

        <ListItemButton className="p-2" >
          <ListItemIcon>
          
              <HomeIcon  className="text-white "/>
           
          </ListItemIcon>
          <ListItemText onClick={() => navigate("/")}>
          
            <span className="font-medium text-lg text-white ">Dashbord</span>
          </ListItemText>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon className="text-white" />
          </ListItemIcon>
          <ListItemText
         
      
            onClick={() => navigate("/profile")} >  
            <span className="font-medium text-lg text-white ">Profile</span>
          </ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <TableChartIcon className="text-white" />
          </ListItemIcon>
          <ListItemText
         
         onClick={() => navigate("/table")}
          > <span className="font-medium text-lg text-white ">Table</span></ListItemText>
            
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <NotificationsIcon className="text-white" />
          </ListItemIcon>
          <ListItemText
       
            onClick={() => navigate("/notifation")}><span className="font-medium text-lg text-white ">Notification</span></ListItemText>
         
           
        </ListItemButton>
      </List>
      <Divider className=" border border-white" />
      <div>
          <ListItemButton>
         
            <ListItemText className="text-white font-semibold text-9xl">
              <div className="font-medium text-2xl text-white p-2">
              
                Auth Pages
              </div>
            </ListItemText>
          </ListItemButton>
        </div>
      <List sx={{ bgcolor: "#093445" }}>
        <ListItemButton>
          <ListItemIcon>
            <LoginIcon className="text-white" />
          </ListItemIcon>
          <ListItemText
         
            onClick={() => navigate("/signin")}
            className="text-white"
          ><span className="font-medium text-lg text-white ">Sign In</span></ListItemText>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PersonAddAltSharpIcon className="text-white" />
          </ListItemIcon>
          <ListItemText
       
            onClick={() => navigate("/signup")}
            className="text-white"
          ><span className="font-medium text-lg text-white ">Sign Up</span></ListItemText>
        </ListItemButton>
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          // ml: { sm: `${drawerWidth}px` },
          boxShadow: "none",
          bgcolor: blueGrey[50],
          position:'sticky'
        }}

      >
        <Toolbar className="sticky">
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: "block", md: "block", lg: "none", xl: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className=""
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="black"
            >
              <MailIcon />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="black"
            >
              <NotificationsIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="black"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box component="nav" aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          className="shadow-2xl"
          variant="permanent"
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },

            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: drawerHeight,
              ml: "15px",
              mt: "20px",
              borderRadius: "10px",
              bgcolor: "#093445",
              mb: "20px",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
export default ResponsiveDrawer;
