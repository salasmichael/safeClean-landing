import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Nebulizacion from './components/Nebulizacion'
import HowItWorks from './components/HowItWorks'
import About from './components/About'
import Faq from './components/Faq'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Nebulizacion />
        <HowItWorks />
        <About />
        <Faq />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}
