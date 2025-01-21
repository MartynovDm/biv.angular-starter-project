# Шаблон для новых проектов на Angular ^17.0.0

## Библиотеки

- **`NgRx`** - универсальный стейт-менеджер
- **`ngneat/until-destroy`** - "Короткие" отписки вместо `subject` и `onDestroy`
- **`prettier`** - форматирование кода

Данные библиотеки выбраны как основа для Angular проектов в Рыбинске. Не нужно их менять на аналоги или отключать без согласования.

Допустимо (необходимо) не применять NgRx для одностраничных приложений или лендингов, не имеющих интерактивных элементов или запросов на серверы.

Для автоматической работы Prettier в JetBrains IDE выполните следующие действия:
1. Перейдите в `File | Settings | Languages & Frameworks | JavaScript | Prettier`.
2. Установите галочку `Run on save`.

## Настройки проекта

- Файл `.prettierrc` - настройки Prettier.
- `changeDetection: "OnPush"` - OnPush по умолчанию при создании компонентов через CLI. 
  - (OnPush не является обязательным условием для компонентов на проектах, но лучше ставить по умолчанию и убирать при необходимости).
- Настройки для сборок и окружений: `dev`, `test`, `prod` стендов.
- `standalone: true` - обязательна для всех компонентов, директив, пайпов.

## Структура файлов и папок

Структура файлов и папок разработана с целью стандартизации проектов, упрощения процесса переключения между ними и облегчения адаптации сотрудников.

- **app** - компонент входа
  - **pages** - страницы продукта (для одностраничных может быть переименован).
  - **core** - общие ресурсы, которые могут быть использованы на любой (нескольких) страницах.
  - **store** - ресурсы стейт-менеджера.

## Настраивается под проект
- Порт - в `package.json` в скриптах `start` и `start:local` (Пример: --port 4401)
- Префикс селекторов - `angular.json | prefix`
- Переименовать или раздробить стор - `provideState({ name: 'appState', reducer: appReducers })`


