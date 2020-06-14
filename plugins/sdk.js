import axios from 'axios';

export const sdk = {
  getData: async symbol => {
    return (await axios.get(`${process.env.BASE_URL}?symbol=${symbol}`)).data;
  },
  wsSubscribe: function(symbol) {
    return new WebSocket(`${process.env.WS_URL}${symbol.toLowerCase()}@depth`);
  },
};
