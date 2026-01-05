# React App с Tailwind CSS, Redux Toolkit & Axios

Этот проект создан с использованием React, Tailwind CSS, Redux Toolkit и Axios.

## Установка

```bash
npm install
```

## Запуск

Development server:
```bash
npm run dev
```

Production build:
```bash
npm run build
```

## Технологии

- **React 18** - UI библиотека
- **Vite** - Инструмент сборки
- **Tailwind CSS** - CSS фреймворк
- **Redux Toolkit** - Управление состоянием
- **Axios** - HTTP клиент

## Структура проекта

```
react-app/
├── src/
│   ├── components/     # React компоненты
│   ├── store/          # Redux store и slice'ы
│   │   └── slices/     # Redux slice'ы
│   ├── services/       # API сервисы
│   ├── utils/          # Утилитарные функции
│   ├── App.jsx         # Главный компонент
│   ├── main.jsx        # Точка входа
│   └── index.css       # Глобальные стили
├── public/             # Статические файлы
├── package.json
└── vite.config.js
```

## Использование

### Redux Store

Store настроен в файле `/src/store/store.js`. Чтобы добавить новый slice:

1. Создайте новый slice в папке `src/store/slices/`
2. Импортируйте его в файле `store.js` и добавьте в reducer

### API Service

Экземпляр Axios настроен в файле `/src/services/api.js`. Выполняйте API запросы через него:

```javascript
import { apiService } from './services/api'

// GET запрос
const data = await apiService.get('/endpoint')

// POST запрос
const response = await apiService.post('/endpoint', { data })
```

### Tailwind CSS

Tailwind CSS настроен и готов к использованию. Вы можете использовать Tailwind классы в компонентах.
