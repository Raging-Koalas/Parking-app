
import Chat from '../components/Chat'
import Hero from '../components/Hero'
import Modal from '../components/Modal'
import Nav from '../components/Navbar'
import Weather from '../components/Weather'

export default function Home() {
  return (
 <div >
  <Nav/>
  <Weather/>
  <Hero/>
 
  <Chat />
    {/* <Modal/> */}
 </div>
  )
}
