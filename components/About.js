const About = () => {
    return (
        <section id="about" className="section" aria-label="About me">
            <div className="section-heading">About</div>

            <div>
                <p className="mb-4">
                    I&apos;m a graduate student in {' '}
                    <a
                        className="font-bold text-slate-50 hover:text-teal-300 focus-visible:text-teal-300"
                        href="https://illinois.edu/"
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label="Upstatement (opens in a new tab)"
                    >
                        University of Illinois - Urbana Champaign
                    </a>{' '}
                    with a strong academic foundation in <span className="font-bold text-slate-50">computer science</span>, having explored subjects like discrete mathematics, theory of automata, and applied machine learning. Through my coursework and projects, I&apos;ve gained hands-on experience in building systems, analyzing complex problems, and developing practical solutions for real-world challenges.
                </p>
                <p className="mb-4">
                    I&apos;m particularly passionate about <span className="font-bold text-slate-50">databases, DevOps, and blockchain technologies</span>, and I enjoy exploring how these areas can intersect to create scalable, secure, and efficient applications. From deploying distributed systems to designing smart contracts, I love working on projects that push my technical skills and problem-solving abilities.
                </p>
                <p className="mb-4">
                    Outside of academics, I&apos;m an avid <span className="font-bold text-slate-50">sports enthusiast with a love for volleyball, soccer, and golf</span>. I appreciate the teamwork, strategy, and discipline these games demand, and I find they offer a refreshing balance to my technical work. Whether I&apos;m on the court, the field, or coding at my desk, I thrive on challenges and continuous learning.
                </p>
            </div>
        </section>
    )
}

export default About