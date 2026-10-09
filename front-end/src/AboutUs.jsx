import { useState, useEffect } from 'react'
import axios from 'axios'

function AboutUs() {
  const [about, setAbout] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5002/about')
      .then(res => setAbout(res.data))
      .catch(err => console.error(err))
  }, [])

  if (!about) return <p>Loading...</p>

  return (
    <main>
      <h1>About Us</h1>
      <img src={about.imageUrl} alt={about.name} style={{maxWidth: '300px'}} />
      {about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
    </main>
  )
}

export default AboutUs