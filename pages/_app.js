// pages/_app.js
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // ensure loader shows at first mount; loader component will call onDone
    // nothing else needed here
  }, [])

  return (
    <>
      {loading ? <Loader onDone={() => setLoading(false)} /> : <Component {...pageProps} />}
    </>
  )
}
