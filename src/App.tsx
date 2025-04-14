import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
export default function App() {
  return (
    <MantineProvider>
      <HomePage/>
    </MantineProvider>
  );
}