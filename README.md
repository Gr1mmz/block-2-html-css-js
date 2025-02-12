# block-2-html-css-js

## Блок 2. Верстка из моего курса обучения

## Что за проект?

Это шаблон для тренировки чистой верстки на HTML, CSS, JS. Дополнительно поддерживает SCSS и TypeScript.

> РЕКОМЕНДОВАННАЯ ВЕРСИЯ Node.js - 22.11.0

## Как установить проект?

1. Нажимаем кнопку `Use this template`  
   ![image](https://github.com/user-attachments/assets/ce619ce2-833c-4fbb-9513-a33063abda02)
2. Выбираем `Create a new repository`
3. Вписываем название репозитория  
   ![image](https://github.com/user-attachments/assets/5b73d2f6-be4d-4fe3-a856-70586d6f4bb3)
4. Нажимаем `Create repository`
5. В созданном репозитории нажимаем кнопку `Code` и копируем ссылку  
   ![image](https://github.com/user-attachments/assets/eca31d67-8857-41f5-9071-a4c26e921ac6)
6. Открываем папку с проектами в IDE и прописываем в терминале команду `git clone <ссылка которую скопировали>`, дожидаемся копирования
7. После успешного выполнения команды обязательно нужно переключиться в папку с проектом
8. Запускаем в терминале команду `npm install`, дожидаемся ее выполнения
9. Можно работать

Папки с конфигами / файлы конфигов лучше не трогать :)

## Структура проекта

`.github` - папка с настройками для гитхаба (CI/CD, коммиты)  
`src` - основная папка проекта  
----`assets` - папка для ассетов  
--------`fonts` - папка для локальных шрифтов (можно удалить если таковых нет)  
--------`images` - папка для картинок  
----`pages` - папка для страниц (каждый html-файл - отдельная страница сайта)  
----`scripts` - папка для скриптов  
--------`app.ts` - точка входа для скриптовых файлов. Сюда должны импортироваться все остальные файлы скриптов  
----`styles` - папка для стилей  
--------`blocks` - основная рабочая папка для стилей. В ней каждый файл - отдельная секция на странице/отдельный большой элемент  
--------`fonts.scss` - файл для настройки шрифтов  
--------`global.scss` - файл для глобальных стилей  
--------`main.scss` - точка входа всех стилей. Здесь только импорты из других файлов  
--------`reset.scss` - обнуление стилей  
--------`variables.scss` - SCSS-переменные  
----`types` - папка для типизации (сейчас там декларации для TS, их трогать не нужно)  
`.gitignore` - список файлов и папок для игнорирования системой контроля версий  
`.prettierrc` - конфиг Prettier  
`eslint.config.js` - конфиг ESLint  
`package.json` - основной файл npm, содержит скрипты, зависимости и настройки проекта  
`tscongfig.json` - конфиг для TypeScript  
`webpack.config.js` - конфиг Webpack

## Как пользоваться проектом?

1. Развернуть себе проект (инструкция выше)
2. Создать новую ветку от `main`. Она должна называться корректно. Пример - `feature/BLOCK2-4-add-promo-section`
3. Внести изменения в ветке согласно задаче. Запушить их
4. Создать `Pull Request` из рабочей ветки в `main`
5. При создании автоматически запустится CI/CD пайплайн, который проверит ваш код на форматирование и отсутствие ошибок
6. В случае, если были найдены ошибки в джобах `lint-test` или `build`, необходимо из исправить.
   Тексты ошибок можно будет найти в информации о джобе, нажав на кнопку Details соответствующей джобы, либо вручную запустив скрипты  
   `npm run lint` для ESLint или `npm run format:check` для Prettier  
   `npm run build` eсли проблема с билдом - локально собираем проект с помощью скрипта и проверяем что пошло не так

   Если проблема на последней джобе **Deploy**, то с большой долей вероятности у вас автоматически не подтянулась настройка деплоя. Можно сделать это самостоятельно
   В этом же репозитории перейти `Settings` -> `Pages` и выбрать `Deploy from a branch` -> `gh-pages /root`
   ![image](https://github.com/user-attachments/assets/a60222c2-c237-4da1-b030-f7573785b88b)

   После этого можно перезапустить джобу деплоя. Это можно сделать следующим образом:

   1. Перейти в Details джобы деплоя
      ![image](https://github.com/user-attachments/assets/610f1d51-729c-4c9d-acd4-9e454fc27ea7)

   2. Кликнуть на соответствующую иконку
      ![image](https://github.com/user-attachments/assets/900fc18c-1d1f-451c-b313-dc625920cf86)

   Если все прошло успешно, проверки загорятся зеленым, а в чате ПРа вы увидите сообщение с ссылкой на ваш задеплоенный проект. Иногда для деплоя надо подождать 2-5 минут. Если через это время все равно не заработало, можно написать мне в ЛС

7. Отправить ПР мне на ревью
