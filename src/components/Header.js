import React, { useState } from "react";
import Mobile from "./Body/Mobile";
import "./Header.css";

const Header = () => {

  const [isOpen,setIsopen]= useState(false)

  return (
    <div className="Header">
      <nav className="nav">
        <div className="nav-1">
          <span className="material-symbols-outlined">wifi</span>Dazzler
        </div>
        <ul className="nav-2">
          <li className="nav-item dropdown ">
            <a
              className="dropdown-toggle nav-list"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Home
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a
              className=" dropdown-toggle nav-list"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Page
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a
              className=" dropdown-toggle nav-list"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a
              className=" dropdown-toggle nav-list"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <a
              className=" dropdown-toggle nav-list"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Blog
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-list">Contact</li>

          <li className="nav-list">
            <img
              src={require("./images/search.png")}
              className="drop-down-search"
            />
          </li>
          <li className="nav-list">
            <img
              src={require("./images/cart.png")}
              className="drop-down-cart"
            />
          </li>
        </ul>
        <div className="nav-3">
          <div className="contact">
            <span className="material-symbols-outlined phone">add_call</span>{" "}
            +222 (345) 88 99
          </div>
          <button className="contact-btn">Contact Us</button>
          {/* <img src={require("./images/menu.png")} className="menu" /> */}

          <div className="mobile-menu">
          <div className="open-btn" onClick={()=>setIsopen(true)}>
          <span className="material-symbols-outlined">menu</span></div>
          {isOpen&& <Mobile isOpen={isOpen} setIsopen={setIsopen}/>}


        </div>

        </div>

        

      </nav>
    </div>
  );
};

export default Header;
