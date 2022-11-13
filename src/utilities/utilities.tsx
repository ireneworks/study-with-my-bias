import qs from "qs";
import {ArtistVideoRandomNumber} from "../components/hooks/useArtistRandomVideoReducer";
import useCurrentArtistVideo, {CurrentArtistVideo} from "../components/hooks/useCurrentArtistVideo";

export const getRandomNumber = (value: number):number => {
    return Math.floor(Math.random() * value);
};

export const getQuery = (target:string) => {
    return qs.parse(target, {ignoreQueryPrefix: true,})
};

export const getArtistVideoRandomNumber = (state:ArtistVideoRandomNumber, current:CurrentArtistVideo):number => {
    let result = 0;
    const randomNumber = Object.entries(state).find(unit => unit[0] === current.artist)
    if (randomNumber) {
        result = randomNumber[1]
        return result;
    }
    return 0;
}