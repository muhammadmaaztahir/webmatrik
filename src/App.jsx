import './App.css'
import Card1 from './components/Card1'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import card1 from './assets/card1(1).png'
import card2 from './assets/card1(2).png'
import card3 from './assets/card1(3).png'
import DeliverData from './components/DeliverData'

function App() {
  return (
    <>
    
      <Navbar />
      <div className='lg:w-[65%] sm:w-full mx-auto'>
        <Hero />
        <div className='flex gap-0 lg:gap-10 flex-col lg:flex-row px-6 mb-10'>
          <Card1 img={card1} heading={"marketing services"} para={"Elevate your online visibility and Google ranking with our Professional SEO Solutions"} />
          <Card1 img={card2} heading={"design services"} para={"Amplify your digital footprint through our professional Logo Designing Services"} />
          <Card1 img={card3} heading={"development services"} para={"Transform your online presence with our competent Web Development Services"} />
        </div>
        <DeliverData/>
        
      </div>
    </>
  )
}

export default App
