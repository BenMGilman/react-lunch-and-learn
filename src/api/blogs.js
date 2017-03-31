import fetch from 'isomorphic-fetch';

const api = '/api/insights/?page=0&resultsPerPage=250';

export function query(sort, category = 'news') {
    return fetch(`${api}&categoryName=${category}` + (sort ? `&sortField=${sort}` : ''), {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(resp => resp.json()).then(resp => resp.posts);
}