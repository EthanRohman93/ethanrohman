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
  LuDownload,
  LuGithub,
  LuBriefcase,
  LuBookOpen,
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
  prod: { icon: LuRocket, label: 'deployed to production' },
  personal: { icon: LuFlaskConical, label: 'used in a personal project' },
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
    title: 'back end',
    icon: LuBraces,
    skills: [
      { name: 'spring boot', icon: SiSpringboot, tags: ['prod'] },
      { name: 'node.js', icon: SiNodedotjs, tags: ['prod'] },
      { name: 'hapi.js', icon: SiNodedotjs, tags: ['prod'] },
      { name: '.net', icon: SiDotnet, tags: ['prod'] },
      { name: 'fastapi', icon: SiFastapi, tags: ['personal'] },
      { name: 'django', icon: SiDjango, tags: ['personal'] },
    ],
  },
  {
    title: 'front end',
    icon: LuCloud,
    skills: [
      { name: 'react', icon: SiReact, tags: ['prod', 'personal'] },
      { name: 'redux', icon: SiRedux, tags: ['prod'] },
      { name: 'nextjs', icon: SiNextdotjs, tags: ['personal'] },
      { name: 'blazor', icon: SiBlazor, tags: ['prod'] },
      { name: 'typescript', icon: SiTypescript, tags: ['prod', 'personal'] },
      { name: 'javascript', icon: SiJavascript, tags: ['prod', 'personal'] },
      { name: 'css', icon: SiCss, tags: ['prod'] },
      { name: 'sass', icon: SiSass, tags: ['prod'] },
      { name: 'tailwind', icon: SiTailwindcss, tags: ['prod', 'personal'] },
      { name: 'html', icon: SiHtml5, tags: ['personal'] },
    ],
  },
  {
    title: 'data',
    icon: LuDatabase,
    skills: [
      { name: 'postgresql', icon: SiPostgresql, tags: ['prod', 'personal'] },
      { name: 'aws aurora', icon: FaAws, tags: ['prod'] },
      { name: 'dynamodb', icon: FaAws, tags: ['prod'] },
      { name: 'mongodb', icon: SiMongodb, tags: ['personal'] },
      { name: 'elasticsearch', icon: SiElasticsearch, tags: ['prod'] },
      { name: 'flyway', icon: SiFlyway, tags: ['prod'] },
    ],
  },
  {
    title: 'infrastructure & cicd',
    icon: LuServer,
    skills: [
      { name: 'terraform', icon: SiTerraform, tags: ['prod', 'personal'] },
      { name: 'aws', icon: FaAws, tags: ['prod', 'personal'] },
      { name: 'aws cli', icon: FaAws, tags: ['personal'] },
      { name: 'docker', icon: SiDocker, tags: ['personal'] },
      { name: 'github actions', icon: SiGithubactions, tags: ['prod', 'personal'] },
      { name: 'jenkins', icon: SiJenkins, tags: ['prod'] },
      { name: 'bash', icon: SiGnubash, tags: ['prod'] },
    ],
  },
  {
    title: 'testing',
    icon: LuTestTube,
    skills: [
      { name: 'playwright', icon: LuDrama, tags: ['prod'] },
      { name: 'jest', icon: SiJest, tags: ['prod'] },
      { name: 'vite', icon: SiVite, tags: ['prod'] },
      { name: 'junit', icon: SiJunit5, tags: ['prod'] },
      { name: 'pytest', icon: SiPytest, tags: ['personal'] },
    ],
  },
  {
    title: 'tools & interests',
    icon: LuGitBranch,
    skills: [
      { name: 'neovim', icon: SiNeovim, tags: ['personal'] },
      { name: 'tmux', icon: SiTmux, tags: ['personal'] },
      { name: 'git', icon: SiGit, tags: ['prod', 'personal'] },
      { name: 'zig', icon: SiZig, tags: ['personal'] },
      { name: 'c', icon: SiC, tags: ['personal'] },
      { name: 'rust', icon: SiRust, tags: ['personal'] },
      { name: 'api design', icon: LuPlug },
    ],
  },
]

const roles: Role[] = [
  {
    org: 'QCI (Quality Consulting Inc.)',
    title: 'software developer',
    dates: 'july 2024 — current',
    location: 'des moines, ia',
    entries: [
      {
        period: 'mid 2026 — current',
        client: 'john deere',
        text: 'delivered front-end feature work and state management for a new react and typescript data-entry-heavy application; extended the same spring boot api with s3 file management and additional database features.',
      },
      {
        period: 'mid 2026 — current',
        client: 'michigan health association',
        text: 'took an expanded role, beyond the earlier support work, rewriting the legacy asp.net application in blazor with c# and razor components. the rewrite was initially scoped to evaluate the viability of ai-assisted development on a business-logic-heavy codebase, with the team later shifting to applying ai selectively as needed. because framework knowledge was expected to come from ai assistance, the usual upfront ramp-up on libraries and frameworks was not carried out beforehand.',
      },
      {
        period: 'early 2026',
        client: 'john deere',
        text: 'integrated datadog metrics and observability alongside package updates; delivered micro-frontend feature work supporting bulk operations; added cdn caching to website infrastructure.',
      },
      {
        period: 'early 2026',
        client: 'michigan health association',
        text: 'supported a legacy asp.net application by fixing bugs and delivering enhancements to the existing system.',
      },
      {
        period: 'late 2025',
        client: 'john deere',
        text: 'continued front-end feature work including major library upgrades; continued to manage infrastructure with terraform; expanded database and api usage to support data validation.',
      },
      {
        period: 'mid 2025',
        client: 'john deere',
        text: 'built a spring boot rest api from scratch managing dynamodb, rds, and sqs; set up full testing along with datadog metrics and visibility.',
      },
      {
        period: 'early 2025',
        client: 'john deere',
        text: 'delivered react and typescript feature work; rewrote an existing application to improve performance; expanded integration and end-to-end test coverage; established database management for a microservice with terraform deployment and flyway migrations.',
      },
      {
        period: 'late 2024',
        client: 'john deere',
        text: 'maintained existing applications through package upgrades, improving documentation and test coverage while building business domain knowledge.',
      },
    ],
  },
  {
    org: 'UnitedHealth Group (Surest)',
    title: 'data science intern',
    dates: 'may 2022 — may 2024',
    location: 'minneapolis, mn',
    entries: [
      {
        text: 'analyzed text message campaign engagement using python, pandas, and sql.',
      },
      {
        text: 'built a question-answering bot using sentence transformers and a custom embedding-model vector store deployed with mlflow; extended search with embedding models tuned against local elasticsearch instances.',
      },
      {
        text: 'contributed to pyspark pipelines in databricks and ascend using aws s3, github, and jenkins; presented findings to groups of up to 40 people.',
      },
    ],
  },
]

const interests: { label: string; icon: IconType }[] = [
  { label: 'basketball', icon: LuVolleyball },
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
        <div className="hero-badge">full stack software developer</div>
        <h1>ethan rohman</h1>
        <p className="tagline">
          building fast apis, clean front ends, and infrastructure that lasts.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="/resume.pdf" download="ethanrohman_resume.pdf">
            <LuDownload /> download resume
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/EthanRohman93"
            target="_blank"
            rel="noreferrer"
          >
            <LuGithub /> github
          </a>
        </div>
      </header>

      <section className="section">
        <div className="section-header">
          <LuBookOpen />
          <h2>about</h2>
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
          <h2>experience</h2>
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
          <h2>skills</h2>
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
          <h2>education</h2>
          <span className="rule" />
        </div>
        <article className="role">
          <div className="role-head">
            <h3>drake university</h3>
            <span className="role-dates">2020 — 2024</span>
          </div>
          <div className="role-sub">
            bachelor of science in computer science, minor in mathematics, gpa: 3.86 · des moines, ia
          </div>
        </article>
      </section>

      <section className="section">
        <div className="section-header">
          <LuGamepad2 />
          <h2>extra interests</h2>
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
