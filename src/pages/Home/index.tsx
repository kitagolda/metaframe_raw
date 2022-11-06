import { Container, Header } from "components";
import { useState } from "react";

import { Details, History } from "./components";
import "./styles.scss";
import mockCards from "./mockData";

const Home = () => {
  const [selectedCard, setSelectedCard] = useState<number>();

  console.log(selectedCard);

  const handleSelect = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <div className="wrapper">
      <Header />
      <Container>
        <div className="info-grid">
          <Details
            data={
              selectedCard !== undefined ? mockCards[selectedCard] : undefined
            }
          />
          <History
            data={mockCards}
            onCardSelect={handleSelect}
            selectedCard={selectedCard}
          />
        </div>
      </Container>
    </div>
  );
};

export default Home;
