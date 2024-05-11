import { useNavigate } from "react-router";
import { AIToolsHomeMainContainer } from "./aiToolsHomeStyling";

const AIToolsHome = () => {
  const navigate = useNavigate();

  const handleAIToolsLists = () => {
    navigate("/home");
  };
  return (
    <AIToolsHomeMainContainer>
      <button onClick={handleAIToolsLists}>
        Click Here To See the AI Tools List
      </button>
    </AIToolsHomeMainContainer>
  );
};
export default AIToolsHome;
