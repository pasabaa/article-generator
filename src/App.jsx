import { ArticleGenerator } from './components/ArticleGenerator'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
function App() {
  return (
    <main className='w-11/12 mx-auto xl:w-4/12 md:w-8/12 lg:w-8/12 flex flex-col min-h-screen'>
      <Hero />
      <ArticleGenerator />
      <Footer />
    </main>
  )
}

export default App
