import {
  Button,
  FlexRowWrapper,
  FlexRowWrapperSB,
  FlexRowWrapperCenter,
  HomeText,
  HomeTextBlue,
  HomeTextBold,
  Input,
  Logo,
  BackArrow,
} from "../../style";
import PodroLogo from "../../images/PodroLogo.png";
import { Card } from "../../style";
import { HomeCard } from "../../style";
import OtpInput from "react-otp-input";
import React, { useEffect, useState } from "react";
import backIcon from "../../images/arrow-left.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Countdown from "../Countdown";
import { setCookie } from "react-use-cookie";

const VerificationCodeBox = (props) => {
  const [otp, setOtp] = useState("");
  const [timeZero, setTimeZero] = useState(false);
  const [sendAgain, setSendAgain] = useState(false);

  const navigate = useNavigate();

  const changeNumberHandler = () => {
    props.setHomeState("mobileNumber");
  };

  const sendAgainHandler = () => {
    setSendAgain((prevState) => !prevState);
  };

  useEffect(() => {
    if (otp.length === 4 && otp !== "1111") {
      toast.error("کد تایید اشتباه است", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    if (otp === "1111") {
      setCookie("authToken", "1111");
      navigate("/searchIp");
    }
  }, [otp]);

  return (
    <>
      <HomeCard>
        <BackArrow src={backIcon} onClick={changeNumberHandler} />
        <Logo src={PodroLogo} />
        <div>
          <HomeTextBold>کد تایید را وارد کنید</HomeTextBold>
          <HomeText>کد تایید برای شماره {props.phoneNumber} پیامک شد</HomeText>
          <HomeTextBlue onClick={changeNumberHandler}>
            تغییر شماره همراه
          </HomeTextBlue>
        </div>
        <div>
          <FlexRowWrapperCenter>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span> </span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                outline: "none",
                border: "1px solid #eee",
                gap: "4px",
                marginLeft: "10px",
                fontSize: "48px",
                borderRadius: "5px",
              }}
            />
          </FlexRowWrapperCenter>
          <FlexRowWrapperSB>
            <HomeTextBlue onClick={sendAgainHandler}>ارسال مجدد</HomeTextBlue>
            <HomeText>کد را دریافت نکردید؟</HomeText>
          </FlexRowWrapperSB>
        </div>
        <Button onClick={sendAgainHandler}>
          {!timeZero ? "تایید" : "ارسال مجدد"}
        </Button>
        <Countdown
          setTimeZero={setTimeZero}
          timeZero={timeZero}
          sendAgain={sendAgain}
        />
      </HomeCard>
      <ToastContainer />
    </>
  );
};

export default VerificationCodeBox;
