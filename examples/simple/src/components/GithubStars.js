/* @flow */
import React from 'react'
import { createContainer } from 'alveron'

const model = {
  user: 'rofrischmann',
  repo: 'alveron',
  stars: {}
}

const update = {
  fetchStars: (state, action) => {
    // if an error occurs or the repository does not exist
    if (action.error || !action.payload) {
      return state
    }

    return {
    ...state,
    stars: {
      ...state.stars,
      // we can access the input via action.meta
      [action.meta.user + '/' + action.meta.repo]: action.payload
    }
  }},
  setRepo: (state, action) => ({ ...state, repo: action.payload }),
  setUser: (state, action) => ({ ...state, user: action.payload })
}

const payload = {
  fetchStars: ({ user, repo }) =>
    fetch(`https://api.github.com/repos/${user}/${repo}`)
      .then(res => res.json())
      .then(data => data.stargazers_count)
}

const view = ({
  state: { stars, user, repo },
  setRepo,
  setUser,
  fetchStars
}) => {
  return (
    <div>
      User:
      <input onInput={e => setUser(e.target.value)} defaultValue={user} /><br />
      Repo:
      <input onInput={e => setRepo(e.target.value)} defaultValue={repo} /><br />
      <button onClick={() => fetchStars({ user, repo })}>Fetch Data</button>
      <br />
      <StarList stars={stars} />
    </div>
  )
}

const StarList = ({ stars }) => (
  <ul>{Object.keys(stars).map(repo => <li key={repo}>{repo}: {stars[repo]}</li>)}</ul>
)

export default createContainer({
  view,
  update,
  model,
  payload
})()
