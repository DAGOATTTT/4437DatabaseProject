// pages/movies/[id].js
import Layout from "../../components/layout";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

export default function MovieDetail({ movie }) {
  const router = useRouter();
  const { id } = router.query;

  const fetchSeating = async () => {
    c;
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout pageTitle={`Movie Detail - ${movie.title}`}>
      <h1>{movie.title}</h1>
      {/* Add more details as needed */}
      <Link href="/movies">Back to Movies</Link>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  // Fetch movie data from an API or database. Replace with your data fetching logic.
  const res = await fetch(`https://localhost/movie/${id}`);
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
}
