import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;
export const Header = styled.div`
  background-color: rgba(37, 38, 39, 0.3);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`;
export const Logo = styled.div`
  color: #252627;
  font-size: 2.5rem;
  text-shadow: #ffffff 1px 1px 0;
  font-family: "Ubuntu";
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  span:first-child {
    color: #0c93d3;
  }
`;
export const Name = styled.span`
  color: #252627;
  font-size: 3rem;
  font-family: "Lora";
  font-weight: 700;
  text-shadow: #ebebeb 1px 1px 0;
`;
export const UserName = styled.div`
  color: #252627;
  font-size: 2rem;
  font-family: "Ubuntu";
  padding: 10px 0;
`;