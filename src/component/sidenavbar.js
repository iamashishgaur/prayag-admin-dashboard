import { BiHomeCircle, BiPieChartAlt, BiFileFind } from "react-icons/bi";
import {
  AiOutlineTeam,
  AiOutlineUserAdd,
  AiOutlineCalendar,
  AiOutlinePieChart,
  
 
} from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";
import { FcViewDetails } from "react-icons/fc";
import { CgProfile } from "react-icons/cg";
import {GrStatusInfo} from 'react-icons/gr'


export const Icons = () => {
  <>
    <BiHomeCircle />
    <BiPieChartAlt />
  </>;
};

export const Sidenavbardata = [
  {
    id: 1,
    navname: "Prayag Team",
    icon: < AiOutlineTeam />,
    path: "",
  },
  {
    id: 2,
    navname: "User Info",
    icon: <CgProfile/>,
    path: "",
  },
  {
    id: 3,
    navname: "Order Invoice",
    icon: <TbFileInvoice/>,
    path: "",
  },{
    id: 4,
    navname: "Profile Create",
    icon: <AiOutlineUserAdd/>,
    path: "",
  },
  {
    id: 5,
    navname: "Order Calender",
    icon: < AiOutlineCalendar/>,
    path: "",
  },
  {
    id: 6,
    navname: "Order Chart",
    icon: <AiOutlinePieChart/>,
    path: "",
  },
  {
    id: 7,
    navname: "Order Details",
    icon: <FcViewDetails/>,
    path: "",
  },
  {
    id: 8,
    navname: "Order Status",
    icon: <GrStatusInfo/>,
    path: "",
  },
];
