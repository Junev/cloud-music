import { fromJS } from "immutable";
import * as actionTypes from "./constants";
import { playMode } from "../config";

const defaultState = fromJS({
  fullScreen: false, // 播放器是否为全屏模式
  playing: false, // 当前歌曲是否播放
  sequencePlayList: [
    {
      rtUrls: [],
      ar: [
        {
          id: 2116,
          name: "陈奕迅",
          alia: ["Eason Chan"],
        },
      ],
      al: {
        id: 137142551,
        name: "孤勇者",
        picUrl:
          "https://p1.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg",
        pic_str: "109951166702962263",
        pic: 109951166702962260,
        alia: ["《英雄联盟：双城之战》动画剧集中文主题曲"],
      },
      st: 1,
      noCopyrightRcmd: null,
      songJumpInfo: null,
      rtype: 0,
      rurl: null,
      pst: 0,
      alia: ["《英雄联盟：双城之战》动画剧集中文主题曲"],
      pop: 100,
      rt: "",
      mst: 9,
      cp: 7003,
      crbt: null,
      cf: "",
      dt: 256000,
      h: {
        br: 320001,
        fid: 0,
        size: 10242285,
        vd: -55735,
      },
      l: {
        br: 128001,
        fid: 0,
        size: 4096941,
        vd: -51651,
      },
      rtUrl: null,
      ftype: 0,
      djId: 0,
      no: 1,
      fee: 8,
      mv: 14480854,
      v: 8,
      t: 0,
      cd: "01",
      a: null,
      m: {
        br: 192001,
        fid: 0,
        size: 6145389,
        vd: -53179,
      },
      name: "孤勇者",
      id: 1901371647,
      privilege: {
        id: 1901371647,
        fee: 8,
        payed: 0,
        st: 0,
        pl: 128000,
        dl: 0,
        sp: 7,
        cp: 1,
        subp: 1,
        cs: false,
        maxbr: 999000,
        fl: 128000,
        toast: false,
        flag: 4,
        preSell: false,
        playMaxbr: 999000,
        downloadMaxbr: 999000,
        rscl: null,
        freeTrialPrivilege: {
          resConsumable: false,
          userConsumable: false,
        },
        chargeInfoList: [
          {
            rate: 128000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 0,
          },
          {
            rate: 192000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 1,
          },
          {
            rate: 320000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 1,
          },
          {
            rate: 999000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 1,
          },
        ],
      },
    },
  ], // 顺序列表 (因为之后会有随机模式，列表会乱序，因从拿这个保存顺序列表)
  playList: [
    {
      rtUrls: [],
      ar: [
        {
          id: 2116,
          name: "陈奕迅",
          alia: ["Eason Chan"],
        },
      ],
      al: {
        id: 137142551,
        name: "孤勇者",
        picUrl:
          "https://p1.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg",
        pic_str: "109951166702962263",
        pic: 109951166702962260,
        alia: ["《英雄联盟：双城之战》动画剧集中文主题曲"],
      },
      st: 1,
      noCopyrightRcmd: null,
      songJumpInfo: null,
      rtype: 0,
      rurl: null,
      pst: 0,
      alia: ["《英雄联盟：双城之战》动画剧集中文主题曲"],
      pop: 100,
      rt: "",
      mst: 9,
      cp: 7003,
      crbt: null,
      cf: "",
      dt: 256000,
      h: {
        br: 320001,
        fid: 0,
        size: 10242285,
        vd: -55735,
      },
      l: {
        br: 128001,
        fid: 0,
        size: 4096941,
        vd: -51651,
      },
      rtUrl: null,
      ftype: 0,
      djId: 0,
      no: 1,
      fee: 8,
      mv: 14480854,
      v: 8,
      t: 0,
      cd: "01",
      a: null,
      m: {
        br: 192001,
        fid: 0,
        size: 6145389,
        vd: -53179,
      },
      name: "孤勇者",
      id: 1901371647,
      privilege: {
        id: 1901371647,
        fee: 8,
        payed: 0,
        st: 0,
        pl: 128000,
        dl: 0,
        sp: 7,
        cp: 1,
        subp: 1,
        cs: false,
        maxbr: 999000,
        fl: 128000,
        toast: false,
        flag: 4,
        preSell: false,
        playMaxbr: 999000,
        downloadMaxbr: 999000,
        rscl: null,
        freeTrialPrivilege: {
          resConsumable: false,
          userConsumable: false,
        },
        chargeInfoList: [
          {
            rate: 128000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 0,
          },
          {
            rate: 192000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 1,
          },
          {
            rate: 320000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 1,
          },
          {
            rate: 999000,
            chargeUrl: null,
            chargeMessage: null,
            chargeType: 1,
          },
        ],
      },
    },
  ],
  mode: playMode.sequence, // 播放模式
  currentIndex: 0, // 当前歌曲在播放列表的索引位置
  showPlayList: false, // 是否展示播放列表
  currentSong: {
    al: {
      picUrl:
        "https://p2.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg",
    },
    name: "孤勇者",
    ar: [{ name: "陈奕迅" }],
  },
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_SONG:
      return state.set("currentSong", action.data);
    case actionTypes.SET_FULL_SCREEN:
      return state.set("fullScreen", action.data);
    case actionTypes.SET_PLAYING_STATE:
      return state.set("playing", action.data);
    case actionTypes.SET_SEQUENCE_PLAYLIST:
      return state.set("sequencePlayList", action.data);
    case actionTypes.SET_PLAYLIST:
      return state.set("playList", action.data);
    case actionTypes.SET_PLAY_MODE:
      return state.set("mode", action.data);
    case actionTypes.SET_CURRENT_INDEX:
      const newIndex = action.data;
      const newSong = state.get("playList").get(newIndex);
      return state.merge({
        currentIndex: fromJS(newIndex),
        currentSong: newSong,
      });
    case actionTypes.SET_SHOW_PLAYLIST:
      return state.set("showPlayList", action.data);
    case actionTypes.DELETE_SONG:
      return deleteSong(state, action);
    default:
      return state;
  }
};

function deleteSong(state, action) {
  const playList = state.get("playList").toJS();
  const sequencePlayList = state.get("sequencePlayList").toJS();
  const currentIndex = state.get("currentIndex");

  let newPlayList = playList.slice();
  let newSequence = sequencePlayList.slice();
  let newCurrentIndex = currentIndex;

  const indexOfPlayList = newPlayList.findIndex((c) => c === action.data);
  newPlayList.splice(indexOfPlayList, 1);
  if (indexOfPlayList < currentIndex) {
    newCurrentIndex -= 1;
  }

  const indexOfSequence = newSequence.findIndex((c) => c === action.data);
  newSequence.splice(indexOfSequence, 1);

  return state.merge({
    playList: fromJS(newPlayList),
    sequencePlayList: fromJS(newSequence),
    currentIndex: fromJS(newCurrentIndex),
  });
}

export { reducer };
