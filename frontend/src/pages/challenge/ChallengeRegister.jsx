import { motion } from "framer-motion";
import { Box, Grid, Text } from "grommet";
import React, { useEffect, useState } from "react";
import plus from "../../assets/icons/plusIcon.svg";
import gallery from "../../assets/icons/galleryIcon.svg";
import { StyledInput } from "../../components/common/TextInput";
import Button from "../../components/Button";
import { challengeRegisterApi } from "../../apis/challengeApi";
import { Calendar } from "react-date-range";
import * as locales from "react-date-range/dist/locale";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import styled from "styled-components";
import calendarButton from "../../assets/icons/calendar.png";
import { challengeIngListAPi } from "../../apis/memberChallengeApi";
import { useNavigate } from "react-router-dom";


const LoginModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
    -ms-overflow-style: none;
  &::-webkit-scrollbar{
    display: none;
  }
`;

export const ChallengeRegister = () => {
  const [profile, setProfile] = useState("");
  const [image, setImage] = useState("");
  const [locale, setLocale] = React.useState("ko");
  const [date, setDate] = useState(new Date());
  const [showCalender, setShowCalender] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [goal, setGoal] = useState("");
  const [endDate, setEndDate] = useState("");
  const [myType, setMyType] = useState([]);

  const WantUpdateProfile = (e) => {
    let file = e.target.files[0];
    let fileURL;
    let reader = new FileReader();
    reader.onload = () => {
      fileURL = reader.result;
      setProfile(fileURL);
    };
    reader.readAsDataURL(file);
    setImage(file);
  };

  const navigate = useNavigate();
  const changeType = (str) => {
    if (myType.includes(str)) {
      alert("?????? ?????? ????????? ???????????? ????????? ????????????.");
    } else {
      console.log(str);
      setType(str);
    }
  };

  const challengeRegister = () => {
    //????????? ??????
    if (name && type && goal && endDate) {
      //api????????? ?????? formData??????
      const formData = new FormData();
      let valueGoal;
      //user ?????? ?????????
      if (type == "DISTANCE") {
        valueGoal = Number(goal * 1000);
      } else if (type == "TIME") {
        valueGoal = Number(goal * 60 * 60);
      }
      const request = JSON.stringify({
        title: name,
        type: type,
        goal: valueGoal,
        endDate: endDate,
      });
      console.log(request);
      //????????? ?????? ???????????? formData??? ??????      
      formData.append("image", image);

      //user?????? formdata??? ??????
      const blob = new Blob([request], {
        type: "application/json",
      });
      formData.append("request", blob);
      challengeRegisterApi(formData, (res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      })
      navigate("/challenge/list")
    } else {
      alert('?????? ????????? ??????????????????');
    }
  }

  const endDatechoice = (item) => {
    setDate(item);
    setShowCalender(!showCalender);
    const year = item.getFullYear(item);
    const month =
      item.getMonth(item) + 1 < 10
        ? "0" + (item.getMonth(item) + 1)
        : item.getMonth(item) + 1;
    const date =
      item.getDate(item) < 10 ? "0" + item.getDate(item) : item.getDate(item);
    setEndDate(`${year}-${month}-${date}`);
  };

  useEffect(() => {
    challengeIngListAPi((res) => {
      console.log(res);
      for (let i = 0; i < res.data.length; i++) {
        setMyType((prev) => [...prev, res.data[i].type])
        console.log(myType);
      }
    }, (err) => {
      console.log(err);
    })
  }, [])
  return (
    <motion.div style={{ minHeight: "88vh" }}>
      {/* ?????? ?????? ?????? */}
      <Box justify="center" align="center">
        {profile === "" ? (
          <label htmlFor="image" style={{ width: "100%" }}>
            <Box
              height="250px"
              width="100%"
              background={{ color: "rgb(206,206,206)" }}
              justify="center"
              align="center"
            >
              <Text size="14px" weight={500} color="#565656" margin="10px">
                ?????? ?????? ????????????
              </Text>
              <img src={plus} width="20px" height="20px" alt="????????? ??????" />
              <input
                id="image"
                type="file"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={(e) => WantUpdateProfile(e)}
                style={{
                  display: "none",
                }}
              />
            </Box>
          </label>
        ) : (
          <Box height="280px" width="100%" justify="center" align="center">
            <img
              src={profile}
              height="250px"
              width="100%"
              alt="?????? ??????"
              style={{ objectFit: "cover" }}
            />
            <label htmlFor="image" style={{ alignSelf: "start" }}>
              <Text size="14px" weight={500} color="#565656" margin="10px">
                ?????? ?????? ????????????
              </Text>
              <img src={gallery} width="15px" height="15px" alt="????????? ??????" />
            </label>
            <input
              id="image"
              type="file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={(e) => WantUpdateProfile(e)}
              style={{
                display: "none",
              }}
            />
          </Box>
        )}
        {/* ????????? ?????? */}
        <Box
          direction="column"
          pad="30px 24px"
          width="100%"
          justify="around"
          align="center"
          height={{ min: "450px" }}
        >
          <Grid
            width="90%"
            rows={["60px", "60px", "60px", "60px"]}
            columns={["1/3", "2/3"]}
            gap="0"
            areas={[
              { name: "name", start: [0, 0], end: [0, 0] },
              { name: "namedata", start: [1, 0], end: [1, 0] },
              { name: "type", start: [0, 1], end: [0, 1] },
              { name: "typedata", start: [1, 1], end: [1, 1] },
              { name: "goal", start: [0, 2], end: [0, 2] },
              { name: "goaldata", start: [1, 2], end: [1, 2] },
              { name: "endDate", start: [0, 3], end: [0, 3] },
              { name: "endDateData", start: [1, 3], end: [1, 3] },
            ]}
          >
            <Box gridArea="name" justify="center" align="start">
              <Text weight={500} size="16px">
                ????????? ??????
              </Text>
            </Box>
            <Box gridArea="namedata" justify="center" align="start">
              <StyledInput
                placeholder="????????? ????????? ???????????????."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                padding="0px"
                margin="0px"
                style={{ fontSize: "16px" }}
              />
            </Box>
            <Box gridArea="type" justify="center" align="start">
              <Text weight={500} size="16px">
                ????????? ??????
              </Text>
            </Box>
            <Box
              gridArea="typedata"
              justify="between"
              align="center"
              direction="row"
              width="80%"
            >
              <Text
                weight={500}
                size="16px"
                style={{
                  color: `${type === "DISTANCE" ? "#00853B" : "#7E7E7E"}`,
                }}
                onClick={(e) => changeType("DISTANCE")}
              >
                ??????
              </Text>
              <Text
                weight={500}
                size="16px"
                style={{ color: `${type === "PLOGGING_CNT" ? "#00853B" : "#7E7E7E"}` }}
                onClick={(e) => changeType("PLOGGING_CNT")}
              >
                ??????
              </Text>
              <Text
                weight={500}
                size="16px"
                style={{ color: `${type === "TIME" ? "#00853B" : "#7E7E7E"}` }}
                onClick={(e) => changeType("TIME")}
              >
                ??????
              </Text>
            </Box>
            <Box gridArea="goal" justify="center" align="start">
              <Text weight={500} size="16px">
                ??????
              </Text>
            </Box>
            <Box
              gridArea="goaldata"
              justify="start"
              align="center"
              direction="row"
            >
              <StyledInput
                placeholder="0"
                value={goal}
                onChange={(e) => {
                  setGoal(e.target.value);
                }}
                width="30px"
                padding="0px"
                margin="0px"
              />

              {(type === "DISTANCE" || type === "") && (
                <Text weight={500} size="16px">
                  Km
                </Text>
              )}
              {type === "PLOGGING_CNT" && (
                <Text weight={500} size="16px">
                  ???
                </Text>
              )}
              {type === "TIME" && (
                <Text weight={500} size="16px">
                  ??????
                </Text>
              )}
            </Box>
            <Box gridArea="endDate" justify="center" align="start">
              <Text weight={500} size="16px">
                ??????
              </Text>
            </Box>
            <Box gridArea="endDateData" justify="center" align="start">
              <Box direction="row" justify="between" align='center' width='100%'>

                {endDate}
                <img src={calendarButton} alt="?????? ??????" onClick={() => {
                  setShowCalender(!showCalender);
                  setDate(date);
                }}
                  width="20px"
                />
              </Box>
            </Box>
            {showCalender && ( // ?????? ????????? ???????????? ?????? true ??? ?????? ????????? ????????????
              <LoginModalStyled>
                <div style={{ display: "flex", flexFlow: "column nowrap", position: "absolute" }}>
                  <Calendar
                    onChange={(item) => {
                      endDatechoice(item);
                    }}
                    locale={locales[locale]}
                    date={date}
                    style={{ width: "300px" }}
                    color="#ccaa90"
                  />
                </div>
              </LoginModalStyled>
            )}
          </Grid>

          <Button biggreenround="true" onClick={challengeRegister}>????????? ??????</Button>
        </Box>
      </Box>
    </motion.div>
  );
};
