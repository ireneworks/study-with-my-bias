import React, { useState } from "react";
import styled from "@emotion/styled";
import { useLocation } from "react-router";
import ReactPlayer from "react-player/youtube";
import { getQuery } from "./utilities/utilities";
import { Controller } from "./components/Controller/Controller";

export default function App() {
  const location = useLocation();
  const [volumeControl, setVolumeControl] = useState(50);
  const query = getQuery(location.search).id;

  return (
    <Container>
      <Controller />
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${query}`}
        volume={volumeControl / 100}
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        config={{
          playerVars: {
            cc_load_policy: 0,
            modestbranding: 1,
            rel: 0,
          },
        }}
      />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
`;
