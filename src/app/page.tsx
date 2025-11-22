import styles from './page.module.css'
import { About } from '../components/About/About'
import { Education } from '../components/Education/Education'
import { Contact } from '../components/Contact/Contact'
import { Experience } from '../components/Experience/Experience'
import { Hero } from '../components/Hero/Hero'
import { Navbar } from '../components/Navbar/Navbar'
import { Projects } from '../components/Projects/Projects'
import { Certifications } from '../components/Certifications/Certifications'
import { Achievements } from '../components/Achievements/Achievements'

export default function Home() {
  return (
    <main className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Certifications />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  )
}
