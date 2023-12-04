import Layout from "./layout";
import Link from "next/link";
import { useRouter } from "next/router";
import MovieCard from "../components/MovieCard";
import axios from "axios"
import { useEffect, useState } from "react";

export default function MoviesPage() {
  const router = useRouter();
  const { msg } = router.query;
  // const [movies, setMovies] = useState([]);

  // //set movies
  // useEffect(() => {
  //   fetchMovies().then((data) => setMovies(extractMovies(data)));
  // }, []);

  // const fetchMovies = async () => {
  //   //using axios to fetch data from the api
  //   const response = await axios.get("http://localhost:8000/movies");
  //   console.log(response)
  //   const data = await response.data;
  //   return data;
  // };


  // function extractMovies(data) {
  //   let movies = {};

  //   Object.values(data.movies).forEach((show) => {
  //     const { MovieID, title, Start_Time, Datetime } = show;

  //     if (!movies[MovieID]) {
  //       movies[MovieID] = {
  //         MovieID,
  //         title,
  //         showtimes: [],
  //       };
  //     }

  //     movies[MovieID].showtimes.push({ Start_Time, Datetime });
  //   });

  //   return Object.values(movies);
  // }
 const  movies = [
    { MovieID: '1', title: 'Star Wars', showtimes: [{ Start_Time: '6:00 PM', Datetime: '2023-12-01' }] },
    { MovieID: '2', title: 'Transformers', showtimes: [{ Start_Time: '8:00 PM', Datetime: '2023-12-01' }] },
    {MovieID: '3', title: 'Jurassic Park', showtimes: [{ Start_Time: '9:00 PM', Datetime: '2023-12-01' }]},
    {MovieID : '4', title: 'The Lord of the Rings', showtimes: [{ Start_Time: '10:00 PM', Datetime: '2023-12-01' }]}
    // (3, 'Jurassic Park', 'Dinosaurs come to life'),
    // (4, 'The Lord of the Rings', 'Epic fantasy adventure'),
    // (5, 'Ninnu Kori', 'Telugu love drama'),
    // (6, 'Pokemon', 'Young boy exploring the world ');
  
   
  ];
  
  

  return (
    <Layout pageTitle="Movies">
      <Link href="/">Home</Link>
      <br />
      {msg ? <h3 className="red">{msg}</h3> : <></>}
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.MovieID}>
            <Link href={`/movies/${movie.MovieID}`}>
              <a>{movie.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
