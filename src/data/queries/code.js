import { GraphQLList as List, GraphQLString as StringType } from 'graphql';
import fetch from '../../core/fetch';
import _ from 'lodash';
import CodeType from '../types/CodeType';
import { cockpit } from '../../config';

let items = [];
let lastFetchTask;
let lastSlug;
let lastFetchTime = new Date(1970, 0, 1);

const code = {
  type: new List(CodeType),
  args: {
    slug: {type: StringType}
  },
  resolve(root, {slug}) {
    const url = `${cockpit.url}${cockpit.api_path}/code/getAll`;

    const reqBody = {
      "token": cockpit.api_key
    };

    if (slug) {
      reqBody.filter.title_slug = slug;
    }

    const reqHeaders = {
      "Content-Type": "application/json; charset=utf-8"
    };

    if (lastFetchTask) {
      return lastFetchTask;
    }

    if (0 === 0 /*(new Date() - lastFetchTime) > 1000 * 60 * 10  10 mins */) {
      lastFetchTime = new Date();
      lastFetchTask = fetch(url, { method: 'POST', body: JSON.stringify(reqBody), headers: reqHeaders })
        .then(response => response.json())
        .then(data => {
          items = _.sortBy(data, 'custom-order');

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

export default code;
