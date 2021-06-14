/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { GithubUsersContext } from '../context/context'

// SingleUser component
import SingleUser from '../components/SingleUser'

const Home = () => {
  const { users, loading, searchUsers } = useContext(GithubUsersContext)
  const [value, setValue] = useState('')
  return (
    <>
      <div className='center'>
        <h1>Home {loading && 'loading ..'}</h1>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          searchUsers(value)
        }}
      >
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type='search'
          className='search-input'
          placeholder='Which developer are you looking for ?'
        ></input>
      </form>

      <section className='followers'>
        <div className='center'>
          <h3>
            {!loading &&
              users.length === 0 &&
              `No Github user found unser the name (${value}) `}
          </h3>
        </div>
        <div className='container'>
          {!loading &&
            users.map((user) => {
              return <SingleUser user={user} key={user.node_id} />
            })}
        </div>
      </section>
    </>
  )
}

export default Home
