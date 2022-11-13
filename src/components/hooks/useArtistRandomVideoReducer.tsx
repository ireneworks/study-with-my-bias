import {useReducer} from "react";
import {
    ATEEZ,
    BLACK_PINK,
    BTS,
    FROMISE_9,
    NCT,
    SEVENTEEN, STRAYKIDS,
    TOMORROW_BY_TOGETHER
} from "../../constants/constantArtistNames";
import {getRandomNumber} from "../../utilities/utilities";
import {videoIdData} from "../../utilities/videoIdData";

export interface ArtistVideoRandomNumber {
    ateez: number,
    blackPink: number,
    bts: number,
    fromiseNine: number,
    nct: number,
    tomorrowByTogether: number,
    seventeen: number,
    strayKids: number,
}

interface OnChangeStateAction {
    currentArtist: keyof ArtistVideoRandomNumber;
}

type Action = OnChangeStateAction

function Reducer(state:ArtistVideoRandomNumber, action:Action) {
switch (action.currentArtist) {
    case ATEEZ:
        return {...state, ateez: getRandomNumber(videoIdData.ateez.length)}
    case BLACK_PINK:
        return {...state, blackPink: getRandomNumber(videoIdData.blackPink.length)}
    case BTS:
        return {...state, bts: getRandomNumber(videoIdData.bts.length)}
    case FROMISE_9:
        return {...state, fromiseNine: getRandomNumber(videoIdData.fromiseNine.length)}
    case NCT:
        return {...state, nct: getRandomNumber(videoIdData.nct.length)}
    case SEVENTEEN:
        return {...state, seventeen: getRandomNumber(videoIdData.seventeen.length)}
    case STRAYKIDS:
        return {...state, strayKids: getRandomNumber(videoIdData.strayKids.length)}
    case TOMORROW_BY_TOGETHER:
        return {...state, tomorrowByTogether: getRandomNumber(videoIdData.tomorrowByTogether.length)}
    default:
        return state;
}}

export default function useArtistRandomVideoReducer() {

    const [state, dispatch] = useReducer(Reducer,{
        ateez: 0,
        blackPink: 0,
        bts: 0,
        fromiseNine: 0,
        nct: 0,
        tomorrowByTogether: 0,
        seventeen: 0,
        strayKids: 0,
    });

    const onChange = (currentArtist:keyof ArtistVideoRandomNumber) => dispatch({currentArtist});

    return {randomVideoState:state, onChangeRandomArtistVideos:onChange} as const;
}