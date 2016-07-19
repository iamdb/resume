import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Photography.scss';
import Header from '../../components/Header';
import SubNavigation from '../../components/SubNavigation';
import Photo from '../../components/Photo';

function Photography({photos, path}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.Body}>
          <SubNavigation path={path} />
          <div className={s.Photos}>
            {photos.instagram && photos.instagram.map(function(photo,key){
              return <Photo key={key} src={photo.url} width={photo.width} height={photo.height}/>;
            })}
          </div>
        </div>
        <Header path={path} />
      </div>
    </div>
  );
}

export default withStyles(Photography, s);
