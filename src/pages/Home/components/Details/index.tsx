import { ImageWithViewer } from "components";

import { GradientSVG, ProgressProvider } from "components";

import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "./styles.scss";

interface IProps {
  data?: {
    src: string;
    date: string;
    time: string;
    probability: number;
  };
}

const Details = ({ data }: IProps) => {
  return data ? (
    <div className="details">
      <div className="theft-photo-container rounded-corners">
        <ImageWithViewer
          src={data?.src as string}
          alt="theft"
          className="theft-photo"
        />
      </div>
      <div className="time-probability">
        <div className="theft-time rounded-corners blurred">
          <span className="theft-date">{data.date}</span>
          <span className="theft-exact-time">{data.time}</span>
          <span className="time-title">Дата і час</span>
        </div>
        <div className="theft-probability rounded-corners blurred">
          <div className="cycle-container">
            <ProgressProvider valueStart={0} valueEnd={data.probability * 100}>
              {(endValue) => (
                <CircularProgressbarWithChildren
                  value={endValue}
                  styles={buildStyles({
                    strokeLinecap: "round",
                    textSize: "16px",
                    pathTransitionDuration: data.probability,
                    trailColor: "#e7ebf033",
                  })}
                  strokeWidth={9}
                >
                  <div className="circular-content">
                    <div className="circular-percent">
                      {data.probability * 100}%
                    </div>
                    <div className="circular-title">Вірогідність крадіжки</div>
                  </div>
                </CircularProgressbarWithChildren>
              )}
            </ProgressProvider>
            <GradientSVG
              startColor="#FF8C21"
              endColor="#FAC74D"
              rotation="250.57deg"
              idCSS="cycle-gradient"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="no-items">
      <span className="nothing-selected">Нічого не обрано</span>
    </div>
  );
};

export default Details;
