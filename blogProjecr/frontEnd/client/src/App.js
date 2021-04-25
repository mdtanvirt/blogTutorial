//import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import ArticaleList from './components/ArticaleList'
import Form from './components/Form'

function App() {

  const [articles, setArticles] = useState([]);
  const [editArticle, setEditArticle] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles/', {
      'method': 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token d99d63159b78c68d788b8add06dede62d4c8a99a'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp))
    .catch(error => console.log(error))
  },[])

  const editBtn = (article) => {
    setEditArticle(article)
  }

  return (
    <div className="App">
      <h1>Django React application</h1>
      <br/>
      <br/>
      <ArticaleList articles = {articles} editBtn = {editBtn}/>

      {editArticle ? <Form article = {editArticle}/> : null}

    </div>
  );
}

export default App;
