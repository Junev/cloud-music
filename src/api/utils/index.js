const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
};

const getName = (strArr) =>
  strArr.reduce(
    (pre, cur, i) => (i === 0 ? cur.name : pre + "/" + cur.name),
    ""
  );

const hackGetSongUrl = (id) =>
  `https://music.163.com/song/media/outer/url?id=${id}.mp3`;

const formatPlayTime = (interval) => {
  let time = interval || 0;
  const minute = Math.floor(time / 60).toFixed();
  const second = Math.floor(time % 60)
    .toFixed()
    .toString()
    .padStart("0");
  return `${minute}:${second}`;
};

const getRandom = (low, high) => Math.floor((high - low) * Math.random() + low);

const shuffle = (arr) => {
  const newArr = arr.map((c) => ({ ...c }));
  for (let i = 0; i < newArr.length; i++) {
    const j = getRandom(0, i);
    const element = newArr[i];
    newArr[j] = newArr[i];
    newArr[i] = element;
  }
  return newArr;
};

export { getCount, getName, hackGetSongUrl, formatPlayTime, shuffle };
