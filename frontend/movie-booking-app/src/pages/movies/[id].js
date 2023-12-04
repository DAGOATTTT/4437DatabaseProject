// pages/movies/[id].js
import Layout from "../layout";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";



const movies = [
  { MovieID: '1', title: 'Star Wars', showtimes: [{ Start_Time: '6:00 PM' , Datetime: '2023-12-01' }, {Start_Time: '8:00 PM' , Datetime: '2023-12-01'}, { Start_Time: '5:00 PM' , Datetime: '2023-12-01'}] },
    { MovieID: '2', title: 'Transformers', showtimes: [{ Start_Time: '8:00 PM', Datetime: '2023-12-01' }] },
    {MovieID: '3', title: 'Jurassic Park', showtimes: [{ Start_Time: '9:00 PM', Datetime: '2023-12-01' }]},
    {MovieID : '4', title: 'The Lord of the Rings', showtimes: [{ Start_Time: '10:00 PM', Datetime: '2023-12-01' }]}
];

export default function MovieDetails() {
  const router = useRouter();
  const { movieId } = router.query;

  // Find the movie by ID
  const movie = movies.find((m) => m.movieID === movieId);

  // Render movie details or a not found message
  return (
    <Layout>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <h3>Showtimes</h3>
          <ul>
            {movie.showtimes.map((showtime, index) => (
              <li key={index}>
                {showtime.Datetime} at {showtime.Start_Time}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </Layout>
  );
}
