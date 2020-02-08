import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Axios from "axios";
import JournalList from "./journals/JournalList";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Logo } from "../styled/DashStyles";

function Dashboard(props) {
  
  const [journals, setJournals] = useState([]);
  const { user } = useContext(UserContext);

  const upper = journals.filter(item => {
    return item.region === "Upper Body";
  });
  const lower = journals.filter(item => {
    return item.region === "Lower Body";
  });
  const core = journals.filter(item => {
    return item.region === "Core";
  });

  useEffect(() => {
    Axios.get("restricted/journals")
      .then(res => {
        setJournals(
          res.data.journals.filter(item => {
            return item.userId === user.id;
          })
        );
      })
      .catch(err => console.log(err));
  }, [user]);

  return (
    <Container>
      <Logo>
        <span>{user.firstName}</span>
        <span>{user.lastName}</span>
      </Logo>

      <JournalsLogged>
        Journals Logged <div>{journals.length}</div>
      </JournalsLogged>

      <LoggedJournals>Journals by Body Region</LoggedJournals>

      <JournalContainer>
        <StyledRegion>
          Upper Body
          <div>{upper.length}</div>
        </StyledRegion>

        <StyledRegion>
          Lower Body
          <div>{lower.length}</div>
        </StyledRegion>

        <StyledRegion>
          Core
          <div>{core.length}</div>
        </StyledRegion>
      </JournalContainer>

      <Link to={`/newjournal/${user.id}`}>
        <ButtonStyle>Create New Journal</ButtonStyle>
      </Link>
      <div>
        <JournalList journals={journals} setJournals={setJournals} />
      </div>
    </Container>
  );
}

export default Dashboard;

// const user = {
//   created_at: "2019-06-23",
//   email: "admin.gmail.com",
//   id: 1,
//   lastName: "admin",
//   firstName: "admin",
//   username: "admin"
// };

/***********Styles**********/
const ButtonStyle = styled.button`
  height: auto;
  padding: 20px 20px;
  background: #0c93d3;
  margin-bottom: 5%;
  margin-left: 0%;
  width: 40%;
  border-radius: 10px;
  color: #252627;
  font-size: 1.1rem;
  transition: 1s;
  font-family: "Ubuntu";
  Font-weight: 700;
`;

const LoggedJournals = styled.div`
  color: #252627;
  font-size: 1.9rem;
  font-family: "Ubuntu";
  font-weight: 700;
  padding: 10px 0;
  text-shadow: #ffffff 1px 1px 0;
`;
const JournalsLogged = styled.div`
  color: #252627;
  font-size: 1rem;
  font-family: "Ubuntu";
  font-weight: 700;
  text-shadow: #ffffff 1px 1px 0;
  padding: 10px 0;
`;
const JournalContainer = styled.span`
  display: flex;
  justify-content: center;
`;
const StyledRegion = styled.div`
  margin: 2%;
  color: #991c27;
  font-size: 1.8rem;
  font-family: "Ubuntu";
  font-weight: 700;
  text-shadow: #ffffff 1px 1px 0;
`;

const Container = styled.div`
  margin-top: 5%;
  border: 1px solid black;
  box-shadow: 2px 2px 5px;
  border-radius: 5px;
  width: 100%;
`;


/***********Changed Styles**********/
// ButtonStyle = Background-Color
// Styled Region = Font-Size
// Logged Journals = Font-Size