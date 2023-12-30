// // MoviePlayer.js
// import React, { useState, useEffect } from 'react';
// import axios from './axios';

// const MoviePlayer = ({ movieId }) => {
//   const [movieDetails, setMovieDetails] = useState(null);
  

//   useEffect(() => {
//     const fetchMovieDetails = async () => {
//       try {
//         const response = await axios.get(
//           `https://api.themoviedb.org/3/movie/${movieId}?api_key=`
//         );
//         setMovieDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching movie details:', error);
//       }
//     };

//     fetchMovieDetails();
//   }, [movieId]);


//   if (!movieDetails) {
//     return <div>Loading...</div>;
//   }

//   const { title, overview, videos } = movieDetails;

//   return (
//     <div>
//       <h2>{title}</h2>
//       <p>{overview}</p>

//       {videos?.results?.length > 0 && (
//         <iframe
//           title={`${title} Trailer`}
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${videos.results[0].key}`}
//           frameBorder="0"
//           allowFullScreen
//         />
//       )}
//     </div>
//   );
// };

// export default MoviePlayer;
