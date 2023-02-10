import React from "react";
import Nav from "./Nav";
import { Box } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import Sky from "./Sky1.jpg";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HouseIcon from "@mui/icons-material/House";
import MessageIcon from "@mui/icons-material/Message";
import SettingsIcon from "@mui/icons-material/Settings";
import Switch from "@mui/material/Switch";
import { Button, Divider } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
export default function Profile() {
  const [value, setValue] = React.useState(0);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  return (
    <div className="">
      <Box className=" min-h-screen " sx={{ bgcolor: blueGrey[50] }}>
        <Nav />
        <div className="mx-auto lg:px-4 py-5">
          <div className="grid  max-w-[75rem] lg:max-w-[70rem] md:max-w-[48rem] sm:max-w-[35rem] ">
          <div className="relative left-[19rem] lg:left-3 md:left-2 sm:left-3 xs:left-3 py-4 -top-6">
            <h1 className="font-bold text-2xl"> Profile</h1>
          </div>
            <div className="bg-white relative left-[19rem] lg:left-3 md:left-2 sm:left-3 xs:left-3 rounded-lg">
           
              <div className="flex justify-between">
                <div className="flex ml-7 mt-3">
                  <img
                    src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/bruce-mars.jpeg"
                    className="w-20 h-20 p-2"
                  ></img>
                  <ul className="list-none mt-3">
                    <li className="font-bold">Richard Dalvis</li>
                    <li>CEO/Co-operation</li>
                  </ul>
                </div>
                <div className="flex justify-end px-5">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="icon position tabs example"
                  >
                    <Tab
                      icon={<HouseIcon />}
                      iconPosition="start"
                      label="start"
                    />
                    <Tab
                      icon={<MessageIcon />}
                      iconPosition="start"
                      label="start"
                    />
                    <Tab
                      icon={<SettingsIcon />}
                      iconPosition="start"
                      label="start"
                    />
                  </Tabs>
                </div>
              </div>
              <div className="flex ml-7 gap-10">
                <div>
                  <h6 className="font-bold py-2">Platform Settings</h6>
                  <div>
                    <p className="text-slate-500 ">Account</p>
                    <ul className="list-none">
                      <li>
                        <span>
                          {" "}
                          <Switch {...label} defaultChecked />
                        </span>
                        Email me when someone follow me
                      </li>
                      <li>
                        <span>
                          {" "}
                          <Switch {...label} />
                        </span>
                        Email me when someone answer on my post
                      </li>
                      <li>
                        <span>
                          {" "}
                          <Switch {...label} defaultChecked />
                        </span>
                        Email me when someone follow me
                      </li>
                    </ul>
                    <div className="mt-4">
                      <div>
                        <p className="text-slate-500 ">Application</p>
                        <ul className="list-none">
                          <li>
                            <span>
                              {" "}
                              <Switch {...label} defaultChecked />
                            </span>
                            Email me when someone follow me
                          </li>
                          <li>
                            <span>
                              {" "}
                              <Switch {...label} />
                            </span>
                            Email me when someone answer on my post
                          </li>
                          <li>
                            <span>
                              {" "}
                              <Switch {...label} defaultChecked />
                            </span>
                            Email me when someone follow me
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" px-5">
                  <h6 className="font-bold py-2">Profile Information</h6>
                  <div className="">
                    <p className="text-slate-500 text-sm">
                      Hi, I'm Alec Thompson,
                      <br />
                      Decisions: If you can't decide,
                      <br />
                      the answer is no. If two equally <br />
                      difficult paths,choose the one more
                      <br />
                      painful in the short term(pain avoidance <br />
                      is creating an illusion of equality).
                    </p>
                  </div>
                  <Divider sx={{ mt: "20px", mr: "14px" }} />
                  <div>
                    <ul className="list-none">
                      <li className="p-2">
                        <span className="font-bold">First Name :</span>
                        <span className="text-slate-500">Meera T Jadhav</span>
                      </li>
                      <li className="p-2">
                        <span className="font-bold">Mobile :</span>
                        <span className="text-slate-500">090909090</span>
                      </li>
                      <li className="p-2">
                        <span className="font-bold">Email :</span>
                        <span className="text-slate-500">
                          jadhavmiu@gmail.com
                        </span>
                      </li>
                      <li className="p-2">
                        <span className="font-bold">Location :</span>
                        <span className="text-slate-500">India</span>
                      </li>
                      <li className="p-2">
                        <span className="font-bold">Social :</span>
                        <span className="text-slate-500">
                          <TwitterIcon className="text-blue-600" />
                          <FacebookIcon className="text-blue-600" />
                          <InstagramIcon className="text-purple-500" />
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="">
                  <h6 className="font-bold py-2">Platform Settings</h6>
                  <div className="flex justify-between">
                    <div className="flex">
                      <img
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                        className="w-16 h-16 rounded-md"
                      ></img>
                      <ul className="list-none px-3">
                        <li className="font-bold">Saphib B</li>
                        <li className="text-slate-500">
                          Hi! I need more Information
                        </li>
                      </ul>
                    </div>
                    <div className="ml-16">
                      <Button>Replay</Button>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex">
                      <img
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                        className="w-16 h-16 rounded-md"
                      ></img>
                      <ul className="list-none px-3">
                        <li className="font-bold">Alexabra</li>
                        <li className="text-slate-500">
                          Awesome Work Can You...
                        </li>
                      </ul>
                    </div>
                    <div className="ml-16 ">
                      <Button sx={{ fontSize: "12px", fontWeight: "700" }}>
                        Replay
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between py-2">
                    <div className="flex">
                      <img
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                        className="w-16 h-16 rounded-md"
                      ></img>
                      <ul className="list-none px-3">
                        <li className="font-bold">Lvanna</li>
                        <li className="text-slate-500">About files I can...</li>
                      </ul>
                    </div>
                    <div className="ml-16 ">
                      <Button sx={{ fontSize: "12px", fontWeight: "700" }}>
                        Replay
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between py-2">
                    <div className="flex">
                      <img
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                        className="w-16 h-16 rounded-md"
                      ></img>
                      <ul className="list-none px-3">
                        <li className="font-bold">Peterson</li>
                        <li className="text-slate-500">
                          Have a great afternoon...
                        </li>
                      </ul>
                    </div>
                    <div className="ml-16 ">
                      <Button sx={{ fontSize: "12px", fontWeight: "700" }}>
                        Replay
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-between py-2">
                    <div className="flex">
                      <img
                        src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/bruce-mars.jpeg"
                        className="w-16 h-16 rounded-md"
                      ></img>
                      <ul className="list-none px-3">
                        <li className="font-bold">Peterson</li>
                        <li className="text-slate-500">
                          Hi!I need more Information...
                        </li>
                      </ul>
                    </div>
                    <div className="ml-16 ">
                      <Button sx={{ fontSize: "12px", fontWeight: "700" }}>
                        Replay
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-7 py-5">
                <div>
                  <h6 className="font-bold">Project</h6>
                  <p className="text-slate-500">Architects design houses</p>
                  <div className="flex gap-7  py-3 right-1 relative">
                    <div>
                      <Card sx={{ minWidth: 250 }}>
                        <CardMedia
                          sx={{ height: 140, borderRadius: "10px" }}
                          image="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-1.jpeg"
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                            Project #1
                          </Typography>
                          <Typography variant="h5" component="div" sx={{fontWeight:"700"}}>
                            Modern
                          </Typography>

                          <Typography variant="body2">
                            As Uber works through a huge amount of internal
                            management turmoil.
                          </Typography>
                        </CardContent>
                        <div className="flex justify-between">
                          <CardActions>
                            <Button size="small" variant="outlined">
                              View Project
                            </Button>
                          </CardActions>
                          <div className="flex justify-end mt-2">
                          <AvatarGroup >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Travis Howard"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Agnes Walker"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Trevor Henderson"
                              src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                          </AvatarGroup>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div>
                      <Card sx={{ minWidth: 250 }}>
                        <CardMedia
                          sx={{ height: 140, borderRadius: "10px" }}
                          image="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-2.jpeg"
                          title="green iguana"
                        />
                       <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                             Project #2
                          </Typography>
                          <Typography variant="h5" component="div" sx={{fontWeight:"700"}}>
                          Scandinavian
                          </Typography>
                          
                          <Typography variant="body2">
                          Music is something that every person has his or her own specific opinion about.
                          <br/>
                          <br/>
                          </Typography>
                        </CardContent>
                        <div className="flex justify-between">
                          <CardActions>
                            <Button size="small" variant="outlined">
                              View Project
                            </Button>
                          </CardActions>
                          <div className="flex justify-end mt-2">
                          <AvatarGroup >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Travis Howard"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Agnes Walker"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Trevor Henderson"
                              src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                          </AvatarGroup>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div>
                      <Card sx={{ minWidth: 250 }}>
                        <CardMedia
                          sx={{ height: 140, borderRadius: "10px" }}
                          image="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-3.jpeg"
                          title="green iguana"
                        />
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                             Project #3
                          </Typography>
                          <Typography variant="h5" component="div" sx={{fontWeight:"700"}}>
                           Minimalist
                          </Typography>
                          
                          <Typography variant="body2">
                          Different people have different taste, and various types of music.
                          <br />
                          <br/>
                         
                         
                          </Typography>
                        </CardContent>
                        <div className="flex justify-between">
                          <CardActions>
                            <Button size="small" variant="outlined">
                              View Project
                            </Button>
                          </CardActions>
                          <div className="flex justify-end mt-2">
                          <AvatarGroup >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Travis Howard"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Agnes Walker"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Trevor Henderson"
                              src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                          </AvatarGroup>
                          </div>
                        </div>
                      </Card>
                    </div>
                    <div>
                      <Card sx={{ minWidth: 250 }}>
                        <CardMedia
                          sx={{ height: 140, borderRadius: "10px" }}
                          image="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/home-decor-4.jpeg"
                          title="green iguana"
                        />
                           <CardContent>
                           <Typography
                            sx={{ fontSize: 14 }}
                            color="text.secondary"
                            gutterBottom
                          >
                             Project #4
                          </Typography>
                        <Typography variant="h5" component="div" sx={{fontWeight:"700"}}>
                           Gothic
                          </Typography>
                          
                          <Typography variant="body2">
                          Why would anyone pick blue over pink? Pink is obviously a better color.
                          <br />
                          <br/>
                        
                         
                          </Typography>
                        </CardContent>
                        <div className="flex justify-between">
                          <CardActions>
                            <Button size="small" variant="outlined">
                              View Project
                            </Button>
                          </CardActions>
                          <div className="flex justify-end mt-2">
                          <AvatarGroup >
                            <Avatar
                              alt="Remy Sharp"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Travis Howard"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Agnes Walker"
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                            <Avatar
                              alt="Trevor Henderson"
                              src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                              sx={{width:'20px',height:'20px'}}
                            />
                          </AvatarGroup>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
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
