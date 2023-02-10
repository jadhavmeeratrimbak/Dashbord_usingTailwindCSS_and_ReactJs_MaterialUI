import React from "react";
import Nav from "./Nav";
import { Box, Divider, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { fontWeight } from "@mui/system";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
export default function TableFun() {
  return (
    <div className=" relative ">
      <Box className=" min-h-screen   " sx={{ bgcolor: blueGrey[50] }}>
        <Nav />
        <div className="mx-auto lg:px-4 py-5">
          <div className=" max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-2xl xs:max-w-xl ">
            <div className="relative left-[19rem] lg:left-3 md:left-2 sm:left-3 xs:left-3 py-4 -top-6">
              <h1 className="font-bold text-2xl"> Table</h1>
            </div>

            <div className=" relative left-[19rem] lg:left-3 md:left-2 sm:left-3 xs:left-3 rounded-lg">
              <div className=" bg-gradient-to-tr from-blue-600 to-blue-400 text-white  py-4 px-4 rounded-lg font-bold  ">
                Authors Table
              </div>
              <div className="bg-white   rounded-lg ">
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                      sx={{
                        "& .MuiTableCell-head": {
                          color: "gray",
                          fontSize: "11px",
                          fontWeight: "700",
                        },
                      }}
                    >
                      <TableRow sx={{ fontWeight: "700" }}>
                        <TableCell>AUTHOR</TableCell>
                        <TableCell>FUNCTION</TableCell>
                        <TableCell>STATUS</TableCell>
                        <TableCell>EMPLOY</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="flex">
                            <img
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                              className="w-10 h-10"
                            />
                            <div className="ml-3">
                              <ul>
                                <li className="font-bold">John Michael</li>
                                <li className="text-slate-500">
                                  john@creative-tim.com
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="">
                            <ul>
                              <li className="font-bold text-slate-500">
                                Manager
                              </li>
                              <li className="text-slate-500">Organization</li>
                            </ul>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            sx={{ fontSize: "10px" }}
                          >
                            Online
                          </Button>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <p className=" text-slate-500">9/10/23</p>
                        </TableCell>
                        <TableCell>
                          <Button sx={{ fontSize: "10px", color: "black" }}>
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="flex">
                            <img
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                              className="w-10 h-10"
                            />
                            <div className="ml-3">
                              <ul>
                                <li className="font-bold">Alexa Liras</li>
                                <li className="text-slate-500">
                                  Alexa@creative-tim.com
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="">
                            <ul>
                              <li className="font-bold text-slate-500">
                                Programtor
                              </li>
                              <li className="text-slate-500">Developer</li>
                            </ul>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{ fontSize: "10px" }}
                          >
                            offline
                          </Button>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <p className=" text-slate-500">12/10/23</p>
                        </TableCell>
                        <TableCell>
                          <Button sx={{ fontSize: "10px", color: "black" }}>
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="flex">
                            <img
                              src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                              className="w-10 h-10"
                            />
                            <div className="ml-3">
                              <ul>
                                <li className="font-bold">Laurent Perrier</li>
                                <li className="text-slate-500">
                                  laurent@creative-tim.com
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="">
                            <ul>
                              <li className="font-bold text-slate-500">
                                Executive
                              </li>
                              <li className="text-slate-500">Projects</li>
                            </ul>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            sx={{ fontSize: "10px" }}
                          >
                            Online
                          </Button>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <p className=" text-slate-500">7/10/23</p>
                        </TableCell>
                        <TableCell>
                          <Button sx={{ fontSize: "10px", color: "black" }}>
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="flex">
                            <img
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                              className="w-10 h-10"
                            />
                            <div className="ml-3">
                              <ul>
                                <li className="font-bold">Michael Levi</li>
                                <li className="text-slate-500">
                                  michael@creative-tim.com
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="">
                            <ul>
                              <li className="font-bold text-slate-500">
                                Programator
                              </li>
                              <li className="text-slate-500">Developer</li>
                            </ul>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            sx={{ fontSize: "10px" }}
                          >
                            Online
                          </Button>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <p className=" text-slate-500">23/10/23</p>
                        </TableCell>
                        <TableCell>
                          <Button sx={{ fontSize: "10px", color: "black" }}>
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="flex">
                            <img
                              src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/bruce-mars.jpeg"
                              className="w-10 h-10"
                            />
                            <div className="ml-3">
                              <ul>
                                <li className="font-bold">Bruce Mars</li>
                                <li className="text-slate-500">
                                  bruce@creative-tim.com
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="">
                            <ul>
                              <li className="font-bold text-slate-500">
                                Manager
                              </li>
                              <li className="text-slate-500">Executive</li>
                            </ul>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{ fontSize: "10px" }}
                          >
                            offline
                          </Button>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <p className=" text-slate-500">25/10/23</p>
                        </TableCell>
                        <TableCell>
                          <Button sx={{ fontSize: "10px", color: "black" }}>
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell>
                          <div className="flex">
                            <img
                              src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                              className="w-10 h-10"
                            />
                            <div className="ml-3">
                              <ul>
                                <li className="font-bold">Alexander</li>
                                <li className="text-slate-500">
                                  alexander@creative-tim.com
                                </li>
                              </ul>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="">
                            <ul>
                              <li className="font-bold text-slate-500">
                                Programator
                              </li>
                              <li className="text-slate-500">Developer</li>
                            </ul>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{ fontSize: "10px" }}
                          >
                            offline
                          </Button>
                        </TableCell>
                        <TableCell>
                          {" "}
                          <p className=" text-slate-500">25/10/23</p>
                        </TableCell>
                        <TableCell>
                          <Button sx={{ fontSize: "10px", color: "black" }}>
                            Edit
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="mt-6">
                <div className="bg-gradient-to-tr from-blue-600 to-blue-400 text-white  py-4 px-4 rounded-lg font-bold  ">
                  Authors Table
                </div>
                <div>
                  <div className="bg-white max-w-[78rem]  rounded-lg ">
                    <TableContainer>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead
                          sx={{
                            "& .MuiTableCell-head": {
                              color: "gray",
                              fontSize: "11px",
                              fontWeight: "700",
                            },
                          }}
                        >
                          <TableRow>
                            <TableCell> CAMPANIES</TableCell>
                            <TableCell> MEMBERS</TableCell>
                            <TableCell> BUDGES</TableCell>
                            <TableCell> CAMPLATIONS</TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <div className="flex">
                                <img
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-xd.svg"
                                  className="w-10 h-10"
                                ></img>
                                <p className="mt-2 font-bold">
                                  Material XD version
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="text-center flex">
                                <Avatar
                                  alt="Remy Sharp"
                                  src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                                  sx={{ width: "20px", height: "20px" }}
                                />
                                <Avatar
                                  alt="Travis Howard"
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                  sx={{ width: "20px", height: "20px" }}
                                />
                                <Avatar
                                  alt="Cindy Baker"
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                                  sx={{ width: "20px", height: "20px" }}
                                />
                                <Avatar
                                  alt="Agnes Walker"
                                  src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                  sx={{ width: "20px", height: "20px" }}
                                />
                              </div>
                            </TableCell>
                            <TableCell>$14,000</TableCell>
                            <TableCell>
                              {" "}
                              <p className=" text-slate-500">60%</p>
                              <div className="bg-slate-100 rounded-xl border-solid">
                                <div className="bg-blue-500 rounded-xl w-3/5 h-1  text-xs"></div>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <div className="flex">
                                <img
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-atlassian.svg"
                                  className="w-10 h-10"
                                ></img>
                                <p className="mt-2 font-bold">
                                  Add Process Track
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex">
                                <Avatar
                                  alt="Travis Howard"
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                  sx={{ width: "20px", height: "20px" }}
                                />

                                <Avatar
                                  alt="Agnes Walker"
                                  src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                  sx={{ width: "20px", height: "20px" }}
                                />
                              </div>
                            </TableCell>
                            <TableCell>$3000</TableCell>
                            <TableCell>
                              {" "}
                              <p className=" text-slate-500">10%</p>
                              <div className="bg-slate-100 rounded-xl border-solid">
                                <div className="bg-blue-500 rounded-xl w-1/12 h-1  text-xs"></div>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <div className="flex">
                                <img
                                  src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-slack.svg"
                                  className="w-10 h-10"
                                ></img>
                                <p className="mt-2 font-bold">
                                  Fix Platform Error
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex">
                                <Avatar
                                  alt="Travis Howard"
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                   sx={{ width: "20px", height: "20px" }}
                                />

                                <Avatar
                                  alt="Agnes Walker"
                                  src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                   sx={{ width: "20px", height: "20px" }}
                                />
                              </div>
                            </TableCell>
                            <TableCell>Not set</TableCell>
                            <TableCell>
                              100%
                              <div className="bg-slate-100 rounded-xl border-solid">
                                <div className="bg-green-500 rounded-xl w-full h-1  text-xs"></div>
                              </div>
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <div className="flex">
                                <img
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-spotify.svg"
                                  className="w-10 h-10"
                                ></img>
                                <p className="mt-2 font-bold">
                                  Launch Our Mobile App
                                </p>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex">
                                <Avatar
                                  alt="Remy Sharp"
                                  src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                                   sx={{ width: "20px", height: "20px" }}
                                />
                                <Avatar
                                  alt="Travis Howard"
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                 sx={{ width: "20px", height: "20px" }}
                                />
                                <Avatar
                                  alt="Cindy Baker"
                                  src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                                   sx={{ width: "20px", height: "20px" }}
                                />
                                <Avatar
                                  alt="Agnes Walker"
                                  src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                   sx={{ width: "20px", height: "20px" }}
                                />
                              </div>
                            </TableCell>
                            <TableCell>$20,500</TableCell>
                            <TableCell>
                              100%
                              <div className="bg-slate-100 rounded-xl border-solid">
                                <div className="bg-green-500 rounded-xl w-full h-1  text-xs"></div>
                              </div>
                            </TableCell>
                           
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <div className="flex">
                              <img
                                    src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-jira.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Add the New Pricing Page
                                  </p>
                                
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="">
                          
                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                       sx={{ width: "20px", height: "20px" }}
                                    />
                               
                              </div>
                            </TableCell>
                            <TableCell>
                             $500
                            </TableCell>
                            <TableCell>
                            25%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-blue-500 rounded-xl w-1/4 h-1  text-xs"></div>
                                  </div>
                            </TableCell>
                            <TableCell>
                             
                            </TableCell>
                          </TableRow>
                          <TableRow
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>
                              <div className="flex">
                              <img
                                    src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-invision.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Redesign New Online Shop
                                  </p>
                                
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex">
                             
                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                      sx={{ width: "20px", height: "20px" }}
                                    />
                                    <Avatar
                                      alt="Cindy Baker"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                                      sx={{ width: "20px", height: "20px" }}
                                    />
                                
                              </div>
                            </TableCell>
                            <TableCell>
                             $2000
                            </TableCell>
                            <TableCell>
                            40%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-blue-500 rounded-xl w-2/5 h-1  text-xs"></div>
                                  </div>
                            </TableCell>
                            <TableCell>
                              
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
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
  );
}
