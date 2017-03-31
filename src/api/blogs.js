import fetch from 'isomorphic-fetch';

const api = '/api/insights/';

export function query(category = 'news', sort) {
    return fetch(`${api}?categoryName=${category}` + (sort ? `&sortField=${sort}` : ''), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json()).then(resp => resp.posts);
}