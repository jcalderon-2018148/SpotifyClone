import { colors } from "./colors";

export interface Playlist {
  id: string;
  albumId: number;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  artists: string[];
}

export const playlists: Playlist[] = [
  {
    id: 'Date a Live',
    albumId: 1,
    title: "SweetARMS Playlist",
    color: colors.yellow,
    cover:
      "https://lh3.googleusercontent.com/upphfctNzzBp0hA6JMhcD1hGmdirzuAzVJQEri4YGqREmBbvU2M4v1kaeO9SLbHwozrrDPxdiB1lDkA=w544-h544-l90-rj",
    artists: ["SweetARMS", "Casiio"],
  },
  {
    id: 'Oregairu',
    albumId: 2,
    title: "Yanaginagi Playlist",
    color: colors.green,
    cover:
      "https://lh3.googleusercontent.com/zO1w1AewNSdvuJxmmdpY87W2bHi-qPPBiXBezbvm61IcdPWx57RFlfFyjEQeqesoRKf3_-34y_hu2KfY=w544-h544-s-l90-rj",
    artists: ["Yanaginagi", "Blue Fox"],
  },
  {
    id: 'Re Zero',
    albumId: 3,
    title: "Memento Playlist",
    color: colors.rose,
    cover:
      "https://lh3.googleusercontent.com/cP82wBv04ib5r_7V_8lAgCXLhHTMztEKcDz6UWHHw3QuuPVKDsW68VesTgyYxSEVx9Fnb01PoFl4iD2RPQ=w544-h544-l90-rj",
    artists: ["nonoc", "Team Astro"],
  },
  {
    id: 'Soul Eater',
    albumId: 4,
    title: "Absolute Soul Playlist",
    color: colors.blue,
    cover:
      "https://lh3.googleusercontent.com/WSUuoJZ2CwEkT7udiZzZyhGBe2jbiU2QKq894Nc7ZkhDTv0KL1odxJPeuRsFSS6Wi1BP7kWOTYLFOdSDxA=w544-h544-s-l90-rj",
    artists: ["Konomi Suzuki", "Yasumu"],
  },
  {
    id: 'TONIKAWA',
    albumId: 5,
    title: "Moonlit Walk Playlist",
    color: colors.purple,
    cover:
      "https://lh3.googleusercontent.com/zce5PzsKTKtZlRutG6CLbVb03US9DOiE7nosm1--_tOxyFCnu7GlmPMhzaVMm--lSnjYpaifhFJtY8A=w544-h544-l90-rj",
    artists: ["Neko Hacker"],
  },
  {
    id: '6',
    albumId: 6,
    title: "Like a Necessity",
    color: colors.orange,
    cover:
      "https://f4.bcbits.com/img/a0363730459_16.jpg",
    artists: ["WFS", "Nadav Cohen"],
  },
];

export const morePlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
  ...item,
  id: item.id + "_side",
}))

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
  ...sidebarPlaylists,
]

export interface Song {
  id: number;
  albumId: number;
  title: string;
  image: string;
  artists: string[];
  album: string;
  duration: string;
}

