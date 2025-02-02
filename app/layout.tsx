import './globals.css'
import type { Metadata } from 'next'
import '@fontsource/poppins';
import Footer from './components/footer/Footer'
import NavBar from './components/nav/NavBar'


export const metadata: Metadata = {
  title: 'Catalogo - Artizau',
  description: 'Pendientes hechos con impresión 3D',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={'${poppins.className} text-slate-700'}>
        <div className='flex flex-col min-h-screen'>
          <NavBar />
          <main className='flex-grow'>
            {children}
          </main>
          <Footer />
        </div>

      </body>
    </html>
  )
}
