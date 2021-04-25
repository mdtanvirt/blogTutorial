import React, {useState, useEffect} from 'react'
import APIService from '../APIService'

function Form(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() =>{
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description})
        .then(resp => console.log(resp))
    }

    return (
        <div>
            {props.article ? (
                <div className = "md-3">
                    <label htmlFor = "title" className = "form-label">Title</label>
                    <input type="text" className = "form-control" id = "title" placeholder = "Please enter title"
                    value = {title} onChange = {e => setTitle(e.target.value)}/>
                    <label htmlFor = "description" className = "form-label">Desctiption</label>
                    <textarea className = "form-control" id = "description" placeholder = "Enter Description" rows = "5"
                    value = {description} onChange = {e => setDescription(e.target.value)}/>
                    <br/>
                    <button onClick = {updateArticle} className = "btn btn-success">Update Article</button>
                </div>
            ) : null}
        </div>
    )
}

export default Form
