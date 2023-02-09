import './Home.scss'
import { HashLink as Link } from 'react-router-hash-link'

export default function Home() {
  return (
    <section className='container Home' id='Home'>
      <h1>Hello, Anne Here and Welcome to My Site!</h1>
      <div>
        <p>
        I am a software developer based in Calgary, AB, Canada. <br/> <br/>
        I love making apps that not only look aesthetically pleasing,
        but can be used to improve your day-to-day life!
        I'm always in awe when the code takes you from a blank screen to a beautiful,
        fully-function application. <br/> <br/>
        See below for more about me! <br/> <br/>
        <Link activeClass='active' className='link' spy to='#About' smooth>
        ⬇
          </Link>
        </p>
      </div>
    </section>
  )
}