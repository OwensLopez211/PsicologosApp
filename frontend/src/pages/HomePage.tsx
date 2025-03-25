import Hero from '../components/Hero'
import MobileHero from '../components/MobileHero'
import HowItWorks from '../components/HowItWorks'
import PsychologistCTA from '../components/PsychologistCTA'
import PageTransition from '../components/PageTransition'
import useScreenSize from '../hooks/useScreenSize'

const HomePage = () => {
  const { isMobile } = useScreenSize();

  return (
    <PageTransition>
      {isMobile ? <MobileHero /> : <Hero />}
      <HowItWorks />
      <PsychologistCTA />
    </PageTransition>
  )
}

export default HomePage