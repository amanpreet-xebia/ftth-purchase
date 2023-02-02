This is a [Next.js 13](https://nextjs.org/) project using [Tailwind](https://tailwindcss.com/).

You can use [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to execute the following, we're using yarn:

```
yarn
```
and to run it over your localhost:`port` you can run

```bash
yarn run dev
```
 
Directory Structure
----------------------
:star: This project uses [src Directory](https://nextjs.org/docs/advanced-features/src-directory) structure, all the frontend pages and routes are supposed to be added to the `src` folder.

:star: The entry point of our application will be `src/pages/index.tsx` or the main page.

:star: The head can be editied inside the `src/pages/_document.tsx` file for SEO.

:star: AuthtokenProvider and AppContextProvider wrapping the whole application can be found inside `src/pages/_app.tsx`.

Styling
----------------------
All the styles are added in the `src/styles/global.css` file and will be following TailwindCSS as well.

Translations
----------------------

To add content to the translation object which can be found inside the `src/constants/index.tsx` file, add the arabic content to the respective key in the `ar` object.



Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
