import CallToActionComponent from './components/CallToActionComponent/CallToActionComponent.lazy'
import FeatureSelectionComponent from './components/FeatureSelectionComponent/FeatureSelectionComponent.lazy'
import FooterComponent from './components/FooterComponent/FooterComponent.lazy'
import HeroComponent from './components/HeroComponent/HeroComponent.lazy'
import NavComponent from './components/NavComponent/NavComponent.lazy'
import TestimonialsComponent from './components/TestimonialsComponent/TestimonialsComponent.lazy'

function App() {
  return (
    <>
      <NavComponent />
      <HeroComponent />
      <FeatureSelectionComponent />
      <TestimonialsComponent />
      <CallToActionComponent />
      <FooterComponent />
    </>
  )
}

export default App
