import styled from "@emotion/styled";
import { useState, useEffect } from "react";

export default function UrlCopy() {
    const [isCopied, setIsCopied] = useState(false);

    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            await setIsCopied(true);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        setTimeout(() => setIsCopied(false), 3500);
    }, [isCopied]);

    return <Container isCopied={isCopied}>
        <button onClick={onCopy}>링크 복사하기</button>
        {isCopied && (
            <p>
                <span role="img" aria-label="clipboard">📋 </span>
                &nbsp; 링크를 복사했어요
            </p>
        )}
    </Container>
}

const Container = styled.div<{isCopied:boolean}>`
  button {
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
            props.isCopied ? "fadeInOut 1.5s ease-in" : "none"};
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
`