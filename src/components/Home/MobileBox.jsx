import { forceOnlyNumberInput } from "../../utils/function-utils";
import {
  Button,
  FlexRowWrapper,
  HomeText,
  HomeTextBlue,
  HomeTextBold,
  Input,
  Logo,
} from "../../style";
import PodroLogo from "../../images/PodroLogo.png";
import { HomeCard } from "../../style";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MobileBox = (props) => {
  const mobileChangeHandler = (event) => {
    forceOnlyNumberInput(event);
    props.setPhoneNumber(event.target.value);
  };

  const btnClickHandler = () => {
    if (props.phoneNumber.length === 11) {
      props.setHomeState("code");
    } else {
      toast.error("شماره همراه باید 11 رقم باشد", {
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
  };

  return (
    <>
      <HomeCard>
        <Logo src={PodroLogo} />
        <div>
          <HomeTextBold>به پنل مدیریت تسک پادرو خوش آمدید</HomeTextBold>
          <HomeText>برای ورود، لطفا شماره موبایل خود را وارد کنید</HomeText>
        </div>
        <Input
          placeholder="شماره موبایل"
          onChange={mobileChangeHandler}
          value={props.phoneNumber}
          maxLength="11"
        />
        <Button onClick={btnClickHandler}>ارسال کد‌ تایید</Button>
        <FlexRowWrapper>
          <HomeTextBlue>ثبت‌نام</HomeTextBlue>
          <HomeText>حساب کاربری ندارید؟</HomeText>
        </FlexRowWrapper>
      </HomeCard>
      <ToastContainer />
    </>
  );
};

export default MobileBox;
