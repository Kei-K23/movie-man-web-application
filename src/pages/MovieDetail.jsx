import { useLoaderData } from "react-router-dom";
import { getMovieDetail } from "../helper";
const Detail = () => {
  const { detail } = useLoaderData();
  console.log(detail);
  return <div>{detail.title}</div>;
};

export default Detail;

export async function movieDetailLoader({ params }) {
  const detail = await getMovieDetail(params.id);

  return { detail };
}
