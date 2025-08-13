import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
  const projects = [
    {
      title: 'Chat-app',
      description: 'Built a real-time chat application using the MERN stack and Socket.io for instant messaging. Implemented user authentication, dynamic conversations, image uploads, and a responsive UI for a seamless experience.',
      image: '/chatapp.png',
      technologies: ['Socket.io', 'React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Zustand', 'CI/CD'],
      githubLink: 'https://github.com/Venkateshkamat/ChatApp',
      liveLink: 'https://chatapp-xlyo.onrender.com/',
      featured: true
    },
    {
      title: 'Auctx',
      description: 'Developed a decentralized auction platform with secure Ethereum-based transactions via Solidity smart contracts. Designed scalable data architectures using MySQL, MongoDB, and AWS services (RDS, DynamoDB, Redis, Memcached) for performance optimization.',
      image: '/auctx.png',
      technologies: ['Python', 'Web3.py', 'Reactjs', 'PostgreSQL'],
      githubLink: 'https://github.com/venkateshkamat/',
      liveLink: 'https://github.com/venkateshkamat/',
      featured: true
    },
    {
      title: 'Pokedex',
      description: 'This project is a simple implementation of Pokemon API',
      image: '/pokedex.png',
      technologies: ['Reactjs', 'PokeAPI', 'CSS Flex Box'],
      githubLink: 'https://github.com/Venkateshkamat/Pokedex',
      liveLink: 'https://github.com/Venkateshkamat/Pokedex',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with smooth animations and responsive design.',
      image: '/portfolio.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://yourportfolio.vercel.app',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with smooth animations and responsive design.',
      image: '/portfolio.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubLink: 'https://github.com/yourusername/portfolio',
      liveLink: 'https://yourportfolio.vercel.app',
      featured: false
    }
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="section" aria-label="Selected projects">
      <div className="section-heading">Projects</div>

      <div>
        {/* Featured Projects */}
        <ul className="group/list">
          {featuredProjects.map((project, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3>
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} (opens in a new tab)`}
                    >
                      <span>
                        {project.title}
                        <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true" />
                      </span>
                    </a>
                  </h3>

                  <p className="mt-2 text-sm leading-normal">{project.description}</p>

                  <div className="mt-2 flex items-center gap-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        className="text-slate-400 hover:text-slate-200 transition-colors"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="View live project"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="z-10 sm:order-1 sm:col-span-2">
                  <div className="relative">
<div className="relative aspect-[16/9] w-full rounded border-2 border-slate-200/10 bg-slate-700/50">
  <Image
    src={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}${project.image}`}
    alt={project.title}
    fill
    className="object-cover rounded"
  />
</div>

                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Other Notable Projects */}
        <div className="mt-12">
          <h3 className="mb-8 text-lg font-medium text-slate-200">Other Noteworthy Projects</h3>

          <ul className="group/list grid grid-cols-1 gap-4 sm:grid-cols-2">
            {otherProjects.map((project, index) => (
              <li key={index} className="group">
                <div className="relative rounded-md border border-slate-200/10 bg-slate-800/50 p-6 transition-all hover:bg-slate-800/80 hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-slate-200">{project.title}</h4>
                    <div className="flex items-center gap-2">
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="View on GitHub"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          className="text-slate-400 hover:text-slate-200 transition-colors"
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label="View live project"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="mt-2 text-sm text-slate-400">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-1">
                        <div className="text-xs font-medium text-slate-400">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 group"
            aria-label="View Full Project Archive (opens in a new tab)"
            href="https://github.com/venkateshkamat"
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full Project
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Archive
                </span>
                <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible/translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects