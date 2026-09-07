import type { IconType } from 'react-icons'
import {
  SiSpringboot,
  SiNodedotjs,
  SiFastapi,
  SiDjango,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiHtml5,
  SiMongodb,
  SiPostgresql,
  SiFlyway,
  SiTerraform,
  SiGithubactions,
  SiGit,
  SiGnubash,
  SiPytest,
  SiVite,
  SiJunit5,
  SiZig,
  SiRust,
  SiNeovim,
  SiTmux,
  SiDocker,
  SiRedux,
  SiJenkins,
  SiJest,
  SiBlazor,
  SiDotnet,
  SiC,
  SiElasticsearch,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import {
  LuCloud,
  LuBraces,
  LuDatabase,
  LuGitBranch,
  LuTestTube,
  LuServer,
  LuVolleyball,
  LuDumbbell,
  LuCookingPot,
  LuGamepad2,
  LuBookHeadphones,
  LuDownload,
  LuGithub,
  LuBriefcase,
  LuBookOpen,
  LuBrain,
  LuGraduationCap,
  LuLayers,
  LuRocket,
  LuFlaskConical,
  LuDrama,
  LuPlug,
} from 'react-icons/lu'

type SkillTag = 'prod' | 'personal'

type Skill = {
  name: string
  icon?: IconType
  tags?: SkillTag[]
}

type SkillGroup = {
  title: string
  icon: IconType
  skills: Skill[]
}

const skillTagInfo: Record<SkillTag, { icon: IconType; label: string }> = {
  prod: { icon: LuRocket, label: 'Deployed to production' },
  personal: { icon: LuFlaskConical, label: 'Used in a personal project' },
}

type Role = {
  org: string
  title: string
  dates: string
  location: string
  entries: { period?: string; client?: string; text: string }[]
}

type TimelineGroup = { period?: string; items: { client?: string; text: string }[] }

function groupEntries(entries: Role['entries']): TimelineGroup[] {
  const groups: TimelineGroup[] = []
  for (const entry of entries) {
    const last = groups[groups.length - 1]
    if (last && last.period && last.period === entry.period) {
      last.items.push({ client: entry.client, text: entry.text })
    } else {
      groups.push({
        period: entry.period,
        items: [{ client: entry.client, text: entry.text }],
      })
    }
  }
  return groups
}

const groups: SkillGroup[] = [
  {
    title: 'Back End',
    icon: LuBraces,
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, tags: ['prod'] },
      { name: 'Node.js', icon: SiNodedotjs, tags: ['prod'] },
      { name: 'Hapi.js', icon: SiNodedotjs, tags: ['prod'] },
      { name: '.NET', icon: SiDotnet, tags: ['prod'] },
      { name: 'FastAPI', icon: SiFastapi, tags: ['personal'] },
      { name: 'Django', icon: SiDjango, tags: ['personal'] },
    ],
  },
  {
    title: 'Front End',
    icon: LuCloud,
    skills: [
      { name: 'React', icon: SiReact, tags: ['prod', 'personal'] },
      { name: 'Redux', icon: SiRedux, tags: ['prod'] },
      { name: 'Next.js', icon: SiNextdotjs, tags: ['personal'] },
      { name: 'Blazor', icon: SiBlazor, tags: ['prod'] },
      { name: 'TypeScript', icon: SiTypescript, tags: ['prod', 'personal'] },
      { name: 'JavaScript', icon: SiJavascript, tags: ['prod', 'personal'] },
      { name: 'CSS', icon: SiCss, tags: ['prod'] },
      { name: 'Sass', icon: SiSass, tags: ['prod'] },
      { name: 'Tailwind', icon: SiTailwindcss, tags: ['prod', 'personal'] },
      { name: 'HTML', icon: SiHtml5, tags: ['personal'] },
    ],
  },
  {
    title: 'Data',
    icon: LuDatabase,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, tags: ['prod', 'personal'] },
      { name: 'AWS Aurora', icon: FaAws, tags: ['prod'] },
      { name: 'DynamoDB', icon: FaAws, tags: ['prod'] },
      { name: 'MongoDB', icon: SiMongodb, tags: ['personal'] },
      { name: 'Elasticsearch', icon: SiElasticsearch, tags: ['prod'] },
      { name: 'Flyway', icon: SiFlyway, tags: ['prod'] },
    ],
  },
  {
    title: 'Infrastructure & CI/CD',
    icon: LuServer,
    skills: [
      { name: 'Terraform', icon: SiTerraform, tags: ['prod', 'personal'] },
      { name: 'AWS', icon: FaAws, tags: ['prod', 'personal'] },
      { name: 'AWS CLI', icon: FaAws, tags: ['personal'] },
      { name: 'Docker', icon: SiDocker, tags: ['personal'] },
      { name: 'GitHub Actions', icon: SiGithubactions, tags: ['prod', 'personal'] },
      { name: 'Jenkins', icon: SiJenkins, tags: ['prod'] },
      { name: 'Bash', icon: SiGnubash, tags: ['prod'] },
    ],
  },
  {
    title: 'Testing',
    icon: LuTestTube,
    skills: [
      { name: 'Playwright', icon: LuDrama, tags: ['prod'] },
      { name: 'Jest', icon: SiJest, tags: ['prod'] },
      { name: 'Vite', icon: SiVite, tags: ['prod'] },
      { name: 'JUnit', icon: SiJunit5, tags: ['prod'] },
      { name: 'pytest', icon: SiPytest, tags: ['personal'] },
    ],
  },
  {
    title: 'Tools & Interests',
    icon: LuGitBranch,
    skills: [
      { name: 'Neovim', icon: SiNeovim, tags: ['personal'] },
      { name: 'tmux', icon: SiTmux, tags: ['personal'] },
      { name: 'Git', icon: SiGit, tags: ['prod', 'personal'] },
      { name: 'Zig', icon: SiZig, tags: ['personal'] },
      { name: 'C', icon: SiC, tags: ['personal'] },
      { name: 'Rust', icon: SiRust, tags: ['personal'] },
      { name: 'API Design', icon: LuPlug, tags: ['prod', 'personal'] },
    ],
  },
]

