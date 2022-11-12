import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";
import {videoIdData} from "../utilities/videoIdData";
import styled from "@emotion/styled";
import ateezLogo from "../assets/ateez_logo.png";
import blackPinkLogo from "../assets/blackpink_logo.svg";
import fromiseNineLogo from "../assets/fromise_logo.svg";
import nctLogo from "../assets/NCT-Logo.png";
import svtLogo from "../assets/svt_logo.svg";
import txtLogo from "../assets/txt_logo.svg";
import {getQuery, getRandomNumber} from "../utilities/utilities";
import {ATEEZ, BLACK_PINK, FROMISE_9, NCT, SEVENTEEN, TOMORROW_BY_TOGETHER} from "../constants/constantArtistNames";

export default function ArtistCategory() {
    const location = useLocation()
    const navigate = useNavigate();
    const [artistsVideoNumber, setArtistsVideoNumber] = useState({
        ateez: 0,
        blackPink: 0,
        fromiseNine: 0,
        nct: 0,
        tomorrowByTogether: 0,
        seventeen: 0,
    });

    const [currentArtistVideo, setCurrentArtistVideo] = useState<CurrentPlayingInfo>({
        artist: ATEEZ,
        videoId: "lgulPsD_JGg",
    });

    const isSameArtist = (value:ArtistNames):boolean => {
        return currentArtistVideo.artist === value;
    }

    const randomVideoHandler = () => {
      let randomNumber = 0;
      switch (getQuery(location.search).artist) {
        case ATEEZ:
          randomNumber = getRandomNumber(videoIdData.ateez.length);
          setArtistsVideoNumber({ ...artistsVideoNumber, ateez: randomNumber });
          setCurrentArtistVideo({
            ...currentArtistVideo,
            videoId: videoIdData.ateez[randomNumber],
          });
          break;
        case BLACK_PINK:
          randomNumber = getRandomNumber(videoIdData.blackPink.length);
            setArtistsVideoNumber({ ...artistsVideoNumber, blackPink: randomNumber });
          setCurrentArtistVideo({
            ...currentArtistVideo,
            videoId: videoIdData.blackPink[randomNumber],
          });
          break;
        case TOMORROW_BY_TOGETHER:
          randomNumber = getRandomNumber(videoIdData.tomorrowByTogether.length);
            setArtistsVideoNumber({ ...artistsVideoNumber, tomorrowByTogether: randomNumber });
          setCurrentArtistVideo({
            ...currentArtistVideo,
            videoId: videoIdData.tomorrowByTogether[randomNumber],
          });
          break;
        case SEVENTEEN:
          randomNumber = getRandomNumber(videoIdData.seventeen.length);
            setArtistsVideoNumber({ ...artistsVideoNumber, seventeen: randomNumber });
          setCurrentArtistVideo({
            ...currentArtistVideo,
            videoId: videoIdData.seventeen[randomNumber],
          });
          break;
      }
    };

    useEffect(() => {
        navigate(`?artist=${currentArtistVideo.artist}&id=${currentArtistVideo.videoId}`);
    }, [currentArtistVideo]);

    return <Container>
        <ul>
            <Profile
                isActive={isSameArtist(ATEEZ)}
                backgroundColor="#000000"
                imageSrc={ateezLogo}
            >
                <button
                    onClick={() =>
                        setCurrentArtistVideo({
                            artist: ATEEZ,
                            videoId: videoIdData.ateez[artistsVideoNumber.ateez],
                        })
                    }
                >
                    <div className="profile-image" />
                    <h2>ATEEZ</h2>
                </button>
            </Profile>
            <Profile
                isActive={isSameArtist(BLACK_PINK)}
                backgroundColor="#000000"
                imageSrc={blackPinkLogo}
            >
                <button
                    onClick={() =>
                        setCurrentArtistVideo({
                            artist: BLACK_PINK,
                            videoId: videoIdData.blackPink[artistsVideoNumber.blackPink],
                        })
                    }
                >
                    <div className="profile-image" />
                    <h2>BLACKPINK</h2>
                </button>
            </Profile>
            <Profile
                isActive={isSameArtist(FROMISE_9)}
                backgroundColor="#38c4f5"
                imageSrc={fromiseNineLogo}
            >
                <button
                    onClick={() =>
                        setCurrentArtistVideo({
                            artist: FROMISE_9,
                            videoId: videoIdData.fromiseNine[0],
                        })
                    }
                >
                    <div className="profile-image" />
                    <h2>Fromise_9</h2>
                </button>
            </Profile>
            <Profile
                isActive={isSameArtist(NCT)}
                backgroundColor="#ffffff"
                imageSrc={nctLogo}
            >
                <button
                    onClick={() =>
                        setCurrentArtistVideo({
                            artist: NCT,
                            videoId: videoIdData.nct[0],
                        })
                    }
                >
                    <div className="profile-image" />
                    <h2>NCT</h2>
                </button>
            </Profile>
            <Profile
                isActive={isSameArtist(SEVENTEEN)}
                backgroundColor="#92A8D1"
                imageSrc={svtLogo}
            >
                <button
                    onClick={() =>
                        setCurrentArtistVideo({
                            artist: SEVENTEEN,
                            videoId: videoIdData.seventeen[artistsVideoNumber.seventeen],
                        })
                    }
                >
                    <div className="profile-image" />
                    <h2>SEVENTEEN</h2>
                </button>
            </Profile>
            <Profile
                isActive={isSameArtist(TOMORROW_BY_TOGETHER)}
                backgroundColor="#d4cfbc"
                imageSrc={txtLogo}
            >
                <button
                    onClick={() =>
                        setCurrentArtistVideo({
                            artist: TOMORROW_BY_TOGETHER,
                            videoId: videoIdData.tomorrowByTogether[artistsVideoNumber.tomorrowByTogether],
                        })
                    }
                >
                    <div className="profile-image" />
                    <h2>TOMORROW X TOGETHER</h2>
                </button>
            </Profile>
        </ul>
        <button className="random-video" onClick={randomVideoHandler} >
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

const Profile = styled.li<{
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