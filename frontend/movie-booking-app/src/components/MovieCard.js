import Link from "next/link";

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{"Movie Descriptions"}</p>
      <Link href={`/movies/${movie._id}`}>Book Tickets</Link>
    </div>
  );
}
