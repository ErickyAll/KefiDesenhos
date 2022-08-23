import './MoreViews.css'
import { useEffect, useState, useRef } from 'react'

function Section() {
  const [data, setData] = useState([])
  const carousel = useRef(null)

  useEffect(() => {
    fetch('http://localhost:3000/draws.json')
      .then(response => response.json())
      .then(setData)
  }, [])

  const scrollRight = setTimeout(
    e => {
      carousel.current.scrollLeft += carousel.current.offsetWidth
    },
    5000,
    10
  )

  const scrollLeft = setTimeout(
    e => {
      carousel.current.scrollLeft -= carousel.current.offsetWidth
    },
    1000,
    10
  )

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

          {/* <div className="buttons">
            <button onClick={handleLeftClick}></button>
            <button onClick={handleRightClick}>right</button>
          </div> */}
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
