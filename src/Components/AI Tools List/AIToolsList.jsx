import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  AIToolsCard,
  AIToolsCardContent,
  AIToolsDisplay,
  AIToolsLogo,
  AIToolsWithPage,
  MainContainer,
  PopularAITools,
  PopularAIToolsCard,
  PopularAIToolsCardContent,
  PopularAIToolsImage,
  PopularAIToolsMainContainer,
} from "./aiToolsListStyling.js";
import Pagination from "./Pagination.jsx";
import { useNavigate } from "react-router";

const AIToolsList = () => {
  const [aiToolsList, setAiToolsList] = useState([]);
  const navigate = useNavigate();

  ////////////
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  ////////////

  useEffect(() => {
    const fetchingAITools = async () => {
      try {
        const aiList = await axios.get("http://localhost:3000/AI_tools");
        const data = await aiList.data;
        const dataNewID = data.map((item) => {
          item.id = uuid();
          return item;
        });
        console.log("datanew", dataNewID);
        setAiToolsList([...data]);
      } catch (error) {
        alert(error, "Error");
      }
    };
    fetchingAITools();
    return () => {
      aiToolsList.length = 0;
    };
  }, []);

  ////////////////////////////////////////////////
  // Logic to get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = aiToolsList.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  /////////////////////////////////////////////////

  const handleCompareButton = () => {
    navigate("/comparing-tools-table", { state: { aiToolsList: aiToolsList } });
  };

  return (
    <MainContainer>
      <AIToolsWithPage>
        <AIToolsDisplay>
          {currentItems.map((item, index) => {
            const {
              name,
              image,
              link,
              provider,
              description,
              popularity_index,
            } = item;
            console.log(item);
            return (
              <div key={index}>
                <AIToolsCard>
                  <AIToolsLogo src={image} alt="" />
                  <AIToolsCardContent>
                    <h4>{name}</h4>
                    <a href={link}>Click here to open Website</a>
                    <p>
                      <strong>Provider : </strong>
                      {provider}
                    </p>
                  </AIToolsCardContent>
                </AIToolsCard>
              </div>
            );
          })}
        </AIToolsDisplay>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={aiToolsList.length}
          paginate={paginate}
        />
      </AIToolsWithPage>
      <PopularAIToolsMainContainer>
        <div>
          <h3>AI models based on the popularity index</h3>
        </div>
        {aiToolsList.map((item, index) => {
          const { name, image, link, provider, description, popularity_index } =
            item;
          return (
            <PopularAITools>
              {popularity_index > 90 ? (
                <PopularAIToolsCard>
                  <PopularAIToolsImage src={image} alt="" />
                  <PopularAIToolsCardContent>
                    <h4>
                      <a href={link}>{name}</a>
                    </h4>
                    <p>{popularity_index}</p>
                  </PopularAIToolsCardContent>
                </PopularAIToolsCard>
              ) : (
                ""
              )}
            </PopularAITools>
          );
        })}
        <div>
          <button onClick={handleCompareButton}>
            Click Here to compare all AI models
          </button>
        </div>
      </PopularAIToolsMainContainer>
    </MainContainer>
  );
};
export default AIToolsList;
