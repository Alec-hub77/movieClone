import { ArrowBack } from '@material-ui/icons';
import React from 'react';
import './watch.scss';
import {Link} from 'react-router-dom'

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <Link to="/">
          <ArrowBack />
          Home
        </Link>
      </div>
      <iframe
        className="video"
        src="https://www.youtube.com/embed/BcKpaJHXvzs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        autoPlay={1}
      ></iframe>
    </div>
  );
};

export default Watch;
