import React from "react";
import Nav from "./Nav";
import { Box, Divider, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
export default function Notifation() {
  const [open, setOpen] = React.useState(true);
  return (
    <div className=" relative ">
      <Box className=" min-h-screen   " sx={{ bgcolor: blueGrey[50] }}>
        <Nav />
        <div className="mx-auto lg:px-4 py-5">
          <div className=" max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl xs:max-w-xl ">
            <div className="relative left-[19rem] lg:left-3 md:left-2 sm:left-3 xs:left-3 py-4 -top-6">
              <h1 className="font-bold text-2xl"> Notifation</h1>
            </div>

            <div className=" relative left-[19rem] lg:left-3 md:left-2 sm:left-3 xs:left-3 rounded-lg">
              <div className=" bg-white  text-black  py-4 px-4 rounded-lg font-bold  ">
                alerts
                <Stack sx={{ width: "100%" }} spacing={2}>
                  <Alert
                    variant="filled"
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    This is an error alert — check it out!
                  </Alert>

                  <Alert
                    variant="filled"
                    severity="warning"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    This is a warning alert — check it out!
                  </Alert>

                  <Alert
                    variant="filled"
                    severity="info"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    This is an info alert — check it out!
                  </Alert>
                  <Alert
                    variant="filled"
                    severity="success"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    This is a success alert — check it out!
                  </Alert>
                </Stack>
              </div>

              <div className="mt-6">
                <div className="bg-white text-black  py-4 px-4 rounded-lg font-bold  ">
                  alerts with icon
                  <Stack sx={{ width: "100%" }} spacing={2}>
                    <Alert
                      variant="filled"
                      severity="error"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      This is an error alert — check it out!
                    </Alert>

                    <Alert
                      variant="filled"
                      severity="warning"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      This is a warning alert — check it out!
                    </Alert>

                    <Alert
                      variant="filled"
                      severity="info"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      This is an info alert — check it out!
                    </Alert>
                    <Alert
                      variant="filled"
                      severity="success"
                      action={
                        <IconButton
                          aria-label="close"
                          color="inherit"
                          size="small"
                          onClick={() => {
                            setOpen(false);
                          }}
                        >
                          <CloseIcon fontSize="inherit" />
                        </IconButton>
                      }
                    >
                      This is a success alert — check it out!
                    </Alert>
                  </Stack>
                </div>
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
          bgcolor: blueGrey[50],
          position:'sticky'
        }}
        
      >
        <Toolbar className="sticky">
        <Typography variant="p" className="relative left-72 text-slate-500 text-sm lg:left-5 md:left-5  sm:left-5 xs:left-5">@2023,made with <FavoriteIcon />by Creative Tim For a better web. </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className=""
          >
            

            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="black"
            >
            <Typography variant="p" className="text-sm">Creative tim</Typography>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="black"
            >
            <Typography  variant="p" className="text-sm">About Us</Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="black"
            >
             <Typography  variant="p" className="text-sm">Blog</Typography>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="black"
            >
             <Typography  variant="p" className="text-sm">License</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      </div>
    </div>
  );
}
