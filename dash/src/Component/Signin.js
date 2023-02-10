import * as React from "react";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function BasicTextFields() {
  const navigate = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <Box className=" min-h-screen Background  ">
        <AppBar component="nav">
     
          <List sx={{  maxWidth: 660, }}>
          
          <div className="flex ">
       

            <ListItemButton className="p-2">
              <ListItemText onClick={() => navigate("/")}>
                <span className="font-medium text-lg text-white ">
                  Dashbord
                </span>
              </ListItemText>
            </ListItemButton>

            <ListItemButton>
              <ListItemText onClick={() => navigate("/profile")}>
                <span className="font-medium text-lg text-white ">Profile</span>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText onClick={() => navigate("/table")}>
                {" "}
                <span className="font-medium text-lg text-white ">Table</span>
              </ListItemText>
            </ListItemButton>
            <ListItemButton>
              <ListItemText onClick={() => navigate("/notifation")}>
                <span className="font-medium text-lg text-white ">
                  Notification
                </span>
              </ListItemText>
            </ListItemButton>
        
        <ListItemButton>
        
          <ListItemText
         
            onClick={() => navigate("/signin")}
            className="text-white"
          ><span className="font-medium text-lg text-white ">Sign In</span></ListItemText>
        </ListItemButton>
        <ListItemButton>
          
          <ListItemText
       
            onClick={() => navigate("/signup")}
            className="text-white"
          ><span className="font-medium text-lg text-white ">Sign Up</span></ListItemText>
        </ListItemButton>
      
          </div>
          </List>
        </AppBar>
        <div className="mx-auto lg:px-4 py-5">
          <div className="grid relative left-[35rem] top-32   max-w-sm lg:max-w-[70rem] md:max-w-[48rem] sm:max-w-[35rem] ">
            <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white  p-7 rounded-lg font-bold  relative top-4 ">
              <div>Sign In</div>
            </div>
            <div className="bg-white inline-block px-5 py-6 text-center rounded-lg">
              <div className="py-3">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </div>
              <div className="py-3">
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </div>
              <div className="text-slate-500 text-xl">
                <Checkbox {...label} />
                Remember me
              </div>
              <div className="py-3">
                <Button variant="contained" className="max-w-[20rem]">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <div className="relative    ">
        <AppBar
          sx={{
            // width: { sm: `calc(100% - ${drawerWidth}px)` },
            // ml: { sm: `${drawerWidth}px` },
            boxShadow: "none",
            bgcolor: "white",
            opacity: "1",
            position: "sticky",
          }}
        >
          <Toolbar className="sticky">
            <Typography
              variant="p"
              className="relative left-72 text-slate-500 text-sm lg:left-5 md:left-5  sm:left-5 xs:left-5"
            >
              @2023,made with <FavoriteIcon />
              by Creative Tim For a better web.{" "}
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }} className="">
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="black"
              >
                <Typography variant="p" className="text-sm">
                  Creative tim
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="black"
              >
                <Typography variant="p" className="text-sm">
                  About Us
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="black"
              >
                <Typography variant="p" className="text-sm">
                  Blog
                </Typography>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                color="black"
              >
                <Typography variant="p" className="text-sm">
                  License
                </Typography>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
