
import { Footer } from '@/components/footer/footer'
import { Header } from '@/components/header/header'
import { ProjectsPage } from '@/components/containers/projectpage'

import Image from 'next/image'
import { IntroPage } from '@/components/containers/intropage'
import { AboutPage } from '@/components/containers/aboutus'




export default function Home() {
  return (
    <>
     <Header/>
     <IntroPage/>
     <ProjectsPage/>
     <AboutPage/>  
     <Footer />
    
    </>
  )
}
