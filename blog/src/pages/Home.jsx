import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4">
        <Container>
          <div className="flex flex-col items-center">
            <div className="p-2 w-full text-center">
              <h1 className="text-3xl font-bold text-[#c3bef0] mb-4">
                Welcome to My Blog
              </h1>
              <p className="text-lg text-[#cca8e9] mb-6">
                Explore engaging articles and tutorials every day.
              </p>
            </div>
            <img
              src="https://assets.justinmind.com/wp-content/uploads/2018/07/10-hero-image-website-ideas-to-inspire-you-header-3-1024x655.png"
              alt="Blog Hero"
              className="w-full max-w-3xl rounded-lg shadow-lg"
            />
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-full sm:w-1/2 md:w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home