import { Outlet } from 'react-router'
import SideBar from '../Sidebar/sidebar'
import './home.css'

export default function Home() {
  return (
    <div id="wrapper" className="mt-10 rounded-2xl">
      <aside className="px-7 pt-10 rounded-l-3xl">
        <SideBar />
      </aside>
      <section className="section-wrapper">
        <Outlet />
      </section>
    </div>
  )
}
