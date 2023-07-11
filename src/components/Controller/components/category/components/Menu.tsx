import React from "react";
import heartIcon from "../../../../../assets/bxs-heart.svg";
import styled from "@emotion/styled";

interface MenuProps {
  label: string;
  value: string;
  isSameArtist(value: string): boolean;
  onChangeCurrentVideo(value: any, values: any): void;
  randomVideoState: any;
}

export function Menu({
  label,
  value,
  isSameArtist,
  onChangeCurrentVideo,
  randomVideoState,
}: MenuProps) {
  return (
    <MenuWrapper isActive={isSameArtist(value)}>
      <button className="like-button" />
      <button
        className="content-wrapper"
        onClick={() => onChangeCurrentVideo(value, randomVideoState[value])}
      >
        <h2>{label}</h2>
      </button>
    </MenuWrapper>
  );
}

const MenuWrapper = styled.li<{
  isActive: boolean;
}>`
  position: relative;
  list-style: none;

  //&:last-child {
  //  margin-right: 30px;
  //}

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
    min-width: 100px;
    margin: 0;
    padding: 18px 12px 12px 12px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 2px solid ${({ isActive }) => (isActive ? "#111" : "#ddd")};
    background: ${({ isActive }) => (isActive ? "#111" : "#fff")};
    cursor: pointer;

    h2 {
      margin: 0;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: -0.7px;
      color: ${({ isActive }) => (isActive ? "#fff" : "#111")};
      text-align: left;
    }
  }
`;
