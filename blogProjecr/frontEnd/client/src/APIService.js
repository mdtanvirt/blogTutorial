export default class APIService {
    static UpdateArticle(article_id, body) {
        return fetch('http://127.0.0.1:8000/api/articles/${article_id}', {
            'method': 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token d99d63159b78c68d788b8add06dede62d4c8a99a'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}
