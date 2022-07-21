import client from '../../api/client';

const advertsBaseUrl = '/v1/public';


export const getComic = () => {
  const url = `${advertsBaseUrl}/comics/21366?apikey=${process.env.REACT_APP_API_APIKEY}&ts=${process.env.REACT_APP_API_TS}&hash=${process.env.REACT_APP_API_HASH}`;
  return client.get(url);
};

export const getCharacters = () => {
  const url = `${advertsBaseUrl}/characters?apikey=${process.env.REACT_APP_API_APIKEY}&ts=${process.env.REACT_APP_API_TS}&hash=${process.env.REACT_APP_API_HASH}`;
  return client.get(url);
};
