"use client";
import React from "react";
import Formpage from "@/components/formpage";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "@/api/posts";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Addpost from "../addpost/page";
const page = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    isLoading,
    isError,
    data: posts,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () =>{
      queryClient.invalidateQueries({queryKey: ['posts']});
    }
  })
  
  const handleDelete = (id:any)=>{
    deletePostMutation.mutate(id)
  }
  if (isLoading) return <div>Loading the data. Please wait for a minute</div>;

  if (isError) return <div> Error: {error.message}</div>;

  
  
  console.log("data", posts);
  return (
    <div>
      <Addpost/>
      {/* <Formpage /> */}

      {posts.map((users: any, index: any) => (
        <div key={index}>
          <Link href={`/post/${users.id}`}>
            <div>{users.id}</div>
            <div>{users.title}</div>
            <div>{users.body}</div>
          </Link>
          <Link href={`/edit/${users.id}`}>
            <button>Edit</button>
          </Link>

          <br />
          <button onClick={()=>handleDelete(users.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default page;
