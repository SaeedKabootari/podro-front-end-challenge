import { Info, InfoKey, InfoValue, MapImg, ReusltCard } from "../../style";
import mapImg from "../../images/Rectangle.png";

const SearchResultCart = (props) => {
  const { ip, country, city, region, lat, lng } = props.data;
  return (
    <ReusltCard>
      <div>
        <Info>
          <InfoKey>Ip Address:</InfoKey>
          <InfoValue>{ip}</InfoValue>
        </Info>
        <Info>
          <InfoKey>Country:</InfoKey>
          <InfoValue>{country}</InfoValue>
        </Info>
        <Info>
          <InfoKey>Region:</InfoKey>
          <InfoValue>{region}</InfoValue>
        </Info>
        <Info>
          <InfoKey>City:</InfoKey>
          <InfoValue>{city}</InfoValue>
        </Info>
      </div>
      <div>
        <Info>
          <InfoKey>Latitude:</InfoKey>
          <InfoValue>{lat}</InfoValue>
        </Info>
        <Info>
          <InfoKey>Longitude:</InfoKey>
          <InfoValue>{lng}</InfoValue>
        </Info>
      </div>
      <MapImg src={mapImg} />
    </ReusltCard>
  );
};

export default SearchResultCart;
