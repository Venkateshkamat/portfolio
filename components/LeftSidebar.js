import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const LeftSidebar = ({ activeSection }) => {
  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          <Link href="/">Venkatesh Kamat</Link>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          Software Engineer
        </h2>
        <p className="mt-4 max-w-xs leading-normal">
          I build exceptional digital experiences with modern web technologies and clean, efficient code.
        </p>
        
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul role="list" className="mt-16 w-max">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  className={`nav-link ${activeSection === item.href.slice(1) ? 'active' : ''}`}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                >
                  <span
                    className={`nav-line ${
                      activeSection === item.href.slice(1)
                        ? 'w-16 bg-slate-200'
                        : 'w-8 bg-slate-600'
                    }`}
                  ></span>
                  <span
                    className={`nav-text ${
                      activeSection === item.href.slice(1) ? 'text-slate-200' : 'text-slate-500'
                    }`}
                  >
                    {item.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      <ul role="list" className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200 transition-colors"
            href="https://github.com/venkateshkamat"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub (opens in a new tab)"
          >
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200 transition-colors"
            href="https://www.linkedin.com/in/venkateshkamat/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="LinkedIn (opens in a new tab)"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li className="mr-5 text-xs shrink-0">
          <a
            className="block hover:text-slate-200 transition-colors"
            href="mailto:venkatesh.kamat07@gmail.com"
            aria-label="Email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  )
}

export default LeftSidebar