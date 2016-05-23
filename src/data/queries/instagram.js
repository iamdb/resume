import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import InstagramType from '../types/InstagramType';
import { ig } from '../../config';

// React.js News Feed (RSS)
const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ig.access_token}&count=16`;

let items = [];
let lastFetchTime = new Date(1970, 0, 1);

const instagram = {
  type: new List(InstagramType),
  resolve() {
    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.meta.code === 200) {
            items = data.data;
          }
        });
    }

    return items;
  },
};

export default instagram;
