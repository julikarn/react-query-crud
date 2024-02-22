
"use client"

import React,{useState} from 'react'


const formpage = ({onSubmit, initialValue}:any) => {

    const [post,setPost] = useState({

        title:initialValue.title || "",
        body: initialValue.body || ""

    });
    console.log(post)
    const handleChangeInput = (e:any)=>{

        setPost({
            ...post,
            [e.target.name]:e.target.value
        })

    }
    const renderField = (label:string)=>(


        <div>
        <label>{label}</label>
        <input type="text" name={label.toLowerCase()} value={post[label.toLowerCase()]} onChange={handleChangeInput} />
    </div>


    )
       
   const handleSubmit = (e:any)=>{

     e.preventDefault();
     console.log(post)
     onSubmit(post)
     setPost({
        title: "",
        body: ""
     })
      
   } 
    
    
  return (
    <div>
        
        <form onSubmit={handleSubmit}>

            <br/>
        
           {renderField('title')}

           <br/>

           {renderField('body')}

           <button type="submit">Submit</button>
        </form>


    </div>
  )
}

export default formpage