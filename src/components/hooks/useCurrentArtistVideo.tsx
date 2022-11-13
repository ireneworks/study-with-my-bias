import {useReducer} from "react";
import {
    ATEEZ,
    BLACK_PINK,
    BTS,
    FROMISE_9,
    NCT,
    SEVENTEEN,
    STRAYKIDS,
    TOMORROW_BY_TOGETHER
} from "../../constants/constantArtistNames";
import {videoIdData} from "../../utilities/videoIdData";

export interface CurrentArtistVideo {
    artist: ArtistNames,
    videoId: string;
}

interface OnChangeStateAction {
    artist: ArtistNames,
    randomVideoNumber: number,
}

type Action = OnChangeStateAction

function Reducer(state:CurrentArtistVideo, action:Action) {
    switch (action.artist) {
        case ATEEZ:
            return {artist:action.artist, videoId: videoIdData.ateez[action.randomVideoNumber]}
        case BLACK_PINK:
            return {artist:action.artist, videoId: videoIdData.blackPink[action.randomVideoNumber]}
        case BTS:
            return {artist:action.artist, videoId: videoIdData.bts[action.randomVideoNumber]}
        case FROMISE_9:
            return {artist:action.artist, videoId: videoIdData.fromiseNine[action.randomVideoNumber]}
        case NCT:
            return {artist:action.artist, videoId: videoIdData.nct[action.randomVideoNumber]}
        case SEVENTEEN:
            return {artist:action.artist, videoId: videoIdData.seventeen[action.randomVideoNumber]}
        case STRAYKIDS:
            return {artist:action.artist, videoId: videoIdData.strayKids[action.randomVideoNumber]}
        case TOMORROW_BY_TOGETHER:
            return {artist:action.artist, videoId: videoIdData.tomorrowByTogether[action.randomVideoNumber]}
        default:
            return state;
    }
}

export default function useCurrentArtistVideo(){
    const [state, dispatch] = useReducer(Reducer, {
        artist: ATEEZ,
        videoId: "YJq9aKBp7rk"
    });

    const onChange = (artist: ArtistNames, randomVideoNumber: number) => dispatch({artist, randomVideoNumber});

    return {currentArtistVideoState:state, onChangeCurrentArtistVideo:onChange} as const;
}