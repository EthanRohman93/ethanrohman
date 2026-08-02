const section = (title: string, items: string[]) => (
  <>
    <h2>{title}</h2>
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </>
)

function Home() {
  return (
    <div className="content">
      <h1>ethan rohman: full stack software developer</h1>

      {section('rest apis', [
        'spring boot*',
        'node server*',
        'fastapi',
        'django',
      ])}

      {section('front end', [
        'react*',
        'nextjs',
        'typescript*',
        'javascript*',
        'css',
        'sass',
        'tailwind',
        'html',
      ])}

      {section('database', [
        'self hosted mongodb',
        'self hosted postgresql',
        'aws aurora postgresql*',
        'flyway migrations*',
      ])}

      {section('cicd', ['github actions*', 'bash automation*'])}

      {section('infrastructure', [
        'terraform*',
        'aws services including but not limited to network services, iam, ec2/ecs*',
        'aws cli scripting*',
      ])}

      {section('testing', [
        'playwright e2e*',
        '  - react, node server, postgresql',
        '  - spring boot, postgresql',
        'playwright integration testing for react*',
        'pytest',
        'vite*',
        'junit*',
        'zig test',
      ])}

      {section('personal coding interests', [
        'network including http and api design for long lasting services',
        'low level languages zig, c, rust',
        'vim, tmux and easily replicating my editor in other environments and still functional in a server with base vim',
        'web development',
      ])}

      {section('extra interests', [
        'playing basketball',
        'lifting weights',
        'cooking',
        'video games',
      ])}

      <p>*code in production</p>
    </div>
  )
}

export default Home
