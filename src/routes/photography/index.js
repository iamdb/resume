import React from 'react';
import Photography from './Photography';
import fetch from '../../core/fetch';

export const path = ['/photography','/photography/:gallery'];
export const action = async (state) => {
  const response = (state.params.gallery) ? await fetch('/graphql?query={photography(slug:"' + state.params.gallery + '"){smallThumb,largeThumb,caption}}') : null;
  const { data } = (state.params.gallery) ? await response.json() : {};
  state.context.onSetTitle('David Benjamin | photography');
  return <Photography photos={data && data.photography} slug={state.params.gallery} path={(state.params.gallery) ? path[1].replace(':gallery', state.params.gallery) : path[0]} />;
};
