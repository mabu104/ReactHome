import React, { useContext, useState, useMemo } from "react";
import { Route, NavLink, BrowserRouter as Router, Routes, Navigate, Link, Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar';
import { UserContext } from '../contexts/UserContext';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaTshirt,
  FaThList,
  FaRegUser
} from "react-icons/fa";
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineSkin,
  AiOutlinePieChart,
  AiOutlineClose
} from "react-icons/ai";

import "./Layout.css"

export const Layout = () => {
  const { state, dispatch } = useContext(UserContext);
  const [logged, setLogged] = useState(state.logged)
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const menuItem = [
    {
      path: "/",
      name: "Trang chủ",
      icon: <AiOutlineHome />
    },
    {
      path: "/order",
      name: "Đơn hàng",
      icon: <AiOutlineAppstore />
    },
    {
      path: "/catalogue",
      name: "Catalogue",
      icon: <AiOutlineSkin />
    },
    {
      path: "/dashboard",
      name: "Báo cáo",
      icon: <AiOutlinePieChart />
    },

    {
      path: "/user",
      name: "Tài khoản",
      icon: <FaRegUser />
    },

  ]
  return (
    (!logged) ? <Navigate to="/login" replace={true} /> :
      <div className="layout-container">
        <SideBar />
        <div className="body-container">
          <div className="appBar">
            <FaBars className="icon-menu" onClick={showSidebar} ></FaBars>
            <h1 className="name-bar">Yaly Couture</h1>
            <div />
          </div>

          <Outlet />
          {(sidebar) ?
            <div className="sidebar-container-show">

              <div className="sidebar-show">
                <div className="appbar-show">
                  <AiOutlineClose className="close-icon" onClick={showSidebar}></AiOutlineClose>
                </div>
                {
                  menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link2" onClick={showSidebar}>
                      <div className="icon2">{item.icon}</div>
                      <div className="link_text2">{item.name}</div>
                    </NavLink>
                  ))
                }
              </div>
            </div>

            : <div></div>}
        </div>
      </div>
  );
};
