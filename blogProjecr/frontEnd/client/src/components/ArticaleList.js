import React from 'react'

function ArticaleList(props) {

    const editBtn = (article) => {
        props.editBtn(article)
    }

    return (
        <div>
            {props.articles && props.articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>{article.title}</h2>
                        <h4>{article.description}</h4>

                        <div className = "row">
                            <div className = "col-md-1">
                                <button className = "btn btn-primary" onClick = {() => editBtn(article)}>Update</button>
                            </div>
                            <div className = "col">
                                <button className = "btn btn-danger">Delete</button>
                            </div>
                            <hr className = "hrclass"/>
                        </div>

                        
                    </div>
                )
            })}
        </div>
    )
}

export default ArticaleList
