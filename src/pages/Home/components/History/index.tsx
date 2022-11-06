import HistoryCard from "../HistoryCard";

import "./styles.scss";

interface IProps {
  data: {
    date: string;
    time: string;
    probability: number;
  }[];
  selectedCard?: number;
  onCardSelect: (index: number) => void;
}

const History = ({ data, selectedCard, onCardSelect }: IProps) => {
  return (
    <div className="history">
      <div className="history-header">Історія крадіжок</div>
      <div className="history-list">
        {data.map((item, index) => (
          <HistoryCard
            data={item}
            index={index}
            onClick={() => onCardSelect(index)}
            isSelected={selectedCard === index}
          />
        ))}
      </div>
    </div>
  );
};

export default History;
