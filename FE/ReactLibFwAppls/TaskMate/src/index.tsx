import ReactDom from 'react-dom/client';
import RootComp from './RootComp';
import './index.css';

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(
  <RootComp />
);