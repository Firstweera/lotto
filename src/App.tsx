import React from "react";
import { ContentContainer, DisplayLotto, Header } from "./components";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <ContentContainer>
        <div className="tw-p-5">
          <Header />
        </div>

        <div className="tw-p-5">
          <DisplayLotto />
        </div>
      </ContentContainer>
    </>
  );
};

export default App;
