import React, { useState } from 'react'

export const AddToDo = (addTodo) => {

    const [title,setTitle] =useState("");
    const [desc,setDesc] =useState("");

    const submit = (e) =>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description ca not be blanked");
        }
        else{
            addTodo(title,desc);
            setDesc("");
            setTitle("");
        }
       

    }
    return (
        <div className='container my-3'>
            <h3>Add To-Dos</h3>
            <form onSubmit={submit}>
                <div className="form-group mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

