import React, {useState, useEffect} from 'react';
import "./YelpReview.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'



function YelpReview({ review, isInternal }) {
    const data = {
        userId: isInternal ? review.user : null,
        userName: isInternal ? review.user__username : (review.user ? review.user.name : null),
        profilePic: isInternal ? review.user__user_profile__photo : (review.user ? review.user.image_url : null),
        reviewId: isInternal ? null : review.id,
        reviewUrl: isInternal ? null : review.url,
        rating: review.rating,
        time: isInternal ? review.time : review.time_created,
        content: isInternal ? review.content : review.text,
        image1: isInternal ?  review.image1 : null,
        image2: isInternal ?  review.image2 : null,
        image3: isInternal ?  review.image3 : null,
        hidden: isInternal ? review.hidden : false,
        comments: review.comments
    } 

    return (
        <div className="yelp__root">
            <div className="yelp__body d-block d-sm-flex">
                <div className="yelp__pic_date">
                    <div>
                        <img src={data.profilePic} className="yelp__pic p-2"/>
                    </div>
                    <div className="yelp__date text-muted">
                        {data.time}
                    </div>
                </div>
                <div className = "yelp__name_rating_text mt-2 mb-1 text-muted">
                    <div className="yelp__name">
                        <a href={data.reviewUrl}>
                            {data.userName}
                        </a>
                    </div>
                    <div className="yelp__rating">
                        { Array(data.rating).fill(0).map((_, i) => 
                            <FontAwesomeIcon key={i} icon={faStar} className="text-primary text-sm" /> ) 
                        }
                    </div>
                    <div className="yelp__text text-sm">
                        {data.content}
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default YelpReview
