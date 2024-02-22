"use client"

import React from 'react'
import Formpage from '@/components/formpage'
import { useMutation,useQuery,useQueryClient } from '@tanstack/react-query'

import {fetchPost, updatePost } from '@/api/posts'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
const page = () => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const {id} = useParams();

    const {isLoading, isError, data: post, error} = useQuery({
        queryKey: ["posts", id],
        queryFn: () => fetchPost(id)
    });
    
    const updatePostMutation = useMutation({

        mutationFn: updatePost,
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: ["posts"],
                
            })
            router.push("/postlist")
        }
    })
    if(isLoading) return <div>loading...</div>
    if(isError) return `Error: ${error.message}`

    const handleSubmit = (updatePost:any) =>{

        updatePostMutation.mutate({id, ...updatePost})

    }
  return (
    <div>
        
        <Formpage onSubmit={handleSubmit} initialValue={post}/>

    </div>
  )
}

export default page