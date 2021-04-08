import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import yelpReviews from "./yelp_data.json";
import internalReviews from "./internal_data.json";

render(<App yelpReviews={yelpReviews} internalReviews={internalReviews} />, document.getElementById('root'));
