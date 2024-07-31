import { BackgroundContainer } from "../../style";
import SearchBox from "./SearchBox";
import { getCookie } from "react-use-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchIp = () => {
  const navigate = useNavigate();
  const authToken = getCookie("authToken");
  console.log(authToken);

  useEffect(() => {
    if (authToken === undefined || authToken === "") {
      navigate("/");
    }
  }, [authToken]);
  return (
    <BackgroundContainer>
      <SearchBox />
    </BackgroundContainer>
  );
};

export default SearchIp;
