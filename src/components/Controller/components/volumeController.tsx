import React from "react";
import styled from "@emotion/styled";
import volumeOnIcon from "../../../assets/bxs-volume-full.svg";
import volumeOffIcon from "../../../assets/bxs-volume-mute.svg";

interface Props {
  volumeControl: number;
  setVolumeControl(value: number): void;
}

export default function VolumeController({
  volumeControl,
  setVolumeControl,
}: Props) {
  const onClick = () => {
    if (volumeControl === 0) {
      return setVolumeControl(50);
    }
    return setVolumeControl(0);
  };

  return (
    <Container isVolumeOn={volumeControl} volume={volumeControl}>
      <button onClick={onClick} />
      <input
        type="range"
        min="0"
        max="100"
        value={volumeControl}
        onChange={(e) => setVolumeControl(Number(e.currentTarget.value))}
      />
    </Container>
  );
}

const Container = styled.div<{ isVolumeOn: Number; volume: Number }>`
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
      background: #333333;
      box-shadow: 0 0 12px -4px rgba(0,0,0,1);
      cursor: pointer;
    }

    ::-webkit-slider-runnable-track {
      height: 6px;
      background: ${(props) =>
        props.volume
          ? `linear-gradient(to right, #333333 ${props.volume}%, #dddddd ${props.volume}% 100%)`
          : "#E5E7EB"};
      opacity: ${(props) => (props.isVolumeOn !== 0 ? "1" : "0.5")};
      border-radius: 3rem;
      transition: all 0.3s;
      cursor: pointer;
    }
`;
