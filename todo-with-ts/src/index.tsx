
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement //HTMLelement 상속
  //as => 앞에 쓴 데이터를 뒤에 있는 데이터로 인식
); //extend: 상속
root.render( <App />);

