import { axiosInstance } from "./config";
import { categoryMap } from "./singerCategory";

export const getBannerRequest = () => axiosInstance.get("/banner");

export const getRecommendListRequest = () => axiosInstance.get("/personalized");

export const getHotSingerListRequest = (count) =>
  axiosInstance.get(`/top/artists?offset=${count}`);

export const getSingerListRequest = (category, alpha, count) => {
  const { type, area } = !!category ? categoryMap.get(category) : {};
  return axiosInstance.get(
    `/artist/list?${
      type && area ? `type=${type}&area=${area}` : ""
    }&initial=${alpha.toLowerCase()}&offset=${count}`
  );
};

export const getRankListRequest = () => axiosInstance.get("/toplist/detail");

export const getAlbumDetailRequest = (id) =>
  axiosInstance.get(`/playlist/detail?id=${id}`);

export const getSingerInfoRequest = (id) =>
  axiosInstance.get(`/artists?id=${id}`);

export const checkMusic = (id) => axiosInstance.get(`/check/music?id={id}`);

// https://binaryify.github.io/NeteaseCloudMusicApi/#/?id=%e8%8e%b7%e5%8f%96%e9%9f%b3%e4%b9%90-url
export const getSongUrl = (id) => axiosInstance.get(`/song/url?id=${id}`);
