import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { useRoutePath } from './hooks/useRoutePath'
import { NewsDetailPage } from './pages/NewsDetailPage'
import { NewsListPage } from './pages/NewsListPage'

function App() {
  const path = useRoutePath()
  const detailId = path.match(/^\/news\/([^/]+)$/)?.[1]

  return (
    <>
      <main className="min-h-svh bg-[#f7f3ea] text-[#162126]">
        <Header />
        {detailId ? <NewsDetailPage id={decodeURIComponent(detailId)} /> : <NewsListPage />}
      </main>
      <Footer />
    </>
  )
}

export default App
