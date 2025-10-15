import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'


export default function Home() {
return (
<div className="min-h-screen bg-gradient-to-b from-[#0b0f14] to-[#101726] text-gray-100 scroll-smooth">
<Head>
<title>Sanusi Al‑Amin — Portfolio</title>
<meta name="description" content="Sanusi Al‑Amin — Cybersecurity, Web3 & Full‑Stack Developer" />
</Head>


<div className="max-w-5xl mx-auto px-6 py-10 space-y-16">
<Header />
<main className="space-y-24">
<Hero />
<About />
<Projects />
<Skills />
<Contact />
</main>
</div>
</div>
)
}