const roles: Role[] = [
  {
    org: 'QCI (Quality Consulting Inc.)',
    title: 'Senior Full Stack Developer',
    dates: 'July 2024 — Current',
    location: 'Des Moines, IA',
    entries: [
      {
        period: 'Mid 2026 — Current',
        client: 'John Deere',
        text: 'Delivered front-end feature work and state management for a new React and TypeScript data-entry-heavy application; extended the same Spring Boot API with S3 file management and additional database features.',
      },
      {
        period: 'Mid 2026 — Current',
        client: 'Michigan Health Association',
        text: 'Took on an expanded role rewriting the legacy ASP.NET application in Blazor with C# and Razor components, initially scoped to evaluate AI-assisted development on a business-logic-heavy codebase before the team shifted to applying AI more selectively; skipped the usual upfront framework ramp-up since that knowledge was expected to come through AI assistance instead.',
      },
      {
        period: 'Early 2026',
        client: 'John Deere',
        text: 'Integrated Datadog metrics and observability alongside package updates; delivered micro-frontend feature work supporting bulk operations; added CDN caching to website infrastructure.',
      },
      {
        period: 'Early 2026',
        client: 'Michigan Health Association',
        text: 'Supported a legacy ASP.NET application by fixing bugs and delivering enhancements to the existing system.',
      },
      {
        period: 'Late 2025',
        client: 'John Deere',
        text: 'Continued front-end feature work including major library upgrades; continued to manage infrastructure with Terraform; expanded database and API usage to support data validation.',
      },
      {
        period: 'Mid 2025',
        client: 'John Deere',
        text: 'Built a Spring Boot REST API from scratch managing DynamoDB, RDS, and SQS; set up full testing along with Datadog metrics and visibility.',
      },
      {
        period: 'Early 2025',
        client: 'John Deere',
        text: 'Delivered React and TypeScript feature work; rewrote an existing application to improve performance; expanded integration and end-to-end test coverage; established database management for a microservice with Terraform deployment and Flyway migrations.',
      },
      {
        period: 'Late 2024',
        client: 'John Deere',
        text: 'Maintained existing applications through package upgrades, improving documentation and test coverage while building business domain knowledge.',
      },
    ],
  },
  {
    org: 'UnitedHealth Group (Surest)',
    title: 'Data Science Intern',
    dates: 'May 2022 — May 2024',
    location: 'Minneapolis, MN',
    entries: [
      {
        text: 'Analyzed text message campaign engagement using Python, Pandas, and SQL.',
      },
      {
        text: 'Built a question-answering bot using sentence transformers and a custom embedding-model vector store deployed with MLflow; extended search with embedding models tuned against local Elasticsearch instances.',
      },
      {
        text: 'Contributed to PySpark pipelines in Databricks and Ascend using AWS S3, GitHub, and Jenkins; presented findings to groups of up to 40 people.',
      },
    ],
  },
]

