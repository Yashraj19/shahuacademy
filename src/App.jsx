import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import CourseCard from './components/CourseCard'
import Features from './components/Features'
import Faculty from './components/Faculty'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="section-padding container" id="courses">
        <h2 className="title-md" style={{ textAlign: 'center', marginBottom: '40px' }}>Our Courses</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <CourseCard
            title="Engineering (PCM)"
            description="Comprehensive coaching for JEE Mains, Advanced, and MHT-CET. Master Physics, Chemistry, and Mathematics."
            icon="cpu"
          />
          <CourseCard
            title="Medical (PCB)"
            description="Dedicated preparation for NEET. detailed clarity in Physics, Chemistry, and Biology to crack the exam."
            icon="stethoscope"
          />
        </div>
      </div>
      <Features />
      <Faculty />
      <Footer />
    </div>
  )
}

export default App
