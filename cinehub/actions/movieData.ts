import { getApiResponse } from "@libs/requests"

export const fetchTrending = async () => {
    const data = await getApiResponse("/trending/movie/week");
    const trending = data.results
    return trending
}