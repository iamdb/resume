import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Code.scss';
import Link from '../../components/Link';
import Header from '../../components/Header';

function Code({projects, path}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Header path={path} />
        <div className={s.Body}>
          <div className={s.Bio}>
            I am a web developer with 6+ years of front-end and Node.js experience. I have a proven history of developing and deploying award-winning digital experiences for clients such as Fox, Netflix, Disney, Naughty Dog, Dodge, Cisco and VMware.
          </div>
          <div className={s.Projects}>
            {projects && projects.map(function(project, key){
              let badges = project.tags && project.tags.split(',');

              return (
                <div className={s.Project} key={project.slug}>
                  <div className={s.inner}>
                    <h1>{project.title}</h1>
                    <div className={s.info} dangerouslySetInnerHTML={{__html:project.description}}></div>
                    <div className={s.Meta}>
                      <a href={project.url} target="_blank" data-text={project.buttonText}>{project.buttonText}</a>
                      <div className={s.Badges}>
                        {badges && badges.sort().map(function(badge, key){
                          let badgeClass = badge.replace(/\./ig,'-').replace(/#/ig,'-').toLowerCase();

                          return <div key={project.slug + '-' + badge + '-' + key} className={s.badge + ' ' + s[badgeClass]}><span>{badge}</span></div>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                );  
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(Code, s);

// <p><i className="ion-social-github"></i><a href="https://github.com/iamdb" target="_blank">GitHub</a></p><p><i className="ion-social-linkedin"></i><a href="https://www.linkedin.com/in/davidabenjamin" target="_blank">LinkedIn</a></p><p><i className="ion-document"></i><a href="/docs/David_Benjamin_Resume.pdf" target="_blank">Resume</a></p>