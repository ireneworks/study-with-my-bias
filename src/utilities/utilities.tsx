import qs from "qs";

export const getRandomNumber = (value: number):number => {
    return Math.floor(Math.random() * value);
};

export const getQuery = (value:string) => {
    return qs.parse(value, {ignoreQueryPrefix: true,})
};