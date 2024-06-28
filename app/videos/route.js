// pages/api/pexels.js
import axios from "axios";
import { NextResponse } from "next/server";

const PEXELS_API_KEY =
  "wfALvzKeL61rJlgDV3zVCG2BVQnRD7N1Mui97nU13TbDaXiK8kFsotXc";

const PIXABAY_KEY = "44667396-3889773dd829bee14e791e6e4";

export async function GET(request) {
  const params = request.nextUrl.searchParams;
  const query = params.get("query");
  const per_page = 200;
  const safe = true;

  try {
    const response = await axios.get("https://pixabay.com/api/videos/", {
      params: {
        q: query,
        per_page: per_page,
        key: PIXABAY_KEY,
        safesearch: safe,
      },
    });

    return NextResponse.json(response.data);
  } catch (error) {
    return NextResponse.json({
      error: "Error fetching videos | Query is null",
    });
  }
}
