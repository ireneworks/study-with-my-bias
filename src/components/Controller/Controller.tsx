import Clock from "react-live-clock";
import ArtistsVideos from "./components/artistsVideos";
import VolumeController from "./components/volumeController";
import React, { useState } from "react";
import styled from "@emotion/styled";
import chevronDownIcon from "../../assets/bxs-chevron-down.svg";
import chevronUpIcon from "../../assets/bxs-chevron-up.svg";
import { Header } from "./components/Header";

export function Controller() {
  const [controllerOpen, toggleController] = useState(true);
  const [volumeControl, setVolumeControl] = useState(50);

  const OpenContents = () => (
    <>
      <div className="main-content-wrapper">
        <Header />
        <div className="live-wrapper">
          <Clock
            className="clock-wrapper"
            format="hh:mm:ss A"
            ticking={true}
            timezone="Asia/Seoul"
          />
          <span role="img" aria-label="fire">
            🔥 <strong>1</strong>
          </span>
        </div>
        <ArtistsVideos />
        <VolumeController
          volumeControl={volumeControl}
          setVolumeControl={setVolumeControl}
        />
      </div>
      <p>Biased!는 LifeAt.io를 보고 영감을 받아 만들었습니다.</p>
    </>
  );

  const ClosedContents = () => (
    <>
      <h1>
        Study with My Bias
        <span role="img" aria-label="growing heart">
          💗
        </span>
      </h1>
      <button
        className="maximize-button"
        onClick={() => toggleController(!controllerOpen)}
      />
    </>
  );

  return (
    <Container isControllerOpen={controllerOpen}>
      <Panel>
        {controllerOpen ? <OpenContents /> : <ClosedContents />}
        <ToggleController
          isControllerOpen={controllerOpen}
          onClick={() => toggleController(!controllerOpen)}
        />
      </Panel>
    </Container>
  );
}

const Container = styled.aside<{
  isControllerOpen: boolean;
}>`
  display: ${(props) => (props.isControllerOpen ? "flex" : "none")};
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  top: 20px;
  left: 20px;
  bottom: 20px;
  width: 320px;
  padding: 30px 20px;
  box-sizing: border-box;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: -1px -1px 47px -21px rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
  z-index: 2;

  .main-content-wrapper {
    div.live-wrapper {
      display: flex;
      justify-content: space-between;

      .clock-wrapper {
        display: inline-block;
        color: #555555;
        font-size: 16px;
        font-weight: 600;
      }

      span {
        font-size: 16px;
        color: #555555;
        letter-spacing: -0.5px;
      }
    }
  }
`;

const Panel = styled.div`
  p {
    margin: 0 0 4px 0;
    font-size: 10px;
    color: #999999;
  }
`;

const ToggleController = styled.button<{ isControllerOpen: boolean }>`
  width: 100%;
  height: 24px;
  margin-top: 12px;
  background: transparent
    url(${({ isControllerOpen }) =>
      isControllerOpen ? chevronUpIcon : chevronDownIcon})
    center / 20px no-repeat;
  border: none;
  transition: all 0.2s;
  cursor: pointer;
`;
