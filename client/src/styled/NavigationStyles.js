import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.div`
  background-color: rgba(37, 38, 39, 0.3);
  width: 100%;
  text-align: left;
  display: flex;
  justify-content: space-between;
  padding: 18px 20px 20px 20px;
`;

export const Logo = styled.div`
  color: #252627;
  font-size: 2.5rem;
  text-shadow: #ebebeb 1px 1px 0;
  font-family: "Ubuntu";
  font-weight: 700;
  span:first-child {
    color: #0c93d3;
  }
`;

export const HeaderLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Metadata = styled.div`
  width: 50%;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  p {
    margin-top: 0px;
  }
  span {
    font-weight: bold;
  }
`;

const ButtonStyles = `
  border-radius: 4px;
  padding: 10px 20px;
  background-color: #0c93d3;
  font-size: 16px;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`;

export const DashboardLink = styled(Link)`
  ${ButtonStyles};
  display: inline-block;
`;

export const LogoutButton = styled.button`
  ${ButtonStyles};
  outline: none;
`;

export const Name = styled.div`
  color: #252627;
  font-size: 1rem;
  text-shadow: #ebebeb 1px 1px 0;
  font-family: "Ubuntu";
  font-weight: 700;
  span:first-child {
    color: #0c93d3;
  }
`;

/***********Changed Styles**********/
// Header = Background-Color
// Logo = font family and font weight