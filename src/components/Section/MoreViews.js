import './MoreViews.css'
import { useEffect, useState, useRef } from 'react'

function Section() {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    fetch('https://kefidesenhos.vercel.app/draws.json')
      .then(response => response.json())
      .then(setData)
  }, [])

  if (!data || !data.length) return null

  return (
    <section>
      <div className="section">
        <div className="views">
          <a href="#">Mais vistos</a>
          <hr className="hr1" />
        </div>

        <div className="container">
          <div className="carousel" ref={carousel}>
            {data.map(item => {
              const { id, author, image } = item
              return (
                <div className="item" key={id}>
                  <div className="image">
                    <img src={image} alt="Drawing" />
                  </div>
                  <div className="info">
                    <span className="author">{author}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="more">
          <a href="#">ver mais</a>
          <hr className="hr2" />
        </div>
      </div>
    </section>
  )
}

export default Section
