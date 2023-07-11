import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import ateezLogo from "../../../../assets/ateez_logo.png";
import blackPinkLogo from "../../../../assets/blackpink_logo.svg";
import fromiseNineLogo from "../../../../assets/fromise_logo.svg";
import heartIcon from "../../../../assets/bxs-heart.svg";
import nctLogo from "../../../../assets/NCT-Logo.png";
import svtLogo from "../../../../assets/svt_logo.svg";
import txtLogo from "../../../../assets/txt_logo.svg";
import btsLogo from "../../../../assets/bts_logo.svg";
import sksLogo from "../../../../assets/sks_logo.svg";
import chevronRight from "../../../../assets/bxs-chevron-right.svg";
import chevronLeft from "../../../../assets/bxs-chevron-left.svg";
import shuffleIcon from "../../../../assets/bx-shuffle.svg";
import {
  ATEEZ,
  BLACK_PINK,
  BTS,
  FROMISE_9,
  NCT,
  SEVENTEEN,
  STRAYKIDS,
  TOMORROW_BY_TOGETHER,
} from "../../../../constants/constantArtistNames";
import useArtistRandomVideoReducer from "../../../hooks/useArtistRandomVideoReducer";
import useCurrentArtistVideo from "../../../hooks/useCurrentArtistVideo";
import { getArtistVideoRandomNumber } from "../../../../utilities/utilities";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  CollectionReference,
  DocumentData,
} from "firebase/firestore/lite";
import { db } from "../../../../firebase";
import { Menu } from "./components/Menu";

export default function Category() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLUListElement>(null);
  // const [artistVideos, setArtistVideos] = useState<any>([]);
  const { randomVideoState, onChangeRandomArtistVideos } =
    useArtistRandomVideoReducer();
  const { currentArtistVideoState, onChangeCurrentArtistVideo } =
    useCurrentArtistVideo();

  const isSameArtist = (target: ArtistNames): boolean => {
    return currentArtistVideoState.artist === target;
  };

  const onScrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 110,
      behavior: "smooth",
    });
  };

  const onScrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -110,
      behavior: "smooth",
    });
  };

  // const artistVideosRef = collection(db, "artistVideos");
  //
  // async function test() {
  //   const q = await query(artistVideosRef);
  //   const fetchData = await getDocs(q);
  //   const newData = fetchData.docs.map((doc) => doc.data());
  // }
  // test();

  useEffect(() => {
    navigate(
      `?artist=${currentArtistVideoState.artist}&id=${currentArtistVideoState.videoId}`
    );
  }, [currentArtistVideoState]);

  useEffect(() => {
    const randomNumber = getArtistVideoRandomNumber(
      randomVideoState,
      currentArtistVideoState
    );
    onChangeCurrentArtistVideo(currentArtistVideoState.artist, randomNumber);
  }, [randomVideoState]);

  return (
    <Container>
      <main>
        <ul ref={scrollRef}>
          <Menu
            label="에이티즈"
            value={ATEEZ}
            isSameArtist={isSameArtist}
            onChangeCurrentVideo={onChangeCurrentArtistVideo}
            randomVideoState={randomVideoState}
          />
          <Menu
            label="블랙핑크"
            value={BLACK_PINK}
            isSameArtist={isSameArtist}
            onChangeCurrentVideo={onChangeCurrentArtistVideo}
            randomVideoState={randomVideoState}
          />
          <Menu
            label="NCT"
            value={NCT}
            isSameArtist={isSameArtist}
            onChangeCurrentVideo={onChangeCurrentArtistVideo}
            randomVideoState={randomVideoState}
          />
          <Menu
            label="세븐틴"
            value={SEVENTEEN}
            isSameArtist={isSameArtist}
            onChangeCurrentVideo={onChangeCurrentArtistVideo}
            randomVideoState={randomVideoState}
          />
          <Menu
            label="투모로우바이투게더"
            value={TOMORROW_BY_TOGETHER}
            isSameArtist={isSameArtist}
            onChangeCurrentVideo={onChangeCurrentArtistVideo}
            randomVideoState={randomVideoState}
          />
        </ul>
        <button className="prev-button" onClick={onScrollLeft} />
        <button className="next-button" onClick={onScrollRight} />
      </main>
      <button
        className="random-video"
        onClick={() =>
          onChangeRandomArtistVideos(currentArtistVideoState.artist)
        }
      >
        다른 멤버로 변경
      </button>
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  main {
    ul {
      display: flex;
      gap: 12px;
      margin: 28px 0 20px 0;
      padding: 0;
      overflow-y: hidden;

      ::-webkit-scrollbar {
        display: none;
      }
    }

    button.prev-button {
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 50px;
      padding: 0;
      border: none;
      background: transparent;

      &:hover {
        background: url(${chevronLeft}) left 0 top 60px / 20px no-repeat,
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0) 80%
          );
      }
    }

    button.next-button {
      position: absolute;
      top: 0;
      right: 0;
      width: 40px;
      height: 50px;
      padding: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 80%
      );
      border: none;

      &:hover {
        background: url(${chevronRight}) right 0 top 60px/ 20px no-repeat,
          linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 80%
          );
      }
    }
  }

  button.random-video {
    margin-bottom: 12px;
    padding: 8px 12px 8px 26px;
    background: #ffffff url(${shuffleIcon}) left 0 top 5px / 20px no-repeat;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    color: #888888;
    letter-spacing: -0.3px;
    text-align: left;
  }
`;
