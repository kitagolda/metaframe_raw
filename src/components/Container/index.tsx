import { ReactNode } from "react";

import "./styles.scss";

const Container = ({ children }: { children: ReactNode }) => (
  <div className="container">{children}</div>
);
export default Container;
