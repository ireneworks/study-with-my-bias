import React, {useEffect} from "react";
import {useNavigate} from "react-router";
import styled from "@emotion/styled";
import ateezLogo from "../assets/ateez_logo.png";
import blackPinkLogo from "../assets/blackpink_logo.svg";
import fromiseNineLogo from "../assets/fromise_logo.svg";
import nctLogo from "../assets/NCT-Logo.png";
import svtLogo from "../assets/svt_logo.svg";
import txtLogo from "../assets/txt_logo.svg";
import {ATEEZ, BLACK_PINK, FROMISE_9, NCT, SEVENTEEN, TOMORROW_BY_TOGETHER} from "../constants/constantArtistNames";
import useArtistRandomVideoReducer from "./hooks/useArtistRandomVideoReducer";
import useCurrentArtistVideo from "./hooks/useCurrentArtistVideo";
import {getArtistVideoRandomNumber} from "../utilities/utilities";

export default function ArtistsVideos() {
    const navigate = useNavigate();
    const {randomVideoState, onChangeRandomArtistVideos} = useArtistRandomVideoReducer();
    const {currentArtistVideoState, onChangeCurrentArtistVideo} = useCurrentArtistVideo();

    const isSameArtist = (target:ArtistNames):boolean => {
        return currentArtistVideoState.artist === target;
    }

    useEffect(() => {
        navigate(`?artist=${currentArtistVideoState.artist}&id=${currentArtistVideoState.videoId}`);
        }, [currentArtistVideoState]);

    useEffect(() => {
        const randomNumber = getArtistVideoRandomNumber(randomVideoState, currentArtistVideoState)
        onChangeCurrentArtistVideo(currentArtistVideoState.artist, randomNumber)
    }, [randomVideoState])

    return <Container>
        <ul>
            <ArtistCategory
                isActive={isSameArtist(ATEEZ)}
                backgroundColor="#000000"
                imageSrc={ateezLogo}
            >
                <button onClick={() => onChangeCurrentArtistVideo(ATEEZ, randomVideoState.ateez)}>
                    <div className="profile-image" />
                    <h2>ATEEZ</h2>
                </button>
            </ArtistCategory>
            <ArtistCategory
                isActive={isSameArtist(BLACK_PINK)}
                backgroundColor="#000000"
                imageSrc={blackPinkLogo}
            >
                <button onClick={() => onChangeCurrentArtistVideo(BLACK_PINK, randomVideoState.blackPink)}>
                    <div className="profile-image" />
                    <h2>BLACKPINK</h2>
                </button>
            </ArtistCategory>
            <ArtistCategory
                isActive={isSameArtist(FROMISE_9)}
                backgroundColor="#38c4f5"
                imageSrc={fromiseNineLogo}
            >
                <button onClick={() => onChangeCurrentArtistVideo(FROMISE_9, randomVideoState.fromiseNine)}>
                    <div className="profile-image" />
                    <h2>Fromise_9</h2>
                </button>
            </ArtistCategory>
            <ArtistCategory
                isActive={isSameArtist(NCT)}
                backgroundColor="#ffffff"
                imageSrc={nctLogo}
            >
                <button onClick={() => onChangeCurrentArtistVideo(NCT, randomVideoState.nct)}>
                    <div className="profile-image" />
                    <h2>NCT</h2>
                </button>
            </ArtistCategory>
            <ArtistCategory
                isActive={isSameArtist(SEVENTEEN)}
                backgroundColor="#92A8D1"
                imageSrc={svtLogo}
            >
                <button onClick={()=>onChangeCurrentArtistVideo(SEVENTEEN, randomVideoState.seventeen)}>
                    <div className="profile-image" />
                    <h2>SEVENTEEN</h2>
                </button>
            </ArtistCategory>
            <ArtistCategory
                isActive={isSameArtist(TOMORROW_BY_TOGETHER)}
                backgroundColor="#d4cfbc"
                imageSrc={txtLogo}
            >
                <button onClick={() => onChangeCurrentArtistVideo(TOMORROW_BY_TOGETHER, randomVideoState.tomorrowByTogether)}>
                    <div className="profile-image" />
                    <h2>TOMORROW X TOGETHER</h2>
                </button>
            </ArtistCategory>
        </ul>
        <button className="random-video" onClick={() => onChangeRandomArtistVideos(currentArtistVideoState.artist)} >
        다른 멤버는 어때요?
    </button>
    </Container>
}

const Container = styled.div`
  
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
`;

const ArtistCategory = styled.li<{
    isActive: boolean;
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
    border: 2px solid ${(props) => (props.isActive ? "#02c76e" : "#dddddd")};
    background: rgba(
      ${(props) => (props.isActive ? "2, 199, 110, 0.1" : "255, 255, 255, 1")}
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
`;