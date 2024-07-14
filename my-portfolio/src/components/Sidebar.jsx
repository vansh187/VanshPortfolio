import React, { useState } from "react";
import Icon from "../Images/vansh_po.JPG";
import Profile from "../Images/vansh_po.JPG";
import Dashboard from "../Images/dashboard.svg";
import Transactions from "../Images/transactions.svg";
import Performance from "../Images/performance.svg";
import News from "../Images/news.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { useLocation } from "react-router-dom";
import { CIcon } from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { BsFilePerson, BsFiletypeXlsx } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { FcAbout } from "react-icons/fc";
import { LiaBlogger } from "react-icons/lia";
import { MdOutlineSupport } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
const Sidebar = () => {
    const location = useLocation();

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
            >
                <img  className="circular--square" />
               <center><h2 className="title">Portfolio </h2></center> 
            </div>
            <div
                className={
                    closeMenu === false
                        ? "burgerContainer"
                        : "burgerContainer active"
                }
            >
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "profileContainer"
                        : "profileContainer active"
                }
            >
                <img src={Profile} alt="profile" className="circular--square" />
                <div className="profileContents">
                    <p className="name">Hello, Vansh Duggal</p>
                    <p>vanshduggal37@gmail.com</p>
                </div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}>
                    <FcAbout />
                        <a href="/About">About</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/About"
                                ? "active"
                                : ""
                        }
                    >
                        
                        <GoProject />
                        <a href="/Projects">Projects</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/Projects" ? "active" : ""
                        }
                    >
                       <BsFilePerson  />
                        <a href="/Contact">Contact</a>
                    </li>
                    <li>
                        <RxDashboard/>
                        <a href="/DashBoard">DashBoard</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/Dashboard" ? "active" : ""
                        }
                    >
                       
                       <LiaBlogger/>
                        <a href="/Blogs">Blogs</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/Blogs" ? "active" : ""
                        }
                    >
                        <MdOutlineSupport />
                        <a href="/support">support</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/Support" ? "active" : ""
                        }
                    ></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
