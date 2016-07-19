import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Code.scss';
import Link from '../../components/Link';
import Header from '../../components/Header';

function Code({projects, path}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.Body}>
          <div className={s.Projects}>
            <div className={s.list}>
              {projects && projects.map(function(project, key){
                return (
                  <div className={s.Project} key={project.slug}>
                    <h1>{project.title}</h1>
                    <div className={s.info}>
                      <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>
                    </div>
                    <div className={s.Meta}>
                      <button data-text="View Site"><i className="ion-link"></i></button>
                      <div className={s.Badges}>
                        <div className={s.badge + ' ' + s.html5}><span>HTML 5</span></div>
                        <div className={s.badge + ' ' + s.css3}><span>CSS 3</span></div>
                        <div className={s.badge + ' ' + s.js}><span>React.js</span></div>
                        <div className={s.badge + ' ' + s.nodejs}><span>Node.js</span></div>
                        <div className={s.badge + ' ' + s.mobile}><span>Mobile</span></div>
                      </div>
                    </div>
                  </div>
                  );  
              })}
            </div>
          </div>
        </div>
        <Header path={path} />
      </div>
    </div>
  );
}

export default withStyles(Code, s);

// <p><i className="ion-social-github"></i><a href="https://github.com/iamdb" target="_blank">GitHub</a></p><p><i className="ion-social-linkedin"></i><a href="https://www.linkedin.com/in/davidabenjamin" target="_blank">LinkedIn</a></p><p><i className="ion-document"></i><a href="/docs/David_Benjamin_Resume.pdf" target="_blank">Resume</a></p>