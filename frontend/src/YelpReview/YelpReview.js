import React, {useState, useEffect} from 'react';
import "./YelpReview.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



function YelpReview({yelpReviews}) {
    /*
    entire user
    time_created
    rating
    text
    */
   var temp = new Array(yelpReviews.rating);
    

    console.log('Testing', yelpReviews)

    return (
        <div className="yelp__root">
            <div className="yelp__body d-block d-sm-flex">
                <div className="yelp__pic_date">
                    <div>
                        <img src={yelpReviews.user.image_url} className="yelp__pic p-2"/>
                    </div>
                    <div className="yelp__date text-muted">
                        {yelpReviews.time_created}
                    </div>
                </div>
                <div className = "yelp__name_rating_text mt-2 mb-1 text-muted">
                    <div className="yelp__name">
                        <a href={yelpReviews.url}>
                            {yelpReviews.user.name}
                        </a>
                    </div>
                    <div className="yelp__rating">
                        { Array(yelpReviews.rating).fill(0).map((_, i) => 
                            <FontAwesomeIcon key={i} icon={faStar} className="text-primary text-sm" /> ) 
                        }
                    </div>
                    <div className="yelp__text text-sm">
                        {yelpReviews.text}
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default YelpReview
