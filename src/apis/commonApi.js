import React from "react";
import Api from "./config";

function commonApi() {
  const PostSubscriber = (formData) => {
    return Api.post("/subscribers", formData);
  };
  const PostContactUs = (formData, header) => {
    return Api.post("/form-handler", formData, header);
  };
  return { PostSubscriber, PostContactUs };
}

export default commonApi;
