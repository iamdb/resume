import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Photography.scss';
import Navigation from '../../components/Navigation';

function Photography({photos, path}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.Header}>
          <div>follow me: <i className="fa fa-instagram"></i> <a href="http://instagram.com/iamdb" target="_blank">@iamdb</a></div>
          <Navigation path={path} />
        </div>
        <div className={s.Body}>
          {photos.instagram && photos.instagram.map(function(photo,key){
            return <div className={s.ig} key={key}><div><img src={photo.url} width={photo.width} height={photo.height}/><div className={s.likes}><i className="fa fa-heart"></i> {photo.likes}</div></div></div>;
          })}
        </div>
        <Navigation bottom={true} path={path} />
      </div>
    </div>
  );
}

export default withStyles(Photography, s);
