import React from "react";
import { BiCategory, BiWallet } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import { CiCoffeeCup } from "react-icons/ci";
import { TbMail, TbSettings } from "react-icons/tb";
import { MdStorefront } from "react-icons/md";
import avatar from "../Images/avatar.jpg";
import avatar2 from "../Images/avatar2.jpg";
import avatar3 from "../Images/avatar3.png";
import avatar4 from "../Images/avatar4.jpg";
import { IoMdNotifications } from "react-icons/io";

export const productsData = [
  {
    id: 1,
    productName: "Lab Earrings",
    productCategory: "Jewelry",
    productDescription: "Lab Earrings",
    price: "24$",
    qty: "9",
    dateCreated: "27/02/2023",
    status: "Active",
    more: "View",
  },
  {
    id: 2,
    productName: "Apple",
    productCategory: "Jewelry",
    productDescription: "Lab Earrings",
    price: "24$",
    qty: "9",
    dateCreated: "27/02/2023",
    status: "InActive",
    more: "View",
  },
  {
    id: 3,
    productName: "Lab",
    productCategory: "Jewelry",
    productDescription: "Lab Earrings",
    price: "24$",
    qty: "9",
    dateCreated: "27/02/2023",
    status: "Active",
    more: "View",
  },
  {
    id: 4,
    productName: "Digitals",
    productCategory: "Jewelry",
    productDescription: "Lab Earrings",
    price: "24$",
    qty: "9",
    dateCreated: "27/02/2023",
    status: "InActive",
    more: "View",
  },
  {
    id: 5,
    productName: "Stuffs",
    productCategory: "Jewelry",
    productDescription: "Lab Earrings",
    price: "24$",
    qty: "9",
    dateCreated: "27/02/2023",
    status: "InActive",
    more: "View",
  },
  {
    id: 6,
    productName: "Watches",
    productCategory: "Jewelry",
    productDescription: "Lab Earrings",
    price: "24$",
    qty: "9",
    dateCreated: "27/02/2023",
    status: "Active",
    more: "View",
  },
];

export const links = [
  {
    links: [
      {
        name: "Overview",
        icon: <BiCategory />,
        link: "/",
      },
      {
        name: "Store",
        icon: <MdStorefront />,
        link: "/store",
      },
      {
        name: "Orders",
        icon: <FiShoppingCart />,
        link: "/orders",
      },
      {
        name: "Chats",
        icon: <TbMail />,
        link: "/chats",
      },
      {
        name: "Wallet",
        icon: <BiWallet />,
        link: "/wallets",
      },
      {
        name: "Settings",
        icon: <TbSettings />,
        link: "/settings",
      },
    ],
  },
];

export const chatData = [
  {
    image: avatar2,
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: avatar3,
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: avatar4,
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
  {
    image: avatar,
    message: "Jolly completed tasks",
    desc: "Assign her new tasks",
    time: "1:12 AM",
  },
];

export const revenueStats = [
  {
    amount: "39,354",
    percentage: "37%",
    title: "Total Views",
    bgColor: "bg-orange-50",
  },
  {
    amount: "4,396",
    percentage: "37%",
    title: "Total Visits",
    bgColor: "bg-lime-50",
  },
  {
    amount: "423,39",
    percentage: "37%",
    title: "Total Orders",
    bgColor: "bg-emerald-50",
  },
  {
    amount: "39,354",
    percentage: "37%",
    title: "Total Revenue",
    bgColor: "bg-pink-50",
  },
];

export const chartsData = [
  { name: "Monday", uv: 2400, pv: 4000, amt: 2400 },
  { name: "Tuesday", uv: 1300, pv: 3000, amt: 2400 },
  { name: "Wednesday", uv: 9800, pv: 2000, amt: 2400 },
  { name: "Thursday", uv: 3908, pv: 2780, amt: 2400 },
  { name: "Friday", uv: 4800, pv: 1890, amt: 2400 },
  { name: "Saturday", uv: 3800, pv: 2390, amt: 2400 },
  { name: "Sunday", uv: 4300, pv: 3490, amt: 2400 },
];

export const userProfileData = [
  {
    icon: <TbMail />,
    title: "Chat",
  },
  {
    icon: <CiCoffeeCup />,
    title: "Your Orders",
  },
  {
    icon: <TbSettings />,
    title: "Settings",
  },
  {
    icon: <MdStorefront />,
    title: "Switch to sell on dashboard",
  },
];

export const userControlModalData = [
  {
    icon: <TbMail />,
    title: "Messages",
  },
  {
    icon: <IoMdNotifications />,
    title: "Notifications",
  },
];
