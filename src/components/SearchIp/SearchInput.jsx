import {
  InputButton,
  InputSearch,
  InputSearchWrapper,
  SearchIcon,
} from "../../style";
import searchIcon from "../../images/search-normal.png";
import axios from "axios";
import { validateIp } from "../../utils/function-utils";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../../store/todoSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchInput = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const submitHandler = async (event) => {
    event.preventDefault();
    const ip = validateIp(inputRef.current.value);
    console.log(ip);

    if (ip === "Invalid IP") {
      dispatch(todoActions.setSearchData({}));
      toast.error("آی پی وارد شده درست نیست", {
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
    if (ip !== "Invalid IP") {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=at_vv6fPKsbfundwt2hIgblFkEvSqPHu&ipAddress=${inputRef.current.value}`
        );
        const data = await response.data;
        const dataItem = {
          ip: data.ip,
          country: data.location.country,
          city: data.location.city,
          region: data.location.region,
          lat: data.location.lat,
          lng: data.location.lng,
        };
        dispatch(todoActions.setSearchData(dataItem));
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <InputSearchWrapper>
        <InputButton type="submit">
          <img src={searchIcon} />
        </InputButton>
        <InputSearch type="text" ref={inputRef} />
        <SearchIcon src={searchIcon} />
      </InputSearchWrapper>
      <ToastContainer />
    </form>
  );
};

export default SearchInput;
