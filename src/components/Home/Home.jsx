import { Container } from "../../style";
import MobileBox from "./MobileBox";
import VerificationCodeBox from "./VerificationCodeBox";
import { useState } from "react";

const Home = () => {
  const [homeState, setHomeState] = useState("mobileNumber");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <Container>
      {homeState === "mobileNumber" && (
        <MobileBox
          setHomeState={setHomeState}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
        />
      )}
      {homeState === "code" && (
        <VerificationCodeBox
          setHomeState={setHomeState}
          phoneNumber={phoneNumber}
        />
      )}
    </Container>
  );
};

export default Home;
