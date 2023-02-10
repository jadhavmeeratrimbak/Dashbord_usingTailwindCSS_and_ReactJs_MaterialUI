import { Box, Divider, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";
import Nav from "./Nav";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import BarChartIcon from "@mui/icons-material/BarChart";
import CheckIcon from "@mui/icons-material/Check";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled, { ThemeProvider } from "styled-components";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import NoEncryptionGmailerrorredIcon from '@mui/icons-material/NoEncryptionGmailerrorred';
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FavoriteIcon from '@mui/icons-material/Favorite';
import './../App.css'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
} from "recharts";
const Content = styled.div`
  margin: auto;
  max-width: 500px;
`;
const getIntroOfPage = (label) => {
  if (label === "Apr") {
    return "sales: 50,";
  }
  if (label === "May") {
    return "   sales: 40,";
  }
  if (label === "June") {
    return " sales: 300,";
  }
  if (label === "July") {
    return "  sales: 320,";
  }
  if (label === "Aug") {
    return " sales: 500,";
  }
  if (label === "Se") {
    return "  sales: 350,";
  }
  if (label === "Oct") {
    return "  sales: 200,";
  }
  if (label === "Nov") {
    return "  sales: 230,";
  }
  if (label === "Dec") {
    return "  sales: 500,";
  }
  return "";
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`  ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage(label)}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};
const getIntroOfPage1 = (label) => {
  if (label === "M") {
    return "view: 50,";
  }
  if (label === "T") {
    return "   view: 10,";
  }
  if (label === "W") {
    return "view: 20,";
  }
  if (label === "T") {
    return "  view: 22,";
  }
  if (label === "F") {
    return " view: 50,";
  }
  if (label === "S") {
    return " view: 10,";
  }
  if (label === "S") {
    return " view: 40,";
  }

  return "";
};

const CustomTooltip1 = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip1">
        <p className="label">{`  ${payload[0].value}`}</p>
        <p className="intro">{getIntroOfPage1(label)}</p>
        <p className="desc"></p>
      </div>
    );
  }

  return null;
};

const options = ["Action", "Another Action", "Something else here"];
const ITEM_HEIGHT = 48;
export default function DashBord() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const adata = [
    {
      day: "M",
      view: 50,
    },
    {
      day: "T",
      view: 20,
    },
    {
      day: "W",
      view: 10,
    },
    {
      day: "T",
      view: 22,
    },
    {
      day: "F",
      view: 50,
    },
    {
      day: "S",
      view: 10,
    },
    {
      day: "s",
      view: 40,
    },
  ];
  const pdata = [
    {
      month: "Apr",
      sales: 50,
    },
    {
      month: "May",
      sales: 40,
    },
    {
      month: "June",
      sales: 300,
    },
    {
      month: "July",
      sales: 320,
    },
    {
      month: "Aug",
      sales: 500,
    },
    {
      month: "Sep",
      sales: 350,
    },
    {
      month: "Oct",
      sales: 200,
    },
    {
      month: "Nov",
      sales: 230,
    },
    {
      month: "Dec",
      sales: 500,
    },
  ];
  return (
    <div className=" relative ">
      <Box className=" min-h-screen " sx={{ bgcolor: blueGrey[50] }}>
        <Nav />
        <div className=" grid grid-rows-3   gap-4  relative   overflow-hidden   ">
          <div className="relative  left-80   lg:left-3 md:left-3 sm:left-5 xs:left-5 ">
            <h1 className="font-bold text-2xl"> Home</h1>
          </div>
          <div className=" left-72 -top-72 relative lg:left-3 md:left-1 sm:left-3 xs:left-5 xs:-top-[38rem] ">
            <div class="mx-auto ml-6">
              <div class=" grid max-w-6xl lg:max-w-4xl lg:-top-96 md:-top-96 md:max-w-2xl md:gap-6   sm:max-w-2xl sm:-top-[48rem] xs:max-w-lg xs:-top-[30rem] relative grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 ">
                <div class="  rounded-xl p-6 bg-white shadow-md">
                  <div className="text-right ">
                    <p>Today's Money</p>
                    <h6 className="font-extrabold text-lg">$53K</h6>
                  </div>

                  <div className=" bg-gradient-to-tr from-blue-600 to-blue-400 w-14 h-14 p-3 rounded-md relative left-3 shadow-2xl  -top-24 lg:relative   text-white text-center ">
                    <div className="">
                      <CameraAltIcon className="text-center ml-1" />
                    </div>
                  </div>
                  <div className="-mt-10 ">
                    <Divider className="-mt-10"></Divider>
                    <div className="p-3">
                      <p className="text-slate-700">
                        <span className="text-green-500 font-semibold">
                          55%
                        </span>
                        than last Weak
                      </p>
                    </div>
                  </div>
                </div>
                <div class="rounded-xl p-6 bg-white shadow-md">
                  <div className="text-right ">
                    <p>Today's Users</p>
                    <h6 className="font-extrabold text-lg">2,300</h6>
                  </div>

                  <div className=" bg-gradient-to-tr from-pink-600 to-pink-400 w-14 h-14 p-3 rounded-md relative left-3 shadow-2xl  -top-24 lg:relative   text-white text-center ">
                    <div className="">
                      <PersonIcon className="text-center ml-1" />
                    </div>
                  </div>
                  <div className="-mt-10 ">
                    <Divider className="-mt-10"></Divider>
                    <div className="p-3">
                      <p className="text-slate-700">
                        <span className="text-green-500 font-semibold">
                          +3%
                        </span>
                        than last Month
                      </p>
                    </div>
                  </div>
                </div>
                <div class=" rounded-xl p-6 bg-white shadow-md">
                  <div className="text-right ">
                    <p>New Client</p>
                    <h6 className="font-extrabold text-lg">3,462</h6>
                  </div>

                  <div className=" bg-gradient-to-tr from-green-600 to-green-400 w-14 h-14 p-3 rounded-md relative left-3 shadow-2xl  -top-24 lg:relative   text-white text-center ">
                    <div className="">
                      <PersonAddAlt1Icon className="text-center ml-1" />
                    </div>
                  </div>
                  <div className="-mt-10 ">
                    <Divider className="-mt-10"></Divider>
                    <div className="p-3">
                      <p className="text-slate-700">
                        <span className="text-red-500 font-semibold">-2%</span>
                        than yesterday
                      </p>
                    </div>
                  </div>
                </div>
                <div class=" rounded-xl p-6 bg-white shadow-md">
                  {" "}
                  <div className="text-right ">
                    <p>Sales</p>
                    <h6 className="font-extrabold text-lg">$103,430</h6>
                  </div>
                  <div className=" bg-gradient-to-tr from-orange-600 to-orange-400 w-14 h-14 p-3 rounded-md relative left-3 shadow-2xl  -top-24 lg:relative   text-white text-center ">
                    <div className="">
                      <BarChartIcon className="text-center ml-1" />
                    </div>
                  </div>
                  <div className="-mt-10 ">
                    <Divider className="-mt-10"></Divider>
                    <div className="p-3">
                      <p className="text-slate-700">
                        <span className="text-green-500 font-semibold">
                          +5%
                        </span>
                        than yesterday
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mx-auto ml-6">
            <div className="relative -top-[32rem] left-72 lg:left-3  md:left-3  sm:left-3  xs:left-3 lg:-top-[78rem] md:-top-[70rem] sm:-top-[120rem] xs:-top-[100rem]">
              <div className="grid grid-cols-1 gap-6 max-w-7xl 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1   ">
                <div className="bg-white w-96 lg:w-[28rem] sm:w-[36rem]  relative top-16 rounded-2xl sm:ml-14 ">
                  <div className="bg-gradient-to-tr from-blue-600 to-blue-400  w-80  h-64  relative -top-7 left-7 lg:ml-10  rounded-2xl  sm:ml-20">
                    <ResponsiveContainer
                      width="80%"
                      aspect={1}
                      className="relative sm:w-1/2"
                    >
                      <BarChart width={730} height={250} data={adata}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip
                          content={<CustomTooltip1 />}
                          wrapperStyle={{
                            backgroundColor: "black",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            opacity: 1,
                          }}
                        />
                        <Legend />
                        <Bar dataKey="day" fill="white" />
                        <Bar dataKey="view" fill="white" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="px-3 mb-4 -mt-3 ml-5 m-2">
                    <h1 className="text-lg font-semibold"> Website view</h1>
                    <p className="text-slate-500">Last Compaingn Performance</p>
                  </div>
                  <Divider></Divider>
                  <div className="p-2 ml-5 m-2">
                    <p className="text-slate-500">
                      <AccessTimeIcon />
                      Compaingn sent 2 days ago
                    </p>
                  </div>
                </div>
                <div className="bg-white w-96  lg:w-[28rem] sm:w-[36rem]  relative top-16 rounded-2xl sm:ml-14">
                  <div className="bg-gradient-to-tr from-pink-600 to-pink-400  w-80 h-64 relative -top-7 left-7 rounded-2xl  lg:ml-10  sm:ml-20 ">
                    <ResponsiveContainer
                      width="80%"
                      aspect={1}
                      className="relative "
                    >
                      <LineChart
                        // width={730}
                        // height={250}
                        data={pdata}
                        margin={{ top: 5, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                          content={<CustomTooltip />}
                          wrapperStyle={{
                            backgroundColor: "black",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            opacity: 1,
                          }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="month"
                          stroke="white"
                          activeDot={{ r: 10 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="sales"
                          stroke="white"
                          activeDot={{ r: 10 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="px-3 mb-4 -mt-3 ml-5 m-2">
                    <h1 className="text-lg font-semibold"> Website view</h1>
                    <p className="text-slate-500">Last Compaingn Performance</p>
                  </div>
                  <Divider></Divider>
                  <div className="p-2 ml-5 m-2">
                    <p className="text-slate-500">
                      <AccessTimeIcon />
                      Compaingn sent 2 days ago
                    </p>
                  </div>
                </div>
                <div className="bg-white w-96  lg:w-[28rem] sm:w-[36rem]  relative top-16 rounded-2xl sm:ml-14">
                  <div className="bg-gradient-to-tr from-green-600 to-green-400  w-80 h-64 relative -top-7 left-7 rounded-2xl  lg:ml-10  sm:ml-20 ">
                    <ResponsiveContainer
                      width="80%"
                      aspect={1}
                      className="relative "
                    >
                      <LineChart
                        // width={730}
                        // height={250}
                        data={pdata}
                        margin={{ top: 5, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                          content={<CustomTooltip />}
                          wrapperStyle={{
                            backgroundColor: "black",
                            color: "white",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            opacity: 1,
                          }}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="month"
                          stroke="white"
                          activeDot={{ r: 10 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="sales"
                          stroke="white"
                          activeDot={{ r: 10 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="px-3 mb-4 -mt-3 ml-5 m-2">
                    <h1 className="text-lg font-semibold"> Website view</h1>
                    <p className="text-slate-500">Last Compaingn Performance</p>
                  </div>
                  <Divider></Divider>
                  <div className="p-2 ml-5 m-2">
                    <p className="text-slate-500">
                      <AccessTimeIcon />
                      Compaingn sent 2 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative left-72 -top-[26rem] lg:left-3  md:left-3  sm:left-3  xs:left-3 lg:-top-[72rem] md:-top-[65rem] sm:-top-[115rem] xs:-top-[100rem]">
            <div className="mx-auto ml-6">
              <div className="grid grid-cols-1 max-w-[75rem] max-h-80  2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4 ">
                <div className="col-span-2 shadow-md rounded-xl bg-white xs:col-span-1">
                  <div className="p-2 ml-4 mt-5 flex justify-between">
                    <ul className="list-none">
                      <li className="text-lg font-bold">Project</li>
                      <li className=" text-slate-500">
                        <CheckIcon className="text-blue-500" />
                        <span className="font-bold p-1 text-slate-500">
                          30 done
                        </span>
                        this month
                      </li>
                    </ul>
                    <div className="">
                      <div>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            "aria-labelledby": "long-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: "20ch",
                            },
                          }}
                        >
                          {options.map((option) => (
                            <MenuItem
                              key={option}
                              selected={option === "Pyxis"}
                              onClick={handleClose}
                            >
                              {option}
                            </MenuItem>
                          ))}
                        </Menu>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col">
                    <div class="  sm:-mx-6 lg:-mx-8">
                      <div class="py-4 inline-block sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                          <table class=" text-center">
                            <thead class="border-b bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4"
                                >
                                  CAMPANIES
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4"
                                >
                                  MEMBERS
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4"
                                >
                                  BUDGES
                                </th>
                                <th
                                  scope="col"
                                  class="text-sm font-medium text-gray-900 px-6 py-4"
                                >
                                  CAMPLATIONS
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr class="bg-white border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex">
                                  <img
                                    src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-xd.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Material XD version
                                  </p>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <AvatarGroup max={4}>
                                    <Avatar
                                      alt="Remy Sharp"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                                      className="w-3 h-3"
                                    />
                                    <Avatar
                                      alt="Travis Howard"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                      className="w-3 h-3"
                                    />
                                    <Avatar
                                      alt="Cindy Baker"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                                      className="w-3 h-3"
                                    />
                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                      className="w-3 h-3"
                                    />
                                  </AvatarGroup>
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  $14,000
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  60%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-blue-500 rounded-xl w-3/5 h-1  text-xs"></div>
                                  </div>
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex">
                                  <img
                                    src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-atlassian.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Add Process Track
                                  </p>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <AvatarGroup max={4}>
                                    <Avatar
                                      alt="Travis Howard"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                      className="w-3 h-3"
                                    />

                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                      className="w-3 h-3"
                                    />
                                  </AvatarGroup>
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  $3,000
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  10%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-blue-500 rounded-xl w-1/12 h-1  text-xs"></div>
                                  </div>
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex">
                                  <img
                                    src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-slack.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Fix Platform Error
                                  </p>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <AvatarGroup max={4}>
                                    <Avatar
                                      alt="Travis Howard"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                      className="w-3 h-3"
                                    />

                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                      className="w-3 h-3"
                                    />
                                  </AvatarGroup>
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  Not set
                                </td>
                                <td class="text-sm text-slate-500 font-light px-6 py-4 whitespace-nowrap">
                                  100%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-green-500 rounded-xl w-full h-1  text-xs"></div>
                                  </div>
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex">
                                  <img
                                    src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-spotify.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Launch Our Mobile App
                                  </p>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <AvatarGroup max={4}>
                                    <Avatar
                                      alt="Remy Sharp"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-1.jpeg"
                                      className="w-3 h-3"
                                    />
                                    <Avatar
                                      alt="Travis Howard"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-2.jpeg"
                                      className="w-3 h-3"
                                    />
                                    <Avatar
                                      alt="Cindy Baker"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                                      className="w-3 h-3"
                                    />
                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                      className="w-3 h-3"
                                    />
                                  </AvatarGroup>
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  $20,500
                                </td>
                                <td class="text-sm text-slate-500 font-light px-6 py-4 whitespace-nowrap">
                                  100%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-green-500 rounded-xl w-full h-1  text-xs"></div>
                                  </div>
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex">
                                  <img
                                    src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-jira.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Add the New Pricing Page
                                  </p>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <AvatarGroup max={4}>
                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                      className="w-3 h-3"
                                    />
                                  </AvatarGroup>
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  $500
                                </td>
                                <td class="text-sm text-slate-500 font-light px-6 py-4 whitespace-nowrap">
                                  25%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-blue-500 rounded-xl w-1/4 h-1  text-xs"></div>
                                  </div>
                                </td>
                              </tr>
                              <tr class="bg-white border-b">
                                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex">
                                  <img
                                    src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/logo-invision.svg"
                                    className="w-10 h-10"
                                  ></img>
                                  <p className="mt-2 font-bold">
                                    Redesign New Online Shop
                                  </p>
                                </td>
                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <AvatarGroup max={4}>
                                    <Avatar
                                      alt="Agnes Walker"
                                      src="	https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-4.jpeg"
                                      className="w-3 h-3"
                                    />
                                    <Avatar
                                      alt="Cindy Baker"
                                      src="https://demos.creative-tim.com/material-tailwind-dashboard-react/img/team-3.jpeg"
                                      className="w-3 h-3"
                                    />
                                  </AvatarGroup>
                                </td>
                                <td class="text-sm text-slate-500  font-light px-6 py-4 whitespace-nowrap">
                                  $2000
                                </td>
                                <td class="text-sm text-slate-500 font-light px-6 py-4 whitespace-nowrap">
                                  40%
                                  <div className="bg-slate-100 rounded-xl border-solid">
                                    <div className="bg-blue-500 rounded-xl w-2/5 h-1  text-xs"></div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" col-span-1 md:col-span-2 lg:col-span-2 sm:col-span-2 shadow-md rounded-xl bg-white p-9">
                 
                 <div className="p-2 ml-4 mt-5 flex justify-between">
                    <ul className="list-none">
                      <li className="text-md font-bold">Order Overview</li>
                      <li className=" text-slate-500">
                        <ArrowUpwardIcon className="text-green-500" />
                        <span className="font-bold p-1 text-slate-500">
                         24%
                        </span>
                        this month
                      </li>
                    </ul>
                   
                  </div>
                  <div className="p-2 ml-4 mt-5 flex ">
                      <NotificationsIcon className="text-green-500 mt-2"/>
                    <ul className="list-none">
                  
                      <li className="text-sm font-bold">$2400 Design Changes</li>
                      <li className=" text-slate-500 text-sm">
                        
                        
                       22 DEC 7:20PM
                      </li>
                    </ul>
                     
                  </div>
                  <div className="p-2 ml-7 -mt-3">
                    <div className="h-6 w-1 bg-slate-200 rounded-xl"></div>
                  </div>
                  <div className="p-2 ml-4 -mt-3 flex ">
                      <AddCircleIcon className="text-red-500 mt-2 text-sm"/>
                    <ul className="list-none">
                  
                      <li className="text-sm  font-bold">New Order#1832412</li>
                      <li className=" text-slate-500 text-sm">
                        
                        
                       21 DEC 11PM
                      </li>
                    </ul>
                     
                  </div>
                  <div className="p-2 ml-7 -mt-4">
                    <div className="h-6 w-1 bg-slate-200 rounded-xl"></div>
                  </div>
                     <div className="p-2 ml-4 -mt-3 flex ">
                      <ShoppingCartIcon className="text-blue-500 mt-2 text-sm"/>
                    <ul className="list-none">
                  
                      <li className="text-sm  font-bold">Servers payments of April</li>
                      <li className=" text-slate-500 text-sm">
                        
                        
                       21 DEC 9:34PM
                      </li>
                    </ul>
                     
                  </div>
                  <div className="p-2 ml-7 -mt-4">
                    <div className="h-6 w-1 bg-slate-200 rounded-xl"></div>
                  </div>
                    <div className="p-2 ml-4 -mt-3 flex ">
                      <CreditCardIcon  className="text-orange-500 mt-2 text-sm"/>
                    <ul className="list-none">
                  
                      <li className="text-sm  font-bold">New Card added for Order#1832412</li>
                      <li className=" text-slate-500 text-sm">
                        
                        
                       20 DEC 2:20AM
                      </li>
                    </ul>
                     
                  </div>
                <div className="p-2 ml-7 -mt-4">
                    <div className="h-6 w-1 bg-slate-200 rounded-xl"></div>
                  </div>
                     <div className="p-2 ml-4 -mt-3 flex ">
                      <NoEncryptionGmailerrorredIcon   className="text-red-900 mt-2 text-sm"/>
                    <ul className="list-none">
                  
                      <li className="text-sm  font-bold">Unlock package for developments</li>
                      <li className=" text-slate-500 text-sm">
                        
                        
                       18 DEC 4:56AM
                      </li>
                    </ul>
                     
                  </div>
                  <div className="p-2 ml-7 -mt-4">
                    <div className="h-6 w-1 bg-slate-200 rounded-xl"></div>
                  </div>
                     <div className="p-2 ml-4 -mt-3 flex ">
                      <CameraAltIcon   className="text-black mt-2 text-sm"/>
                    <ul className="list-none">
                  
                      <li className="text-sm  font-bold">New order #76867868</li>
                      <li className=" text-slate-500 text-sm">
                        
                        
                       17 DEC
                      </li>
                    </ul>
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <div className="relative  -mt-24 lg:-top-10  ">
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
