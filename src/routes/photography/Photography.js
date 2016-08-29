import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Photography.scss';
import { cockpit } from '../../config';
import Header from '../../components/Header';
import SubNavigation from '../../components/SubNavigation';
import Photo from '../../components/Photo';

function Photography({photos, path, slug}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Header path={path} />
        <div className={s.Body}>
          {(!photos) ?
            <div className={s.Bio}>I am photographer with 5+ years of concert and event photography experience. My work has been published in the Los Angeles Times, Relix Magazine, FloodMagazine.com, Buzzbands.la and LA Record.</div>
            : ''
          }
          <SubNavigation path={path} home={(photos) ? false : true} />
          <div className={s.Photos}>
            {photos && photos.map(function(photo,key){
              return <Photo key={slug + '-' + key} src={photo.largeThumb} srcSmall={photo.smallThumb} caption={photo.caption} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Photography, s);