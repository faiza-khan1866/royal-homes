import React from "react";
import Api from "../config";
import { useQuery, QueryCache } from "react-query";

function PortfolioPageApi() {
  const queryCache = new QueryCache();

  const fetchAllProjects = () => {
    return Api.get("/projects");
  };
  const fetchFitoutProjects = () => {
    return Api.get("/fitout-projects/fitout");
  };
  const fetchHomeProjects = () => {
    return Api.get("/fitout-projects/home");
  };
  const fetchSingleProjects = (route) => {
    return Api.get(`/projects/${route}`);
  };
  const fetchAllAccomplishment = () => {
    return Api.get(`/accomplishment-project`);
  };
  const fetchAllGalleryCategory = () => {
    return Api.get(`/gallery-categories`);
  };
  //!  apis query
  // get Project list category
  const GetProjectList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "AllProjectList",
      async () => {
        const response = await fetchAllProjects();
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
  const GetFitoutProjectList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "FitoutProjectList",
      async () => {
        const response = await fetchFitoutProjects();
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
  const GetHomeProjectList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "HomeProjectList",
      async () => {
        const response = await fetchHomeProjects();
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
  const GetAccomplishmentList = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "AllAccomplishmentList",
      async () => {
        const response = await fetchAllAccomplishment();
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
  const GetGalleryCategory = () => {
    const queryCache = new QueryCache();

    const QueryResponse = useQuery(
      "AllCategoryGallery",
      async () => {
        const response = await fetchAllGalleryCategory();
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
    fetchAllProjects,
    fetchSingleProjects,
    GetProjectList,
    GetFitoutProjectList,
    GetHomeProjectList,
    GetAccomplishmentList,
    GetGalleryCategory,
  };
}

export default PortfolioPageApi;
