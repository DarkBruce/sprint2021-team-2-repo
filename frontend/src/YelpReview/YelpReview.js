import React, {useState, useEffect} from 'react';
import "./YelpReview.css";


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
                    <div className="yelp__pic">
                        <img src={yelpReviews.user.image_url} className="yelp__pic"/>
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
                        temp.map((star, idx) => )
                        {yelpReviews.rating}
                    </div>
                    <div className="yelp__text">
                        {yelpReviews.text}
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default YelpReview
