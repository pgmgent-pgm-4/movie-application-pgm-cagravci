import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import styles from './SerieDetail.module.scss'

const SerieDetail = ({matchData}) => {
    const API_KEY = "d67321089641af48cd191befebe3f6f6"
    const API_URL = `https://api.themoviedb.org/3/tv/${matchData.params.id}?api_key=${API_KEY}&language=en-US`
    const API_REVIEWS = `https://api.themoviedb.org/3/tv/${matchData.params.id}/reviews?api_key=${API_KEY}&language=en-US`
    const API_CREDITS = `https://api.themoviedb.org/3/tv/${matchData.params.id}/credits?api_key=${API_KEY}&language=en-US`
    
    useEffect(async () => {
        fetchSerieDetail();
        fetchSerieReviews();
        fetchSerieCredits();
    }, [])

    const [serieDetail, setSerieDetail] = useState([])
    const [serieReviews, setSerieReviews] = useState([])
    const [serieCredits, setSerieCredits] = useState([])

    const fetchSerieDetail = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setSerieDetail(data)
        } catch (error) {
            
        }
       
    }

    const fetchSerieReviews = async () => {
        try {
            const response = await fetch(API_REVIEWS);
            const data = await response.json()
            setSerieReviews(data.results)
        } catch (error) {
            
        }
        
    }

    const fetchSerieCredits = async () => {
        try {
            const response = await fetch(API_CREDITS);
            const data = await response.json()
            setSerieCredits(data.cast)
        } catch (error) {
            
        }
      
    }
    
    return (
        <div className={styles.SerieDetail}>
            <div>
                  <div>

                <img src={`https://image.tmdb.org/t/p/w500/${serieDetail.poster_path}`} alt={serieDetail.title}/>
            </div>
            <div>
                <h1>{serieDetail.name}</h1>
                <p>{serieDetail.first_air_date}</p>
                <p> {serieDetail.vote_average}</p>
                <ul>
                        {serieDetail.genres && serieDetail.genres.map(genre => 
                            <li key={genre.id}>{genre.name}</li>
                        )}
                    </ul>
            </div>
            </div>

            <div>
                <h2>About</h2>
            <p>{serieDetail.overview}</p>
            </div>

            <div>
                <h1>Cast:</h1>
                <ul>
                    {serieCredits.map( (cast, index) => (
                        <li key={cast.id}>
                            <img src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>
                            <p>{cast.name}</p>
                            <p>As {cast.character}</p>
                        </li>    
                    ))}
                </ul>
            </div>

            <div>
                <h2>reviews:</h2>
                <ul>
                    {serieReviews.map( (review, index) => (
                        <li key={index}>
                            <div>
                                    <p>{review.author}</p>
                                   {review.author_details.rating && <p>({review.author_details.rating}/10)</p>}
                                </div>
                                <p>{review.content}</p>
                        </li>    
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SerieDetail
