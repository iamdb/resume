import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Navigation from '../../components/Navigation';

function Home({path}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.Header}>
          <p>Hello. I am David Benjamin.</p>
          <p>I am a front-end and node.js developer living in Los Angeles.</p>
        </div>
        <div className={s.Body}>
          <p>Selected Work:</p>
          <ul>
            <li><a href="http://microearths.com/" target="_blank">Micro Earths</a></li>
            <li><a href="http://www.unionandwebster.com/" target="_blank">Union+Webster</a></li>
            <li><a href="http://www.projectprometheus.com/" target="_blank">Project <em>Prometheus</em></a></li>
            <li><a href="http://go-vmware.com/whyvcloudairondemand/" target="_blank">VMware vCloud Air On Demand</a></li>
            <li><a href="http://thesecondbestexoticmarigoldhotel.com/" target="_blank"><em>The Second Best Exotic Marigold Hotel</em></a></li>
            <li><a href="http://go-vmware.com/vmworld2014/" target="_blank">VMworld Europe</a></li>
            <li><a href="http://arresteddevelopment.wikia.com/wiki/You're_Gonna_Get_Some_Walk-Ons_fan_contest" target="_blank"><em>Arrested Development</em>'s You're Gonna Get Some Walk-Ons</a></li>
          </ul>
          <p><i className="fa fa-github"></i> <a href="https://github.com/iamdb" target="_blank">GitHub</a></p>
          <p><i className="fa fa-linkedin"></i> <a href="https://www.linkedin.com/in/davidabenjamin" target="_blank">LinkedIn</a></p>
          <p><i className="fa fa-file-text-o"></i> <a href="/docs/David_Benjamin_Resume.pdf" target="_blank">Resume</a></p>
        </div>
        <div className={s.Footer}>
          <p>I am also a <Link to="/photography">photographer</Link>, dog owner and music lover.</p>
        </div>
        <Navigation bottom={true} path={path} />
      </div>
    </div>
  );
}

export default withStyles(Home, s);
