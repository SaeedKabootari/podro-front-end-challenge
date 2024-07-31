import styled from "styled-components";
import BackgroundImg from "../src/images/BackgroundPattern.png";

export const Logo = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 80px;
  height: 36px;
`;

export const Card = styled.div`
  box-shadow: -5px 9px 23px 0px #cfcfcf14;
  border: 1px solid #eaecf0;
  border-radius: 16px;
  padding: 10px;
  background: white;
`;

export const HomeCard = styled(Card)`
  width: 375px;
  padding: 42px 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
`;

export const SearchIpCard = styled(Card)`
  width: 906px;
  padding: 42px 16px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SearchIpTextBold = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  text-align: center;
`;

export const SearchIpText = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 27.2px;
  text-align: center;
  direction: rtl;
  color: #7e838f;
`;

export const HomeTextBold = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #313235;
`;

export const HomeText = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: #7e838f;
`;

export const HomeTextBlue = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #1043a6;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 1px solid #eaecf0;
  border-radius: 5px;
  text-align: right;
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  width: 321px;
`;

export const Button = styled.button`
  background: linear-gradient(255.96deg, #1043a6 0%, #0c317c 100%);
  border: 1px solid #eaecf0;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  width: 343px;
  color: white;
  cursor: pointer;
`;

export const FlexRowWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const FlexRowWrapperSB = styled.div`
  width: 343px;
  display: flex;
  justify-content: space-between;
`;

export const FlexRowWrapperCenter = styled.div`
  width: 343px;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundImg});
`;

export const InputButton = styled.button`
  background: linear-gradient(255.96deg, #1043a6 0%, #0c317c 100%);
  width: 72px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;

export const InputSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eaecf0;
  border-radius: 10px;
  overflow: hidden;
`;

export const InputSearch = styled.input`
  width: 483px;
  padding-right: 48px;
  padding: 14.5px;
  font-size: 16px;
  font-weight: 500;
  line-height: 27.2px;
  text-align: right;
  border: none;
  outline: none;
  box-shadow: none;
`;

export const SearchIcon = styled.img`
  padding: 16px;
  padding-left: 8px;
`;

export const BackArrow = styled.img`
  position: absolute;
  top: 50px;
  left: 35px;
`;

export const ReusltCard = styled.div`
  width: 806px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  background: #f6f7f9;
  border-radius: 10px;
`;

export const Info = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const InfoKey = styled.h3`
  font-size: 16px;
  font-weight: 400;
  line-height: 27.2px;
  text-align: center;
  color: #7e838f;
  margin: 0;
`;

export const InfoValue = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 27.2px;
  text-align: center;
  color: #313235;
  margin: 0;
`;

export const MapWrapper = styled.div`
  width: 161px;
  height: 147px;
`;

export const MapImg = styled.img`
  width: 161px;
  height: 147px;
`;
