// Импорт главного файла стилей
import '../styles/main.scss';

// Импорт изображения (демонстрация)
import logo from '../assets/images/webpack-logo.png';

// Пример TypeScript-кода
const initApp = (): void => {
  const img = document.createElement('img');
  img.src = logo;
  document.body.appendChild(img);

  console.log('App initialized!');
};

document.addEventListener('DOMContentLoaded', initApp);