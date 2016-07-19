import { GraphQLList as List } from 'graphql';
import fetch from '../../core/fetch';
import InstagramType from '../types/InstagramType';
import { ig } from '../../config';

const url = `https://api.instagram.com/v1/users/self/media/recent/?access_token=${ig.access_token}&count=16`;

let items = [];
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const instagram = {
  type: new List(InstagramType),
  resolve() {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.meta.code === 200) {
            items = data.data;
          }

          return items;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (items.length) {
        return items;
      }

      return lastFetchTask;
    }

    return items;
  },
};

export default instagram;

