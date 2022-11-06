import "./styles.scss";

interface IProps {
  index: number;
  data: {
    date: string;
    time: string;
    probability: number;
  };
  isSelected?: boolean;
  onClick: (index: number) => void;
}

const HistoryCard = ({
  index,
  data: { date, time, probability },
  isSelected,
  onClick,
}: IProps) => {
  return (
    <div
      className={`history-item rounded-corners ${
        isSelected && "selected-card"
      }`}
      onClick={() => onClick(index)}
    >
      <span className="item-date-time">{`${date}, ${time}`}</span>
      <span className="item-theft-probability">
        Помічено крадіжку з вірогідністю {probability * 100}%
      </span>
    </div>
  );
};

export default HistoryCard;
