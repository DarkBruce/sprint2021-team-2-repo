import { hot } from 'react-hot-loader';
import React, {useState, useEffect} from 'react';
import './App.css';

import YelpReview from "./YelpReview";
// import yelpReviews from "../../yelp_data.json";

const App = ({yelpReviews, internalReviews}) => (
  <div className="App">
    {yelpReviews.reviews.map((review, idx) => <YelpReview yelpReviews={review}/>)}
  </div>
);

// export default hot(module)(App);
export default App;
