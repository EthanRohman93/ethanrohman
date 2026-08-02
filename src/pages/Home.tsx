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
  SiVim,
  SiTmux,
  SiDocker,
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

const groups: SkillGroup[] = [
  {
    title: 'rest apis',
    icon: LuBraces,
    skills: [
      { name: 'spring boot', icon: SiSpringboot, note: 'prod' },
      { name: 'node server', icon: SiNodedotjs, note: 'prod' },
      { name: 'fastapi', icon: SiFastapi },
      { name: 'django', icon: SiDjango },
    ],
  },
  {
    title: 'front end',
    icon: LuCloud,
    skills: [
      { name: 'react', icon: SiReact, note: 'prod' },
      { name: 'nextjs', icon: SiNextdotjs },
      { name: 'typescript', icon: SiTypescript, note: 'prod' },
      { name: 'javascript', icon: SiJavascript, note: 'prod' },
      { name: 'css', icon: SiCss },
      { name: 'sass', icon: SiSass },
      { name: 'tailwind', icon: SiTailwindcss },
      { name: 'html', icon: SiHtml5 },
    ],
  },
  {
    title: 'database',
    icon: LuDatabase,
    skills: [
      { name: 'mongodb', icon: SiMongodb },
      { name: 'postgresql', icon: SiPostgresql },
      { name: 'aws aurora', icon: FaAws, note: 'prod' },
      { name: 'flyway', icon: SiFlyway, note: 'prod' },
    ],
  },
  {
    title: 'cicd',
    icon: LuGitBranch,
    skills: [
      { name: 'github actions', icon: SiGithubactions, note: 'prod' },
      { name: 'bash automation', icon: SiGnubash, note: 'prod' },
    ],
  },
  {
    title: 'infrastructure',
    icon: LuServer,
    skills: [
      { name: 'terraform', icon: SiTerraform, note: 'prod' },
      { name: 'aws', icon: FaAws, note: 'prod' },
      { name: 'docker', icon: SiDocker },
    ],
  },
  {
    title: 'testing',
    icon: LuTestTube,
    skills: [
      { name: 'playwright', note: 'e2e + integration, prod' },
      { name: 'pytest', icon: SiPytest },
      { name: 'vite', icon: SiVite, note: 'prod' },
      { name: 'junit', icon: SiJunit5 },
      { name: 'zig test', icon: SiZig },
    ],
  },
  {
    title: 'personal coding interests',
    icon: LuBraces,
    skills: [
      { name: 'network & api design', icon: LuBraces },
      { name: 'zig', icon: SiZig },
      { name: 'c', icon: LuBraces },
      { name: 'rust', icon: SiRust },
      { name: 'vim', icon: SiVim },
      { name: 'tmux', icon: SiTmux },
      { name: 'neovim', icon: SiNeovim },
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
    <div className="skill-card">
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
          <a className="btn btn-primary" href="/resume.pdf" download>
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
