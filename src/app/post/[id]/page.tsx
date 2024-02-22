"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPost } from "@/api/posts";
import React from "react";
import { useParams } from "next/navigation";

const page = () => {
  const { id } = useParams();
  console.log("ids", id);
  console.log("type", typeof id);
  const num = parseInt(id, 10);
  console.log("num", typeof num);
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });
  if (isLoading) return <div>Loading the data. Please wait for a minute</div>;

  if (isError) return <div> Error: {error.message}</div>;

  console.log("singlepage", posts.id);
  return (
    <div>
      single page is here
      <div>{posts.id}</div>
      <div>{posts.title}</div>
      <div>{posts.body}</div>
    </div>
  );
};

export default page;