const interests: { label: string; icon: IconType }[] = [
  { label: 'basketball', icon: LuVolleyball },
  { label: 'lectures & talks', icon: LuBookHeadphones },
  { label: 'lifting weights', icon: LuDumbbell },
  { label: 'cooking', icon: LuCookingPot },
  { label: 'video games', icon: LuGamepad2 },
]

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon
  return (
    <div className={`skill-card${Icon ? '' : ' no-icon'}`}>
      {Icon && <Icon />}
      <div className="skill-name">{skill.name}</div>
      {skill.tags && skill.tags.length > 0 && (
        <div className="skill-tags">
          {skill.tags.map((tag) => {
            const TagIcon = skillTagInfo[tag].icon
            return (
              <span key={tag} className="skill-tag" title={skillTagInfo[tag].label}>
                <TagIcon />
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-badge">Senior Full Stack Developer</div>
        <h1>Ethan Rohman</h1>
        <p className="tagline">
          Building fast APIs, clean front ends, and infrastructure that lasts.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/resume.pdf" download="ethanrohman_resume.pdf">
            <LuDownload /> Download Resume
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/EthanRohman93"
            target="_blank"
            rel="noreferrer"
          >
            <LuGithub /> GitHub
          </a>
        </div>
      </header>

      <section className="section">
        <div className="section-header">
          <LuBookOpen />
          <h2>About</h2>
          <span className="rule" />
        </div>
        <div className="prose about-card">
          <p>
            My expertise is on the backend: building APIs, shaping data
            models, and keeping the infrastructure underneath them running
            cleanly. It's also knowing the trade-offs between solutions for
            a given problem and implementing each one as intended. This
            discipline helps keep lines of code down, bugs rare, and
            systems maintainable. For John Deere, I've taken early
            proof-of-concept work and turned it into production-grade APIs
            and backend systems. For Michigan Health Association, I've been
            rewriting the whole legacy application, not just the backend,
            onto modern infrastructure and libraries after years of
            incremental changes across a rotation of consulting firms.
            Taking on both of those projects taught me more about building
            durable software than sticking to one comfortable stack ever
            could. I love learning about software broadly, and if I had
            more time I'd like to explore a low-level language. Work,
            family, friends, and daily obligations don't leave much free
            time, so I listen to lectures and interviews that might contain
            valuable wisdom about tech, philosophy, or the world, hoping to
            get to Dante, Homer, and Plato soon.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <LuBrain />
          <h2>Philosophy and Approach</h2>
          <span className="rule" />
        </div>
        <div className="prose about-card">
          <p>
            I build my understanding of the world on universal truths, truths
            that hold constant regardless of context instead of depending on
            an assumed set of conditions. Theories can perform beautifully
            while their suppositions hold, but their reliability diminishes
            the moment reality contradicts those suppositions. For example,
            Newton's laws have to be discarded when dealing with quantum
            particles or supermassive objects such as black holes. Intuition
            has to be grounded in universal truths for the same reason
            induction and deduction cannot be trusted alone, both only draw
            on the data
            points that have already been recorded, so neither can account
            for what those data points leave out. I lean on intuition
            instead, in the sense Edgar Allan Poe used the word: an
            imaginative leap in which induction and deduction happen at once,
            rapidly, closing the gap that incomplete data alone leaves open.
          </p>
          <p>
            I bring that same discipline to programming. Before I trust my
            intuition, I read the documentation and API references closely,
            because that is the closest thing to a recorded truth for the
            system I am building against, what a library guarantees, what an
            API expects, what a framework assumes, instead of what I assume
            it does. Some of those constraints never change no matter the
            stack, memory has to be allocated and released, networks drop and
            retry, state has to live somewhere, and they hold underneath
            whatever changes on top of them. Programming style is intuition,
            and intuition only works when it operates inside real constraints
            instead of assumed ones.
          </p>
          <p>
            Finding the right abstraction works the same way. It is an
            intuitive leap that takes a set of constraints, whether from
            documentation, dependencies, or the libraries in use, and turns
            them into a structure that keeps working once those constraints
            are actually tested. Finding a universal truth follows the
            identical process, stripping away the suppositions a law depends
            on until what is left still holds, and understanding a codebase
            comes down to the same thing, finding the abstraction that the
            real constraints, not the assumed ones, will actually support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <LuBriefcase />
          <h2>Experience</h2>
          <span className="rule" />
        </div>
        <div className="timeline">
          {roles.map((role) => (
            <article key={role.org} className="role">
              <div className="role-head">
                <h3>{role.org}</h3>
                <span className="role-dates">{role.dates}</span>
              </div>
              <div className="role-sub">
                {role.title} · {role.location}
              </div>
              <div className="tl">
                {groupEntries(role.entries).map((group, gi) =>
                  group.period && group.items.length > 1 ? (
                    <div key={gi} className="tl-group">
                      <div className="tl-subhead">{group.period}</div>
                      {group.items.map((item, ii) => (
                        <div key={ii} className="tl-item">
                      <div className="tl-head">
                        {item.client && <span className="tl-tag">{item.client}</span>}
                      </div>
                          <p className="tl-text">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div key={gi} className="tl-item">
                      <div className="tl-head">
                        {group.period && (
                          <span className="tl-period">{group.period}</span>
                        )}
                        {group.items[0].client && (
                          <span className="tl-tag">{group.items[0].client}</span>
                        )}
                      </div>
                      <p className="tl-text">{group.items[0].text}</p>
                    </div>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <LuLayers />
          <h2>Skills</h2>
          <span className="rule" />
        </div>
        <div className="skills-legend">
          {(Object.keys(skillTagInfo) as SkillTag[]).map((tag) => {
            const { icon: TagIcon, label } = skillTagInfo[tag]
            return (
              <span key={tag} className="skills-legend-item">
                <TagIcon className="skills-legend-icon" />
                {label}
              </span>
            )
          })}
        </div>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="section">
          <div className="section-header">
            <group.icon />
            <h2>{group.title}</h2>
            <span className="rule" />
          </div>
          <div className="grid">
            {group.skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <div className="section-header">
          <LuGraduationCap />
          <h2>Education</h2>
          <span className="rule" />
        </div>
        <article className="role">
          <div className="role-head">
            <h3>Drake University</h3>
            <span className="role-dates">2020 — 2024</span>
          </div>
          <div className="role-sub">
            Bachelor of Science in Computer Science, Minor in Mathematics, GPA: 3.86 · Des Moines, IA
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-header">
          <LuGamepad2 />
          <h2>Personal Interests</h2>
          <span className="rule" />
        </div>
        <div className="interests">
          {interests.map((item) => (
            <span key={item.label} className="interest">
              <item.icon />
              {item.label}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
