type ArtistNames = "ateez" | "blackPink" | "bts" | "fromiseNine" | "nct" | "seventeen" | "strayKids" | "tomorrowByTogether"

interface ArtistCategory {
    artistName: string;
    artistValue: string;
    videoIds: string[];
    randomVideoNumber: number;
}