export const songs: Song[] = [
  {
    "id": 1,
    "albumId": 1,
    "title": "I swear",
    "image": `https://lh3.googleusercontent.com/upphfctNzzBp0hA6JMhcD1hGmdirzuAzVJQEri4YGqREmBbvU2M4v1kaeO9SLbHwozrrDPxdiB1lDkA=w544-h544-l90-rj`,
    "artists": ["sweet ARMS"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 1,
    "title": "Invisible Date",
    "image": `https://lh3.googleusercontent.com/upphfctNzzBp0hA6JMhcD1hGmdirzuAzVJQEri4YGqREmBbvU2M4v1kaeO9SLbHwozrrDPxdiB1lDkA=w544-h544-l90-rj`,
    "artists": ["sweet ARMS"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 1,
    "title": "Skyline Serenade",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 1,
    "title": "Urban Echoes",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 1,
    "title": "Night's End",
    "image": `https://vinyl.lofirecords.com/cdn/shop/products/VINYL_MORNING_COFFEE_4-min.png?v=1680526353`,
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 2,
    "title": "Silent Rain",
    "image": `https://lh3.googleusercontent.com/zO1w1AewNSdvuJxmmdpY87W2bHi-qPPBiXBezbvm61IcdPWx57RFlfFyjEQeqesoRKf3_-34y_hu2KfY=w544-h544-s-l90-rj`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:40"
  },
  {
    "id": 2,
    "albumId": 2,
    "title": "Lost Pages",
    "image": `https://lh3.googleusercontent.com/zO1w1AewNSdvuJxmmdpY87W2bHi-qPPBiXBezbvm61IcdPWx57RFlfFyjEQeqesoRKf3_-34y_hu2KfY=w544-h544-s-l90-rj`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 2,
    "title": "Midnight Tales",
    "image": `https://lh3.googleusercontent.com/zO1w1AewNSdvuJxmmdpY87W2bHi-qPPBiXBezbvm61IcdPWx57RFlfFyjEQeqesoRKf3_-34y_hu2KfY=w544-h544-s-l90-rj`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 2,
    "title": "City Lights",
    "image": `https://lh3.googleusercontent.com/zO1w1AewNSdvuJxmmdpY87W2bHi-qPPBiXBezbvm61IcdPWx57RFlfFyjEQeqesoRKf3_-34y_hu2KfY=w544-h544-s-l90-rj`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 2,
    "title": "Night Drive",
    "image": `https://lh3.googleusercontent.com/zO1w1AewNSdvuJxmmdpY87W2bHi-qPPBiXBezbvm61IcdPWx57RFlfFyjEQeqesoRKf3_-34y_hu2KfY=w544-h544-s-l90-rj`,
    "artists": ["Urban Nocturne"],
    "album": "Midnight Tales",
    "duration": "4:20"
  },
  {
    "id": 1,
    "albumId": 3,
    "title": "Memento",
    "image": `https://lh3.googleusercontent.com/cP82wBv04ib5r_7V_8lAgCXLhHTMztEKcDz6UWHHw3QuuPVKDsW68VesTgyYxSEVx9Fnb01PoFl4iD2RPQ=w544-h544-l90-rj`,
    "artists": ["nonoc"],
    "album": "TV Re: Zero kara Hajimeru Isekai Seikatsu 2nd Season",
    "duration": "5:05"
  },
  {
    "id": 2,
    "albumId": 3,
    "title": "Go go go!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 3,
    "title": "Keep focus!",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 3,
    "title": "JavaScript is the way",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 3,
    "title": "No more TypeScript for me",
    "image": `https://f4.bcbits.com/img/a1435058381_65.jpg`,
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 4,
    "title": "Absolute Soul",
    "image": "https://lh3.googleusercontent.com/WSUuoJZ2CwEkT7udiZzZyhGBe2jbiU2QKq894Nc7ZkhDTv0KL1odxJPeuRsFSS6Wi1BP7kWOTYLFOdSDxA=w544-h544-s-l90-rj",
    "artists": ["Konomi Suzuki"],
    "album": "Absolute Soul",
    "duration": "4:43"
  },
  {
    "id": 2,
    "albumId": 4,
    "title": "Go go go!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:20"
  },
  {
    "id": 3,
    "albumId": 4,
    "title": "Keep focus!",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:40"
  },
  {
    "id": 4,
    "albumId": 4,
    "title": "JavaScript is the way",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "3:10"
  },
  {
    "id": 5,
    "albumId": 4,
    "title": "No more TypeScript for me",
    "image": "https://f4.bcbits.com/img/a1962013209_16.jpg",
    "artists": ["Tenno"],
    "album": "Study Session",
    "duration": "2:10"
  },
  {
    "id": 1,
    "albumId": 5,
    "title": "Moonlit Walk",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:12"
  },
  {
    "id": 2,
    "albumId": 5,
    "title": "Coffee Daze",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:07"
  },
  {
    "id": 3,
    "albumId": 5,
    "title": "Skyline Serenade",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:50"
  },
  {
    "id": 4,
    "albumId": 5,
    "title": "Urban Echoes",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "3:30"
  },
  {
    "id": 5,
    "albumId": 5,
    "title": "Night's End",
    "image": "https://f4.bcbits.com/img/a2793859494_16.jpg",
    "artists": ["LoFi Dreamer"],
    "album": "Chill Lo-Fi Music",
    "duration": "4:20"
  },
]