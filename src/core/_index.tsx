import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/*
 * Material UI uses Roboto font by default.
 */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Index = () => {
  return <div>Hello, world. My name is Spandan Buragohain</div>;
}

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(
  <StrictMode>
    <Index />
  </StrictMode>
)
