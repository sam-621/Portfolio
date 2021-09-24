import type { NextPage } from 'next'
import Header from '../components/containers/Header'
import Nav from '../components/containers/Nav'
import ProjectSection from '../components/containers/ProjectsSection'
import Title from '../components/molecules/Title'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Title title="Projects" />
      <ProjectSection />
    </>
  )
}

export default Home
