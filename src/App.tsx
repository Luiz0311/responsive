import { Header } from './components/header'
import { Main } from './components/main'
import { Section } from './components/section'
import { sectionData } from './data/sections'


function App() {
  return (
    <>
      <Header />
      <Main>
        {sectionData.map(section => (
          <Section>
            <h2>
              {section.title}
            </h2>
            {section.content.map(paragraph => (
              <p>{paragraph}</p>
            ))}
          </Section>
        ))}
      </Main>
    </>
  )
}

export default App
