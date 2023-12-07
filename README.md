# Шаблон для верстки HTML/CSS/JS для vs-code

<details>
  <summary>Установка</summary>
  ## Возможности и принцип работы:

    * Разработка отслеживается (в расширении для vs-code) - Live Server -
    https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

    * CSS компилируются из SCSS (с помощью расширения для vs-code) - Live Sass Compiler -
    https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass

    * JavaScript разбит на модули './js/modules', которые подключаются в './js/main.js'
    Вендоры находятся в папке .'/libs'

    ## Про стили:

    * Главный файл - './styles.css';

    * Сброс стилей - './css/reset.css', ('./css/normalize.css');

    * Шрифты - './css/fonts.css' поключены локально, добавляются в папку './fonts';

    * Стили разметки в './css/layout/', для главного контейнера сайта зарезервировано значение "__site-container;

    * В папку './css/blocks' компилируются css файлы из './scss/blocks' с помощью вышеуказанного расширения;

    * Переменные - пользовательские CSS-свойства:
    цвета: `--accent: #afeeee;`

    типография:
    семейство шрифта: `--main-ff: 'Roboto', sans-serif;`
    свойство шрифта: `--font-body: 400 1.6rem/1.25 var(--main-ff);`

    ## Про lazyload:

    Работает с помощью vanilla-lazyload,
    ссылка - https://github.com/verlok/vanilla-lazyload

    Примеры подключение:

    ```bash
    <img alt="A lazy image" class="lazy" src="lazy-lowQuality.jpg" data-src="lazy.jpg" />
    ```

    ```bash
    <picture>
    <source
        type="image/webp"
        data-srcset="lazy_400.webp 400w,
        lazy_800.webp 800w"
        data-sizes="100w"
    />
    <img
        alt="A lazy image"
        class="lazy"
        data-src="lazy.jpg"
        data-srcset="lazy_400.jpg 400w,
        lazy_800.jpg 800w"
        data-sizes="100w"
    />
    </picture>
    ```

    ```bash
    <video class="lazy" controls width="620" data-src="lazy.mp4" data-poster="lazy.jpg">
    <source type="video/mp4" data-src="lazy.mp4" />
    <source type="video/ogg" data-src="lazy.ogg" />
    <source type="video/avi" data-src="lazy.avi" />
    </video>
    ```

</details>

# Ссылкы на верстку:
## Страница - [Главная](https://eduardoalparov.github.io/accentEdgeCeramik/).
