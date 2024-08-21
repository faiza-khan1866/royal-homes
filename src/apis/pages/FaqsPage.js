import Api from "../config";
import { useQuery, QueryCache } from "react-query";

// Faqs Pages

function FaqsPage() {
  const fetchFaqsList = () => {
    return Api.get("/auth/faqs");
  };
  const GetFaqsList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "faqListData",
      async () => {
        const response = await fetchFaqsList();
        return response?.data;
      },
      {
        cache: queryCache,
        keepPreviousData: true,
        staleTime: 30000,
        cacheTime: 30000,
      }
    );
    return QueryResponse;
  };

  return {
    GetFaqsList,
  };
}

export default FaqsPage;
