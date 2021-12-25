const findGlobalRankIndex = (rankList) => {
  let left = 0,
    right = rankList.length - 1,
    mid;
  let res;

  const find = (low, high) => {
    mid = low + Math.floor((high - low) / 2);
    if (rankList[mid].tracks.length && !rankList[mid + 1].tracks.length) {
      return mid;
    } else if (!rankList[mid].tracks.length) {
      return find(low, mid - 1);
    } else if (rankList[mid].tracks.length) {
      return find(mid, high);
    }
  };

  res = find(left, right);

  return res + 1;

  // for (let i = rankList.length - 1; i > 0; i--) {
  //   if (!rankList[i].tracks.length && rankList[i - 1].tracks.length) {
  //     return i;
  //   }
  // }
};

export { findGlobalRankIndex as filterRanks };
