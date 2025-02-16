import React from "react";
import styled from "styled-components";
import avatar from '../../img/avatar.jpg';
import { menuItems } from "../../utils/menuItems";
import { signout } from "../../utils/Icons";

const Navigation = ({ active, setActive }) => {
  return (
    <NavStyled>
      <div className="user-con">
        <img src={avatar} alt="User Avatar" />
        <div className="text">
          <span>Sejal Bhole</span>
          <p>Your Money</p>
        </div>
      </div>

      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.id} onClick={() => setActive(item.id)} className={active === item.id ? 'active' : ''}>
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>

      <div className="bottom-nav">
        <ul>
          <li>{signout} Sign Out</li>
        </ul>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      border: 2px solid #ffffff;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }

    .text {
      display: flex;
      flex-direction: column;

      span {
        font-size: 1.2rem;
        font-weight: bold;
        color: rgba(34, 34, 96, 1);
      }

      p {
        color: rgba(34, 34, 96, 0.6);
      }
    }
  }

  .menu-items {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      font-size: 1.1rem;
      cursor: pointer;
      color: rgba(34, 34, 96, 1);
      transition: all 0.3s ease-in-out;
      position: relative; /* Ensures the ::before pseudo-element works */

      &:hover {
        color: #ff647f;
      }
    }
  }

  .bottom-nav {
    margin-top: auto;

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.1rem;
      cursor: pointer;
      color: rgba(34, 34, 96, 1);
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #ff647f;
      }
    }
  }

  .active {
    color: rgba(34, 34, 96, 1);
    font-weight: bold;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
`;

export default Navigation;
