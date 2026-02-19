import ReactDom from 'react-dom/client';
import RootComp from './RootComp';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <RootComp />
  </BrowserRouter>
);