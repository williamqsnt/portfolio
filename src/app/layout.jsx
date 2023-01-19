import NavBar from '@/components/navbar'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>

       <NavBar />
        <div style={{height :"10vh"}}></div>
        {children}
        
        </body>
    </html>
  )
}
