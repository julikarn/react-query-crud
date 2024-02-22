
"use client"

import React from 'react'
import Formpage from '@/components/formpage'

import { useMutation,useQueryClient } from '@tanstack/react-query'

import { createPost } from '@/api/posts'
import { v4 as uuidv4 } from 'uuid';


const Addpost = () => {
  const createPostMutation = useMutation({
    mutationFn: createPost
  });
  const handleAddPost = (post:any) =>{

    createPostMutation.mutate({
      id: uuidv4(),
      ...post
    })
    

  }
  return (
    <div>
        <Formpage onSubmit={handleAddPost} initialValue={{}}/>
        page

    </div>
  )
}

export default Addpost