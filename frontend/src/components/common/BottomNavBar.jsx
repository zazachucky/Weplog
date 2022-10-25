import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Challenge from "../../assets/images/challenge.png";
import ChallengeActive from "../../assets/images/challengeActive.png";
import Home from "../../assets/images/home.png";
import HomeActive from "../../assets/images/homeActive.png";
import Rank from "../../assets/images/rank.png";
import Plogging from "../../assets/images/plogging.png";
import RankActive from "../../assets/images/rankActive.png";
import Crew from "../../assets/images/crew.png";
import CrewActive from "../../assets/images/crewActive.png";
import { Box } from "grommet";
import { StyledText } from "../Common";

const NavBarText = ({ text, active }) => {
  return (
    <StyledText
      text={text}
      color={active ? "#57BA83" : "#AEAEAE"}
      size="10px"
    />
  );
};

//NavBar
const NavBarDiv = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  background-color: white;
  max-width: 500px;
  padding: 5px 0px;
  opacity: ${(props) => props.opacity || "1"};
  transition: all 0.35s;
  visibility: ${(props) => props.isShow || "visible"};
  border-top: 1px solid #aeaeae;
`;
const IconButtonStyle = {
  justifyContent: "end",
  alignItems: "center",
};
let lastScrollTop = 0;
let nowScrollTop = 0;
export const NavBar = () => {
  const [show, handleShow] = useState("visible");
  const [opacity, setOpacity] = useState("1");
  const { pathname } = useLocation();
  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (mounted) {
        nowScrollTop = window.scrollY;
        let fixBoxHeight = "50";
        if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
          handleShow("hidden");
          setOpacity("0");
          // console.log("down ", show);
        } else {
          if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
            //Scroll up (하단 고정메뉴 보임)
            handleShow("visible");
            setOpacity("1");
            // console.log("up ", show);
          }
        }
        lastScrollTop = nowScrollTop;
      }
    });

    return () => {
      // window.removeEventListener("scroll", () => { });
      mounted = false;
    };
  }, []);
  return (
    <Box width="100%">
      <NavBarDiv isShow={show} opacity={opacity}>
        <motion.div style={IconButtonStyle} whileTap={{ scale: 1.2 }}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Box justify="end" height="100%" align="center">
              <img
                width="25px"
                height="25px"
                src={pathname === "/" ? HomeActive : Home}
              />
              <NavBarText text="홈" active={pathname === "/" ? true : false} />
            </Box>
          </Link>
        </motion.div>
        <motion.div style={IconButtonStyle} whileTap={{ scale: 1.2 }}>
          <Link to="/challenge/list" style={{ textDecoration: "none" }}>
            <Box justify="end" height="100%" align="center">
              <img
                width="25px"
                height="25px"
                src={
                  pathname === "/challenge/list" ? ChallengeActive : Challenge
                }
              />
              <NavBarText
                text="챌린지"
                active={pathname === "/challenge/list" ? true : false}
              />
            </Box>
          </Link>
        </motion.div>
        <Box width="55px" height="25px"></Box>
        <motion.div
          style={{
            justifyContent: "end",
            alignItems: "center",
            position: "absolute",
            bottom: "0",
          }}
          whileTap={{ scale: 1.2 }}
        >
          <Link to="/plogging/start" style={{ textDecoration: "none" }}>
            <img src={Plogging} width="55px" height="55px" />
          </Link>
        </motion.div>
        <motion.div style={IconButtonStyle} whileTap={{ scale: 1.2 }}>
          <Link to="/rank" style={{ textDecoration: "none" }}>
            <Box justify="end" height="100%" align="center">
              <img
                width="25px"
                height="25px"
                src={pathname === "/rank" ? RankActive : Rank}
              />
              <NavBarText
                text="랭킹"
                active={pathname === "/rank" ? true : false}
              />
            </Box>
          </Link>
        </motion.div>
        <motion.div style={IconButtonStyle} whileTap={{ scale: 1.2 }}>
          <Link to="/crew" style={{ textDecoration: "none" }}>
            <Box justify="end" height="100%" align="center">
              <img
                width="25px"
                height="25px"
                src={pathname === "/crew" ? CrewActive : Crew}
              />
              <NavBarText
                text="크루"
                active={pathname === "/crew" ? true : false}
              />
            </Box>
          </Link>
        </motion.div>
      </NavBarDiv>
    </Box>
  );
};