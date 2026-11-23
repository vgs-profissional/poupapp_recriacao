import { Aside } from './Components/Aside'
import { Container } from './Components/Container'
import { Main } from './Components/Main'
import { SearchInput } from './Components/SearchInput'
import { Typography } from './Components/Typography'
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
          <div>
            <Typography variant='h1'>
              Olá, Vini!
            </Typography>
            <Typography variant='body'>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
        </Main>
      </Container>
    </>
  )
}

export default App
