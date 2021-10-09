import React, {useEffect} from 'react'

export default function Home() {
  useEffect(() => {
    document.title = 'Amazon-clone.am'
  }, [])
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}
