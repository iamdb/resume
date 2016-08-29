import { GraphQLList as List, GraphQLString as StringType } from 'graphql';
import fetch from '../../core/fetch';
import _ from 'lodash';
import PhotographyType from '../types/PhotographyType';
import { cockpit } from '../../config';

const url = `${cockpit.url}${cockpit.api_path}/photography/getAll`;

let items = [];
let gallery;
let lastFetchTask;
let lastFetchTime = new Date(1970, 0, 1);

const photography = {
  type: new List(PhotographyType),
  args: {
    slug: {
      type: StringType
    }
  },
  resolve(res, {slug}) {
    if (lastFetchTask) {
      return lastFetchTask;
    }

    const reqBody = {
      "token": cockpit.api_key
    };

    const reqHeaders = {
      "Content-Type": "application/json; charset=utf-8"
    };

    if ((new Date() - lastFetchTime) > 1000 * 60 * 10 /* 10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url, { method: 'POST', body: JSON.stringify(reqBody), headers: reqHeaders })
        .then(response => response.json())
        .then(data => {
          items = data;
          gallery = _.find(items, {'slug': slug}).images;

          return gallery;
        })
        .finally(() => {
          lastFetchTask = null;
        });

      if (gallery) {
        gallery = _.find(items, {'slug': slug}).images;

        return gallery;
      }

      return lastFetchTask;
    }
    gallery = _.find(items, {'slug': slug}).images;

    return gallery;
  },
};

export default photography;

