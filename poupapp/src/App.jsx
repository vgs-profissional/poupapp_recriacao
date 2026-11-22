import { Aside } from './Components/Aside'
import { Container } from './Components/Container'
import { Main } from './Components/Main'
import { SearchInput } from './Components/SearchInput'
function App() {
  return (
    <>
      <Container>
        <Aside>
        </Aside>
        <Main>
          <SearchInput
            type='text'
            placeholder='Procure seu dinheiro...'
            id='SearchInput'
          >
          </SearchInput>
        </Main>
      </Container>
    </>
  )
}

export default App
