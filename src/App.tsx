import React, { useState } from "react";
import styled from "@emotion/styled";
import Clock from "react-live-clock";
import { useLocation } from "react-router";
import volumeOnIcon from "./assets/bx-volume-full.svg";
import volumeOffIcon from "./assets/bx-volume-mute.svg";
import chevronUpIcon from "./assets/bxs-chevron-up.svg";
import chevronDownIcon from "./assets/bxs-chevron-down.svg";
import ReactPlayer from "react-player/youtube";
import { css } from "@emotion/react";
import UrlCopy from "./components/urlCopy";
import ArtistCategory from "./components/artistCategory";
import {getQuery} from "./utilities/utilities";
import VolumeController from "./components/volumeController";

export default function App() {
    const location = useLocation();
  const [controllerOpen, setControllerOpen] = useState(true);
  const [volumeControl, setVolumeControl] = useState(50);

  const query = getQuery(location.search).id

  return (
    <Container isControllerOpen={controllerOpen}>
      <aside>
        {controllerOpen ? (
          <div className="main-content-wrapper">
            <header>
              <h1>Biased!</h1>
              <UrlCopy/>
            </header>
            <div className='live-wrapper'>
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
            <ArtistCategory />
            <VolumeController volumeControl={volumeControl} setVolumeControl={setVolumeControl} />
          </div>
        ) : (
          <MinimizedController>
            <h1>
              Study with My Bias
              <span role="img" aria-label="growing heart">
                💗
              </span>
            </h1>
          </MinimizedController>
        )}
        <footer>
          {controllerOpen && (
            <div>
              <ul>
                <li>
                  <a
                    href="https://forms.gle/vFkqj8wUb599xnE16"
                    target="_blank"
                    rel="noreferrer"
                  >
                    나의 최애 요청
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" rel='noreferrer'>문의하기</a>
                </li>
              </ul>
              <p>Biased!는 LifeAt.io를 보고 영감을 받아 만들었습니다.</p>
            </div>
          )}
          <button
            className="minimize-button"
            onClick={() => setControllerOpen(!controllerOpen)}
          />
        </footer>
      </aside>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${query}`}
        volume={volumeControl / 100}
        playing={true}
        loop={true}
        width="100%"
        height="100%"
        config={
            {
                playerVars: {
                    cc_load_policy: 0,
                    modestbranding: 1,
                    rel: 0,
                }}
        }
      />
    </Container>
  );
}

const Container = styled.main<{
  isControllerOpen: boolean;
}>`
  position: relative;
  width: 100%;
  height: 100%;

  aside {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: fixed;
    top: 20px;
    left: 20px;
    box-sizing: border-box;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: -1px -1px 47px -21px rgba(0, 0, 0, 0.5);
    transition: all 0.2s ease-out;

    ${(props) => {
      if (!props.isControllerOpen) {
        return css`
          width: 320px;
          height: 80px;
          padding: 16px 12px;
        `;
      }
      return css`
        bottom: 20px;
        width: 320px;
        padding: 30px 20px;
      `;
    }};

    .main-content-wrapper {
      
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 32px;

        h1 {
          margin: 0;
          font-size: 32px;
          font-weight: 900;
          color: #111111;
          letter-spacing: -0.7px;
        }
      }

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

    footer {
      
      ul {
        display: flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        margin: 0 0 16px 0;
        padding: 0;

        li {

          a {
            margin: 0;
            padding: 6px 10px;
            font-size: 12px;
            font-weight: 700;
            color: #999999;
            letter-spacing: -0.7px;
            background: none;
            border-radius: 4px;
            border: 2px solid #eeeeee;
            text-decoration-line: none;
            cursor: pointer;
          }
        }
      }

      p {
        margin: 0 0 4px 0;
        font-size: 10px;
        color: #999999;
      }

      .minimize-button {
        width: 100%;
        height: 24px;
        margin-top: 12px;
        background: transparent
          url(${(props) =>
            props.isControllerOpen ? chevronUpIcon : chevronDownIcon})
          center / 20px no-repeat;
        border: none;
        border-radius: 4px;
        transition: all 0.2s;
        cursor: pointer;
      }
    }
  }
`;

const MinimizedController = styled.div`
  h1 {
    margin: 0;
    text-align: center;
    font-size: 14px;
    font-weight: 900;
    letter-spacing: -0.2px;
    color: #111111;
  }
`;