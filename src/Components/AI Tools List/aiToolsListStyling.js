import styled from "styled-components";
import background from "./../../assets/background.jpg";
export const AIToolsLogo = styled.img`
  height: 190px;
  width: 226px;
  border-radius: 15px;
`;

export const MainContainer = styled.div`
display: flex;
width: 98vw;
padding: 40px 7px;
background: url(${background}) no-repeat center center / cover;
}
`;

export const AIToolsWithPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
  padding: 0px 75px 0px 75px;
`;

export const AIToolsCard = styled.div`
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: -4px 4px 8px 2px #000000;
`;

export const AIToolsCardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const AIToolsDisplay = styled.div`
  display: flex;
  gap: 55px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PopularAIToolsMainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 25%;
  border-left: 2px solid silver;
  justify-content: center;
  padding: 10px;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
`;
export const PopularAITools = styled.div`
  padding-bottom: 10px;
`;

export const PaginationStyling = styled.div`
  width: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PaginationMainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  margin-top: 35px;
`;

export const PopularAIToolsCard = styled.div`
  border-radius: 15px;
  box-sizing: border-box;
  box-shadow: -4px 4px 8px 2px #ff8800;
`;

export const PopularAIToolsImage = styled.img`
  height: 90px;
  width: 100px;
  border-radius: 15px;
`;

export const PopularAIToolsCardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
