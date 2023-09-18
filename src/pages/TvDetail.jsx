import { useLoaderData } from "react-router-dom";
import { getDetail } from "../helper";

const TvDetail = () => {
  const { detail } = useLoaderData();

  return <div>{detail.name}</div>;
};

export default TvDetail;

export async function tvDetailLoader({ params }) {
  const detail = await getDetail(params.id);

  return { detail };
}
