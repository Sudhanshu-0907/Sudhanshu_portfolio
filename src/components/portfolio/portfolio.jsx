import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">

      <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG3} alt="" />
          </div>
          <h3>Todolist Backend</h3>
          <div className="portfolio_item-CTA">
            <a href="https://github.com/Sudhanshu-0907/TodoList" className="btn" target="_blank">Github</a>
            <a href="https://still-wildwood-85700.herokuapp.com/" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Todolist React</h3>
          <div className="portfolio_item-CTA">
            <a href="https://github.com/Sudhanshu-0907/Todo-List-using-React-Frontend" className="btn" target="_blank">Github</a>
            <a href="#" className="btn btn-primary" >Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG2} alt="" />
          </div>
          <h3>Keeper App</h3>
          <div className="portfolio_item-CTA">
            <a href="https://github.com/Sudhanshu-0907/Keeper-App" className="btn" target="_blank">Github</a>
            <a href="#" className="btn btn-primary" >Live Demo</a>
          </div>
        </article>
        
        
        
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG4} alt="" />
          </div>
          <h3>Secrete App</h3>
          <div className="portfolio_item-CTA">
            <a href="https://github.com/Sudhanshu-0907/Secret-website" className="btn" target="_blank">Github</a>
            <a href="#" className="btn btn-primary" >Live Demo</a>
          </div>
        </article>
        
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG5} alt="" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio_item-CTA">
            <a href="https://github.com/Sudhanshu-0907/Sudhanshu_portfolio" className="btn" target="_blank">Github</a>
            <a href="https://sudhanshu-0907.github.io/Sudhanshu_portfolio" target="_blank" className="btn btn-primary" >Live Demo</a>
          </div>
        </article>
        
      </div>

    </section>
  )
}

export default portfolio