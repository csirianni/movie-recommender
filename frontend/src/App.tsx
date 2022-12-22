import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { MovieMetaData } from './components/MovieCard';
import Navbar from './components/Navbar';
import { Recommendation } from './components/Recommendation';
import { getRecommendations } from './controller/Recommendation';
import { fetchMovieData } from './controller/Data';

function App() {
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendations, setRecommendations] = useState<number[]>([]);

  function toggleShowRecommendation() {
    setShowRecommendation(showRecommendation ? false : true);
  }

  async function updateRecommendations(exampleIDs: number[]) {
    console.log(exampleIDs);

    const recommendations: number[] = await getRecommendations(exampleIDs);
    console.log("THE RECOMMENDATIONS WITH App.tsx updateRecommendations")
    console.log(recommendations)
    // async function getMovieMetaData(movieID: number) {
    //   let apiData = await fetchMovieData(movieID);

    //   // convert option into movie metadata
    //   const properties: MovieMetaData = {
    //     title: apiData.title,
    //     overview: apiData.overview,
    //     voteAverage: apiData.vote_average,
    //     voteCount: apiData.vote_count,
    //     posterPath: `https://image.tmdb.org/t/p/original/${apiData.poster_path}`
    //   };

    //   return properties;
    // }
    // const recommendations = recommendationIDs.map(getMovieMetaData);
    // console.log("AFTER MAP: " + recommendations);
    setRecommendations(recommendations)
  }


  return (
    <>
      <Navbar />
      {!showRecommendation && <Form toggleShowRecommendation={toggleShowRecommendation} updateRecommendations={updateRecommendations} />}
      {showRecommendation && <Recommendation recommendations={recommendations} />}
    </>
  );
}

export default App;
