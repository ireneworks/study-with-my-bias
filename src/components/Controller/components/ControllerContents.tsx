import Category from "./category/category";
import VolumeController from "./volumeController";
import React from "react";
import styled from "@emotion/styled";

interface ControllerContentsProps {
  volumeControl: number;
  setVolumeControl(value: number): void;
}

export function ControllerContents({
  volumeControl,
  setVolumeControl,
}: ControllerContentsProps) {
  return (
    <>
      <Category />
      <VolumeController
        volumeControl={volumeControl}
        setVolumeControl={setVolumeControl}
      />
      <ul>
        <li>
          <button>타이머</button>
        </li>
        <li>
          <button>투두</button>
        </li>
        <li>
          <button>노래</button>
        </li>
      </ul>
      <Label>Biased!는 LifeAt.io를 보고 영감을 받아 만들었습니다.</Label>
    </>
  );
}

const Label = styled.p`
  margin: 0 0 4px 0;
  font-size: 10px;
  color: #999;
`;
