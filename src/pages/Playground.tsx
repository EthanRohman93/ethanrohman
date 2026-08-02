const TEST_TEXT =
  'testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest' +
  '\nthis is the same paragraph and it should be formatted relatively nice because it' +
  '\nshould be wrapping in a similar way to the text in the html doc'

function Playground() {
  return (
    <div className="page">
      <h1>playground</h1>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="play-box">{TEST_TEXT}</div>
      ))}
    </div>
  )
}

export default Playground
