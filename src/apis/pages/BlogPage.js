import Api from "../config";
import { useQuery, QueryCache } from "react-query";

// Blog Pages

function BlogPage() {
  const queryCache = new QueryCache();

  // apis
  const fetchBlogCategory = () => {
    return Api.get("/blog-categories");
  };
  const fetchBlogList = () => {
    return Api.get("/blogs");
  };
  const fetchBlogSingle = (route) => {
    return Api.get(`/blogs/${route}`);
  };
  const fetchAllComments = () => {
    return Api.get(`/comments`);
  };
  const PostAComment = (payload) => {
    return Api.post(`/comments`, payload);
  };
  //!  apis query
  // get blog category
  const GetBlogCategoryList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "BlogsCategoryListData",
      async () => {
        const response = await fetchBlogCategory();
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
  // get all blogs
  const GetBlogList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "BlogsListData",
      async () => {
        const response = await fetchBlogList();
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
  // sort most updated blogs
  const GetLatestBlogList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "PopularBlogsList",
      async () => {
        const response = await fetchBlogList();
        let UpdateData = [...response?.data];
        const popularPost = UpdateData?.sort((a, b) => {
          let item1 = new Date(a?.updated_at).getTime();
          let item2 = new Date(b?.updated_at).getTime();
          return item2 - item1;
        });
        return popularPost;
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
    fetchBlogCategory,
    fetchBlogList,
    fetchBlogSingle,
    fetchAllComments,
    PostAComment,
    // api Queries
    GetBlogCategoryList,
    GetBlogList,
    GetLatestBlogList,
  };
}

export default BlogPage;
