import React from "react";
import styled from "styled-components";
import { PiStudentFill, PiChalkboardTeacherLight } from "react-icons/pi";
import { BsCalendar3 } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./dash-style.css";
import Logo from "../../../public/logo.png";

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container_Menu = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Dash = () => {
  return (
    <Container>
      {/* Logo */}
      <Link to="/">
        <img src={Logo} className="logo" width={150} height={150} alt="" />
      </Link>
      <Container_Menu>
        <Link to="/aluno" className="item-link">
          <PiStudentFill className="icon" />
          <p>Alunos</p>
        </Link>
        <Link className="item-link">
          <PiChalkboardTeacherLight className="icon" />
          <p>Professores</p>
        </Link>
        <Link className="item-link">
          <BsCalendar3 className="icon" />
          <p>Calendário</p>
        </Link>
        <Link className="item-link">
          <IoPeopleSharp className="icon" />
          <p>Turmas</p>
        </Link>
      </Container_Menu>
    </Container>
  );
};

export default Dash;
