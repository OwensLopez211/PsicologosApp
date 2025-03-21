import Hero from '../components/Hero'
import Benefits from '../components/Benefits'
import HowItWorks from '../components/HowItWorks'
import PsychologistCTA from '../components/PsychologistCTA'
import PageTransition from '../components/PageTransition'

const HomePage = () => {
  return (
    <PageTransition>
      <Hero />
      <Benefits />
      <HowItWorks />
      <PsychologistCTA />
    </PageTransition>
  )
}

export default HomePage