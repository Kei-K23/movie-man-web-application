import { useLoaderData } from "react-router-dom";
import { getTvDetail } from "../helper";
const TvDetail = () => {
  const { detail } = useLoaderData();

  return <div>{detail}</div>;
};

export default TvDetail;

export async function tvDetailLoader({ params }) {
  const detail = await getTvDetail(params.id);

  return { detail };
}
