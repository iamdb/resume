import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';
import Link from '../../components/Link';
import Navigation from '../../components/Navigation';

function Home({path}) {
	return (
		<div className={s.root}>
			<div className={s.container}>
				<div className={s.Body}>
					<p>Hello. I am David Benjamin.</p>
					<p>I am a <Link to="/code">front-end and node.js developer</Link> and <Link to="/photography">photographer</Link> living in Los Angeles.</p>
				</div>
				<Navigation path="/" />
			</div>
		</div>
	);
}

export default withStyles(Home, s);
