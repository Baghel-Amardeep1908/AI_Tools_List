import { useLocation } from "react-router";
import {
  Conntainer,
  Heading,
  TableHeadingRow,
} from "./AIToolsComparisonTableStyling";

const AIToolsComparisonTable = () => {
  const location = useLocation();
  const { state } = location;
  const { aiToolsList } = state;

  return (
    <div>
      <Heading>
        <p>Comparison Table</p>
      </Heading>
      <Conntainer>
        <table>
          <tr>
            <th>AI Models</th>
            <th>Performance</th>
            <th>Capabilities</th>
            <th>Training Data</th>
            <th>Fine Tuning Ability</th>
          </tr>

          {aiToolsList.map((item, index) => {
            return (
              <tr key={index}>
                <td style={{ color: "grey" }}>
                  <strong>{item.name}</strong>
                </td>
                <td>{item.LLM_comparison.performance}</td>
                <td>{item.LLM_comparison.capabilities}</td>
                <td>{item.LLM_comparison.training_data}</td>
                <td>{item.LLM_comparison.fine_tuning_ability}</td>
              </tr>
            );
          })}
        </table>
      </Conntainer>
    </div>
  );
};
export default AIToolsComparisonTable;
