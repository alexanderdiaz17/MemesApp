import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import Header from './Components/Header'
import Body from './Components/diseño';
import { ProveedorAutenticacion } from './Components/ContextoAutenticacion';

function App() {
  return (
    <MantineProvider>
      <ProveedorAutenticacion>
        <Header />
        <Body />
      </ProveedorAutenticacion>
    </MantineProvider>
  )
}

export default App
