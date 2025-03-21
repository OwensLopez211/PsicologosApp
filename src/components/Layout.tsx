import TopBar from './TopBar'
import Navbar from './Navbar'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen w-full bg-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}

export default Layout