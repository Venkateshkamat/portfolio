import { ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      period: '2024 — PRESENT',
      position: 'Engineering IT Security Student Consultant',
      company: 'Univerisity of Illinois Urbana Champaign',
      companyLink: 'https://engrit.illinois.edu/',
      description: 'Worked with IT and cross-functional teams to integrate security measures into ongoing projects and operations. Led security awareness training for engineering teams, promoting best practices and enhancing security culture. Developed scripts in Golang to scan and verify IOT device status for redundant asset tracking.',
      technologies: ['CrowdStrike', 'Axonius', 'Python', 'Golang']
    },
    {
      period: 'June 2022',
      position: 'Software Development Engineer Intern',
      company: 'Cloudegic It Solutions Pvt Ltd',
      companyLink: 'https://www.linkedin.com/company/cloudegic/',
      description: 'Led a team of four interns, driving product development from feature design to database schema creation while aligning deliverables with business goals. Built secure Solidity smart contracts, scalable Django backends, and integrated JWT authentication, Web3.py, and PostgreSQL, ensuring robust deployments through CI/CD pipelines.',
      technologies: ['Python', 'Solidity', 'AWS', 'PostgreSQL']
    },
    {
      period: 'June 2021',
      position: 'Software Development Engineer Intern',
      company: 'Code Gurukul',
      companyLink: 'https://gurukulcode.com/',
      description: 'Led backend development using the Python Django framework for an edtech startup, building and maintaining scalable server-side features. Designed and implemented RESTful APIs to support evolving business requirements and frontend integration. Handled user authentication and authorization, ensuring secure access and smooth user experience across the platform.',
      technologies: ['Python', 'JavaScript', 'Gitlab CI/CD']
    }
  ]

  return (
    <section id="experience" className="section" aria-label="Work experience">
      <div className="section-heading">Experience</div>
      <div>
        <ol className="group/list">
          {experiences.map((exp, index) => (
            <li key={index} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                
                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label={exp.period}>
                  {exp.period}
                </header>
                
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={exp.companyLink}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${exp.position} at ${exp.company} (opens in a new tab)`}
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                          <p>{exp.position}</p> <span className='font-light text-sm'>{exp.company}</span>
                          <ExternalLink className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true" />
                        </span>
                      </a>
                    </div>
                  </h3>
                  
                  <p className="mt-2 text-sm leading-normal">{exp.description}</p>
                  
                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {exp.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
        
        <div className="mt-12">
          <a
            className="inline-flex items-center font-medium leading-tight text-slate-200 group"
            aria-label="View Full Résumé (opens in a new tab)"
            href={`${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/resume.pdf`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                View Full
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                  Résumé
                </span>
                <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience