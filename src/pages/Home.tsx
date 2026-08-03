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
} from 'react-icons/lu'

type Skill = {
  name: string
  icon?: IconType
  note?: string
}

type SkillGroup = {
  title: string
  icon: IconType
  skills: Skill[]
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
      { name: 'spring boot', icon: SiSpringboot, note: 'prod' },
      { name: 'node.js', icon: SiNodedotjs, note: 'prod' },
      { name: 'hapi.js', icon: SiNodedotjs },
      { name: '.net', icon: SiDotnet },
      { name: 'fastapi', icon: SiFastapi },
      { name: 'django', icon: SiDjango },
    ],
  },
  {
    title: 'front end',
    icon: LuCloud,
    skills: [
      { name: 'react', icon: SiReact, note: 'prod' },
      { name: 'redux', icon: SiRedux },
      { name: 'nextjs', icon: SiNextdotjs },
      { name: 'blazor', icon: SiBlazor },
      { name: 'typescript', icon: SiTypescript, note: 'prod' },
      { name: 'javascript', icon: SiJavascript, note: 'prod' },
      { name: 'css', icon: SiCss },
      { name: 'sass', icon: SiSass },
      { name: 'tailwind', icon: SiTailwindcss },
      { name: 'html', icon: SiHtml5 },
    ],
  },
  {
    title: 'data',
    icon: LuDatabase,
    skills: [
      { name: 'postgresql', icon: SiPostgresql },
      { name: 'aws aurora', icon: FaAws, note: 'prod' },
      { name: 'dynamodb', icon: FaAws },
      { name: 'mongodb', icon: SiMongodb },
      { name: 'elasticsearch' },
      { name: 'flyway', icon: SiFlyway, note: 'prod' },
    ],
  },
  {
    title: 'infrastructure & cicd',
    icon: LuServer,
    skills: [
      { name: 'terraform', icon: SiTerraform, note: 'prod' },
      { name: 'aws', icon: FaAws, note: 'prod' },
      { name: 'aws cli', icon: FaAws },
      { name: 'docker', icon: SiDocker },
      { name: 'github actions', icon: SiGithubactions, note: 'prod' },
      { name: 'jenkins', icon: SiJenkins },
      { name: 'bash', icon: SiGnubash, note: 'prod' },
    ],
  },
  {
    title: 'testing',
    icon: LuTestTube,
    skills: [
      { name: 'playwright', note: 'e2e + integration, prod' },
      { name: 'jest', icon: SiJest },
      { name: 'vite', icon: SiVite, note: 'prod' },
      { name: 'junit', icon: SiJunit5 },
      { name: 'pytest', icon: SiPytest },
    ],
  },
  {
    title: 'tools & interests',
    icon: LuGitBranch,
    skills: [
      { name: 'neovim', icon: SiNeovim },
      { name: 'tmux', icon: SiTmux },
      { name: 'git', icon: SiGit },
      { name: 'zig', icon: SiZig },
      { name: 'c', icon: SiC },
      { name: 'rust', icon: SiRust },
      { name: 'api design' },
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
        period: 'late 2024',
        client: 'john deere',
        text: 'maintained existing applications through package upgrades, improving documentation and test coverage while building business domain knowledge.',
      },
      {
        period: 'early 2025',
        client: 'john deere',
        text: 'delivered react and typescript feature work; rewrote an existing application to improve performance; expanded integration and end-to-end test coverage; established database management for a microservice with terraform deployment and flyway migrations.',
      },
      {
        period: 'mid 2025',
        client: 'john deere',
        text: 'built a spring boot rest api from scratch managing dynamodb, rds, and sqs; set up full testing along with datadog metrics and visibility.',
      },
      {
        period: 'late 2025',
        client: 'john deere',
        text: 'continued front-end feature work including major library upgrades; continued to manage infrastructure with terraform; expanded database and api usage to support data validation.',
      },
      {
        period: 'early 2026',
        client: 'john deere',
        text: 'integrated datadog metrics and observability alongside package updates; delivered micro-frontend feature work supporting bulk operations; added cdn caching to website infrastructure.',
      },
      {
        period: 'early 2026',
        client: 'michigan health association',
        text: 'supported a legacy asp.net application.',
      },
      {
        period: 'mid 2026',
        client: 'john deere',
        text: 'delivered front-end feature work and state management for a new react and typescript data-entry-heavy application; extended the same spring boot api with s3 file management and additional database features.',
      },
      {
        period: 'mid 2026',
        client: 'michigan health association',
        text: 'took an expanded role, beyond the earlier support work, rewriting the legacy asp.net application in blazor. the rewrite was initially scoped to evaluate the viability of ai tooling on a business-logic-heavy codebase, with the team later shifting to applying ai selectively as needed. because framework knowledge was expected to come from ai assistance, the usual upfront ramp-up on libraries and frameworks was not carried out beforehand.',
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
      {skill.note && <div className="skill-note">{skill.note}</div>}
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
            I try to collect wisdom from as many different sources as I can, but
            I rely heavily on Jesus Christ for direction. Everything else gets
            weighed against that.
          </p>
          <p>
            While I program, I usually have lectures on religion, philosophy,
            and published research papers running in the background instead of
            music, and I read whenever I get the chance. When I am not handling
            daily obligations or taking care of my health, almost every second
            goes into programming.
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
