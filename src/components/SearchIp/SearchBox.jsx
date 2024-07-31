import { SearchIpCard, SearchIpText, SearchIpTextBold } from "../../style";
import SearchInput from "./SearchInput";
import SearchResultCart from "./SearchResultCart";
import { useSelector } from "react-redux";

const SearchBox = () => {
  const data = useSelector((state) => state.todo.searchData);

  return (
    <>
      <SearchIpCard data-aos="fade-up">
        <div data-aos="fade-up">
          <SearchIpTextBold>آی پی مد نظر خود را پیدا کنید</SearchIpTextBold>
          <SearchIpText>
            اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید
            با استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا
            کنید. چه باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید،
            سپس روی "دریافت جزئیات IP" کلیک کنید.
          </SearchIpText>
        </div>
        <SearchInput />
        {Object.keys(data).length !== 0 && <SearchResultCart data={data} />}
      </SearchIpCard>
    </>
  );
};

export default SearchBox;
