import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import ateezLogo from "./assets/ateez_logo.png";
import nctLogo from "./assets/NCT-Logo.png";
import blackPinkLogo from "./assets/blackpink_logo.svg";
import fromiseNineLogo from "./assets/fromise_logo.svg";
import txtLogo from "./assets/txt_logo.svg";
import svtLogo from "./assets/svt_logo.svg";
import Clock from "react-live-clock";
import { useLocation, useNavigate } from "react-router";
import volumeOnIcon from "./assets/bx-volume-full.svg";
import volumeOffIcon from "./assets/bx-volume-mute.svg";
import chevronUpIcon from "./assets/bxs-chevron-up.svg";
import chevronDownIcon from "./assets/bxs-chevron-down.svg";
import ReactPlayer from "react-player/youtube";
import qs from "qs";
import { css } from "@emotion/react";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [clipboard, setClipboard] = useState(false);
  const [randomVideo, setRandomVideo] = useState({
    ateez: 0,
    blackPink: 0,
    fromiseNine: 0,
    nct: 0,
    tomorrowByTogether: 0,
    seventeen: 0,
  });
  const [controllerOpen, setControllerOpen] = useState(true);
  const [volumeControl, setVolumeControl] = useState(50);
  const [currentCategory, setCurrentCategory] = useState({
    artist: "ateez",
    videoId: "lgulPsD_JGg",
  });

  const categoryQuery = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      await setClipboard(true);
    } catch (e) {
      console.log(e);
    }
  };

  const randomVideoHandler = () => {
    let result = 0;
    switch (categoryQuery.category) {
      case "ateez":
        result = getRandomNumber(videoId.ateez.length);
        setRandomVideo({ ...randomVideo, ateez: result });
        setCurrentCategory({
          ...currentCategory,
          videoId: videoId.ateez[result],
        });
        break;
      case "blackPink":
        result = getRandomNumber(videoId.blackPink.length);
        setRandomVideo({ ...randomVideo, blackPink: result });
        setCurrentCategory({
          ...currentCategory,
          videoId: videoId.blackPink[result],
        });
        break;
      case "tomorrowByTogether":
        result = getRandomNumber(videoId.tomorrowByTogether.length);
        setRandomVideo({ ...randomVideo, tomorrowByTogether: result });
        setCurrentCategory({
          ...currentCategory,
          videoId: videoId.tomorrowByTogether[result],
        });
        break;
      case "seventeen":
        result = getRandomNumber(videoId.seventeen.length);
        setRandomVideo({ ...randomVideo, seventeen: result });
        setCurrentCategory({
          ...currentCategory,
          videoId: videoId.seventeen[result],
        });
        break;
    }
  };

  // const test = async () => {
  //   try {
  //     const docRef = await addDoc(collection(fireStore, "users"), {
  //       first: "Ada",
  //       last: "Lovelace",
  //       born: 1815,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //     const querySnapshot = await getDocs(collection(fireStore, "users"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // };
  //
  // test();

  useEffect(() => {
    navigate(`?category=${currentCategory.artist}`);
  }, [currentCategory]);

  useEffect(() => {
    setTimeout(() => setClipboard(false), 3500);
  }, [clipboard]);

  return (
    <Container isControllerOpen={controllerOpen} clipboard={clipboard}>
      <aside>
        {controllerOpen ? (
          <div className="main-content-wrapper">
            <header>
              <h1>Biased!</h1>
              <button className="share-button" onClick={onCopy}>
                링크 복사하기
              </button>
              {clipboard && (
                <p>
                  <span role="img" aria-label="clipboard">
                    📋
                  </span>
                  &nbsp; 링크를 복사했어요
                </p>
              )}
            </header>
            <section>
              <Clock
                className="clock-wrapper"
                format="hh:mm:ss A"
                ticking={true}
                timezone="Asia/Seoul"
              />
              <span role="img" aria-label="fire">
                🔥 <strong>1</strong>
              </span>
            </section>
            <ul>
              <Profile
                active={currentCategory.artist === "ateez"}
                backgroundColor="#000000"
                imageSrc={ateezLogo}
              >
                <button
                  onClick={() =>
                    setCurrentCategory({
                      artist: "ateez",
                      videoId: videoId.ateez[randomVideo.ateez],
                    })
                  }
                >
                  <div className="profile-image" />
                  <h2>ATEEZ</h2>
                </button>
              </Profile>
              <Profile
                active={currentCategory.artist === "blackPink"}
                backgroundColor="#000000"
                imageSrc={blackPinkLogo}
              >
                <button
                  onClick={() =>
                    setCurrentCategory({
                      artist: "blackPink",
                      videoId: videoId.blackPink[0],
                    })
                  }
                >
                  <div className="profile-image" />
                  <h2>BLACKPINK</h2>
                </button>
              </Profile>
              <Profile
                active={currentCategory.artist === "fromiseNine"}
                backgroundColor="#38c4f5"
                imageSrc={fromiseNineLogo}
              >
                <button
                  onClick={() =>
                    setCurrentCategory({
                      artist: "fromiseNine",
                      videoId: videoId.fromiseNine[0],
                    })
                  }
                >
                  <div className="profile-image" />
                  <h2>Fromise_9</h2>
                </button>
              </Profile>
              <Profile
                active={currentCategory.artist === "nct"}
                backgroundColor="#ffffff"
                imageSrc={nctLogo}
              >
                <button
                  onClick={() =>
                    setCurrentCategory({
                      artist: "nct",
                      videoId: videoId.nct[0],
                    })
                  }
                >
                  <div className="profile-image" />
                  <h2>NCT</h2>
                </button>
              </Profile>
              <Profile
                active={currentCategory.artist === "seventeen"}
                backgroundColor="#92A8D1"
                imageSrc={svtLogo}
              >
                <button
                  onClick={() =>
                    setCurrentCategory({
                      artist: "seventeen",
                      videoId: videoId.seventeen[0],
                    })
                  }
                >
                  <div className="profile-image" />
                  <h2>SEVENTEEN</h2>
                </button>
              </Profile>
              <Profile
                active={currentCategory.artist === "tomorrowByTogether"}
                backgroundColor="#d4cfbc"
                imageSrc={txtLogo}
              >
                <button
                  onClick={() =>
                    setCurrentCategory({
                      artist: "tomorrowByTogether",
                      videoId: videoId.tomorrowByTogether[0],
                    })
                  }
                >
                  <div className="profile-image" />
                  <h2>TOMORROW X TOGETHER</h2>
                </button>
              </Profile>
            </ul>
            <button className="random-video" onClick={randomVideoHandler}>
              다른 멤버는 어때요?
            </button>
            <VolumeController isVolumeOn={volumeControl} volume={volumeControl}>
              <button onClick={() => setVolumeControl(0)} />
              <input
                type="range"
                min="0"
                max="100"
                value={volumeControl}
                onChange={(e) =>
                  setVolumeControl(Number(e.currentTarget.value))
                }
              />
            </VolumeController>
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
                  <button>문의하기</button>
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
        url={`https://www.youtube.com/watch?v=${currentCategory.videoId}`}
        volume={volumeControl / 100}
        playing={true}
        loop={true}
        width="100%"
        height="100%"
      />
    </Container>
  );
}

const getRandomNumber = (value: number) => {
  return Math.floor(Math.random() * value);
};

const videoId = {
  ateez: [
    "HnNS-70L-4Y",
    "X_v_Nr3Touk",
    "lgulPsD_JGg",
    "9SWUYyJ_u6M",
    "pnXToZ80R9s",
    "PehN7Xke73Q",
    "WHVjFZep7uA",
  ],
  blackPink: ["7er3o_OYhXQ", "ggBu851GQBo"],
  nct: ["oJC7En5uyAU"],
  fromiseNine: ["anvbArGXSEo"],
  tomorrowByTogether: ["qrutwnXCiZI", "1Z7TB5euybA"],
  seventeen: ["RkY28nzTTF0", "OH5gk9meijg", "McI8XRypAEM", "mLyOdRTwDOc"],
};

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

const Container = styled.main<{
  isControllerOpen: boolean;
  clipboard: boolean;
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
          padding: 12px;
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

        button.share-button {
          height: 34px;
          padding: 4px 10px;
          border: 2px solid #dddddd;
          border-radius: 4px;
          background: #ffffff;
          color: #999999;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;

          :hover {
            border: 2px solid #bfbfbf;
            color: #555555;
          }
        }

        p {
          position: absolute;
          top: 65px;
          right: 20px;
          padding: 4px 10px;
          background: #ededed;
          border: 2px solid #eeeeee;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          color: #555555;
          opacity: 0;
          animation: ${(props) =>
            props.clipboard ? "fadeInOut 1.5s ease-in" : "none"};
        }

        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          15% {
            opacity: 100%;
          }
          80% {
            opacity: 80%;
          }
          100% {
            opacity: 0;
          }
        }
      }

      section {
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

      ul {
        display: flex;
        gap: 12px;
        margin: 32px 0 20px 0;
        padding: 0;
        overflow-y: hidden;

        ::-webkit-scrollbar {
          display: none;
        }
      }

      button.random-video {
        width: 100%;
        margin-bottom: 12px;
        padding: 8px 12px 8px 0;
        background: #ffffff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 500;
        color: #888888;
        letter-spacing: -0.3px;
        text-align: left;
        text-decoration-line: underline;
      }
    }

    footer {
      ul {
        display: flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        margin: 0 0 10px 0;
        padding: 0;

        li {
          button {
            padding: 6px 10px;
            font-size: 12px;
            font-weight: 700;
            color: #999999;
            letter-spacing: -0.7px;
            background: none;
            border-radius: 4px;
            border: 2px solid #eeeeee;
            cursor: pointer;
          }
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

  .content-wrapper {
    width: 100%;
    height: 100%;
  }
`;

const Profile = styled.li<{
  active: boolean;
  imageSrc: string;
  backgroundColor: string;
}>`
  list-style: none;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    max-width: 150px;
    min-height: 140px;
    margin: 0;
    padding: 12px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 2px solid ${(props) => (props.active ? "#02c76e" : "#dddddd")};
    background: rgba(
      ${(props) => (props.active ? "2, 199, 110, 0.1" : "255, 255, 255, 1")}
    );
    cursor: pointer;
    
    .profile-image {
      display: inline-block;
      margin: 0 0 12px 0;
      width: 52px;
      height: 52px;
      border-radius: 100px;
      box-sizing: border-box;
      background: ${(props) => props.backgroundColor}
        url(${(props) => props.imageSrc}) center / 34px no-repeat;
      border: ${(props) => {
        if (props.backgroundColor === "#ffffff" && props.active) {
          return "none";
        }
        if (props.backgroundColor === "#ffffff" && !props.active) {
          return "1px solid #dddddd";
        }
        return "none";
      }};
  }
    h2 {
      margin: 0;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.7px;
      color: #111111;
    }
`;

const VolumeController = styled.div<{ isVolumeOn: Number; volume: Number }>`
  display: flex;
  align-items: center;

  button {
    margin-right: 10px;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent
      url(${(props) => (props.isVolumeOn !== 0 ? volumeOnIcon : volumeOffIcon)})
      center / 100% no-repeat;
    cursor: pointer;
    transition: 0.2s;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    background: transparent;

    :focus {
      outline: none;
    }
    
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      margin-top: -5.5px;
      width: 16px;
      height: 16px;
      border-radius: 100px;
      background: #02c76e;
      box-shadow: 0 0 12px -4px rgba(0,0,0,1);
      cursor: pointer;
    }

    ::-webkit-slider-runnable-track {
      height: 6px;
      background: ${(props) =>
        props.volume
          ? `linear-gradient(to right, #02c76e ${props.volume}%, #dddddd ${props.volume}% 100%)`
          : "#E5E7EB"};
      opacity: ${(props) => (props.isVolumeOn !== 0 ? "1" : "0.5")};
      border-radius: 3rem;
      transition: all 0.3s;
      cursor: pointer;
    }
`;
