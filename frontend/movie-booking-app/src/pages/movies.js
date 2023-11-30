import Layout from "./layout";
import Link from "next/link";
import { useRouter } from "next/router";
import MovieCard from "../components/MovieCard";

export default function MoviesPage() {
  const router = useRouter();
  const { msg } = router.query;
  const [movies, setMovies] = useState([]);

  //set movies
  useEffect(() => {
    fetchMovies().then((data) => setMovies(extractMovies(data)));
  }, []);

  const fetchMovies = async () => {
    //using axios to fetch data from the api
    const response = await axios.get("http://localhost:5000/movies");
    const data = await response.data;
    return data;
  };

  function extractMovies(data) {
    let movies = {};

    Object.values(data.movies).forEach((show) => {
      const { MovieID, title, Start_Time, Datetime } = show;

      if (!movies[MovieID]) {
        movies[MovieID] = {
          MovieID,
          title,
          showtimes: [],
        };
      }

      movies[MovieID].showtimes.push({ Start_Time, Datetime });
    });

    return Object.values(movies);
  }

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
