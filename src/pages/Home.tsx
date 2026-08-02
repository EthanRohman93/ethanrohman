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
  points: { label?: string; text: string }[]
}

const groups: SkillGroup[] = [
  {
    title: 'back end',
    icon: LuBraces,
    skills: [
      { name: 'spring boot', icon: SiSpringboot, note: 'prod' },
      { name: 'node server', icon: SiNodedotjs, note: 'prod' },
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
    points: [
      {
        label: 'john deere — operations center',
        text: 'delivered react and typescript feature work; built a spring boot rest api from scratch managing dynamodb, rds, and sqs; managed infrastructure with terraform and flyway migrations; and added cdn caching along with micro-frontend support for bulk operations.',
      },
      {
        label: 'michigan health association — management web app',
        text: 'supported a legacy asp.net application, then took a lead role rewriting it with blazor and a modern full-stack architecture.',
      },
    ],
  },
  {
    org: 'UnitedHealth Group (Surest)',
    title: 'data science intern',
    dates: 'may 2022 — may 2024',
    location: 'minneapolis, mn',
    points: [
      {
        text: 'built a question-answering bot with sentence transformers and a custom embedding-model vector store deployed with mlflow; extended search using embedding models tuned against local elasticsearch; and contributed to pyspark pipelines in databricks and ascend.',
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
        <div className="prose">
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
              {role.points.map((point, i) => (
                <p key={i} className="role-point">
                  {point.label && <strong>{point.label}: </strong>}
                  {point.text}
                </p>
              ))}
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
