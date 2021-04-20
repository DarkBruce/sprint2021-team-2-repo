import { hot } from 'react-hot-loader';
import React, {useState, useEffect} from 'react';
import './App.css';

import YelpReview from "./YelpReview";

const App = ({ yelpReviews, internalReviews, restaurantId, userId }) => (
  <div className="App">
    <h6>
      <span className="text-primary">YELP</span> REVIEWS
    </h6>
    {yelpReviews.reviews.map((review, idx) => <YelpReview key={idx} review={review} restaurantId={restaurantId} userId={userId}/>)}
    <hr/>
    <h6>
      <span className="text-primary">DINELINE</span> REVIEWS
    </h6>
    {internalReviews.map((review, idx) => <YelpReview key={idx} review={review} restaurantId={restaurantId} userId={userId} isInternal/>)}
  </div>
);

export default hot(module)(App);
