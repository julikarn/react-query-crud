"use client"
export async function fetchPosts(){

    const response = await fetch ('http://localhost:3001/posts');

    return response.json()
}

export async function fetchPost(id:any){

   const response = await fetch (`http://localhost:3001/posts/${id}`);

   return response.json()

}

export async function createPost(newPost:any){

    const response = await fetch('http://localhost:3001/posts',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    });

    return response.json()
}
export async function updatePost(updatePost:any){

    const response = await fetch(`http://localhost:3001/posts/${updatePost.id}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatePost)
    });

    return response.json()
}

export async function deletePost(id:any){

    const response = await fetch(`http://localhost:3001/posts/${id}`,{

        method: 'DELETE',
    })

    return response.json()
}