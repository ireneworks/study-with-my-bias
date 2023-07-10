import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "@emotion/styled";
import ateezLogo from "../../../assets/ateez_logo.png";
import blackPinkLogo from "../../../assets/blackpink_logo.svg";
import fromiseNineLogo from "../../../assets/fromise_logo.svg";
import heartIcon from "../../../assets/bxs-heart.svg";
import nctLogo from "../../../assets/NCT-Logo.png";
import svtLogo from "../../../assets/svt_logo.svg";
import txtLogo from "../../../assets/txt_logo.svg";
import btsLogo from "../../../assets/bts_logo.svg";
import sksLogo from "../../../assets/sks_logo.svg";
import chevronRight from "../../../assets/bxs-chevron-right.svg";
import chevronLeft from "../../../assets/bxs-chevron-left.svg";
import shuffleIcon from "../../../assets/bx-shuffle.svg";
import {
  ATEEZ,
  BLACK_PINK,
  BTS,
  FROMISE_9,
  NCT,
  SEVENTEEN,
  STRAYKIDS,
  TOMORROW_BY_TOGETHER,
} from "../../../constants/constantArtistNames";
import useArtistRandomVideoReducer from "../../hooks/useArtistRandomVideoReducer";
import useCurrentArtistVideo from "../../hooks/useCurrentArtistVideo";
import { getArtistVideoRandomNumber } from "../../../utilities/utilities";
import {
  collection,
  getDocs,
  query,
  doc,
  getDoc,
  CollectionReference,
  DocumentData,
} from "firebase/firestore/lite";
import { db } from "../../../firebase";

export default function ArtistsVideos() {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLUListElement>(null);
  const [artistVideos, setArtistVideos] = useState<any>([]);
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
      {artistVideos.map((v: string | any) => (
        <p>{v.artistName}</p>
      ))}
      <main>
        <ul ref={scrollRef}>
          <ArtistCategory
            isActive={isSameArtist(ATEEZ)}
            backgroundColor="#000000"
            imageSrc={ateezLogo}
          >
            <button className="like-button" />
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(ATEEZ, randomVideoState.ateez)
              }
            >
              <div className="profile-image" />
              <h2>ATEEZ</h2>
            </button>
          </ArtistCategory>
          <ArtistCategory
            isActive={isSameArtist(BLACK_PINK)}
            backgroundColor="#000000"
            imageSrc={blackPinkLogo}
          >
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(
                  BLACK_PINK,
                  randomVideoState.blackPink
                )
              }
            >
              <div className="profile-image" />
              <h2>BLACKPINK</h2>
            </button>
          </ArtistCategory>
          <ArtistCategory
            isActive={isSameArtist(BTS)}
            backgroundColor="#000000"
            imageSrc={btsLogo}
          >
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(BTS, randomVideoState.bts)
              }
            >
              <div className="profile-image" />
              <h2>BTS</h2>
            </button>
          </ArtistCategory>
          <ArtistCategory
            isActive={isSameArtist(FROMISE_9)}
            backgroundColor="#38c4f5"
            imageSrc={fromiseNineLogo}
          >
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(
                  FROMISE_9,
                  randomVideoState.fromiseNine
                )
              }
            >
              <div className="profile-image" />
              <h2>Fromise_9</h2>
            </button>
          </ArtistCategory>
          <ArtistCategory
            isActive={isSameArtist(NCT)}
            backgroundColor="#ffffff"
            imageSrc={nctLogo}
          >
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(NCT, randomVideoState.nct)
              }
            >
              <div className="profile-image" />
              <h2>NCT</h2>
            </button>
          </ArtistCategory>
          <ArtistCategory
            isActive={isSameArtist(SEVENTEEN)}
            backgroundColor="#92A8D1"
            imageSrc={svtLogo}
          >
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(
                  SEVENTEEN,
                  randomVideoState.seventeen
                )
              }
            >
              <div className="profile-image" />
              <h2>SEVENTEEN</h2>
            </button>
          </ArtistCategory>
          <ArtistCategory
            isActive={isSameArtist(STRAYKIDS)}
            backgroundColor="#000000"
            imageSrc={sksLogo}
          >
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(
                  STRAYKIDS,
                  randomVideoState.strayKids
                )
              }
            >
              <div className="profile-image" />
              <h2>StrayKids</h2>
            </button>
          </ArtistCategory>
          <ArtistCategory
            isActive={isSameArtist(TOMORROW_BY_TOGETHER)}
            backgroundColor="#d4cfbc"
            imageSrc={txtLogo}
          >
            <button
              className="content-wrapper"
              onClick={() =>
                onChangeCurrentArtistVideo(
                  TOMORROW_BY_TOGETHER,
                  randomVideoState.tomorrowByTogether
                )
              }
            >
              <div className="profile-image" />
              <h2>TOMORROW X TOGETHER</h2>
            </button>
          </ArtistCategory>
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
      height: 150px;
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
      height: 150px;
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

const ArtistCategory = styled.li<{
  isActive: boolean;
  imageSrc: string;
  backgroundColor: string;
}>`
  position: relative;
  list-style: none;

  &:last-child {
    margin-right: 30px;
  }

  button.like-button {
    position: absolute;
    top: 2px;
    right: 1px;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent url(${heartIcon}) center / 20px no-repeat;
    cursor: pointer;
  }

  button.content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
    max-width: 150px;
    min-height: 150px;
    margin: 0;
    padding: 18px 12px 12px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 2px solid ${(props) => (props.isActive ? "#777777" : "#dddddd")};
    background: ${(props) => (props.isActive ? "#f3f3f3" : "#ffffff")};
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
        if (props.backgroundColor === "#ffffff" && props.isActive) {
          return "none";
        }
        if (props.backgroundColor === "#ffffff" && !props.isActive) {
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
  }
`;
