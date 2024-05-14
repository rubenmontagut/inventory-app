import NavBar from '../navbar'
import './home.css'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div id="wrapper" className="">
        <aside className="">Aside</aside>
        <section className="">Dashboard</section>
      </div>
    </div>
  )
}
