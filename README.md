This is a [Next.js 13](https://nextjs.org/) project using [Tailwind](https://tailwindcss.com/).

You can use [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to execute the following, we're using yarn:

```
yarn
```
and to run it over your localhost:`port` you can run

```bash
yarn run dev
```

This porject uses ==Client Side Components== you can read more about it on [server-and-client-components](https://beta.nextjs.org/docs/rendering/server-and-client-components), this enables us to use client side data fetching and all the react features and hooks out of the box.

Directory Structure
----------------------
▶️ This project uses [src Directory](https://nextjs.org/docs/advanced-features/src-directory) structure, all the frontend pages and routes are supposed to be added to the `src` folder.

▶️ The entry point of our application will be `src/pages/index.tsx` or the main page.

▶️ The head can be editied inside the `src/pages/_document.tsx` file for SEO.

▶️ AuthtokenProvider and AppContextProvider wrapping the whole application can be found inside `src/pages/_app.tsx`.

Styling
----------------------
All the styles are added in the `src/styles/global.css` file and will be following TailwindCSS as well.

Translations
----------------------

To add content to the translation object which can be found inside the `src/constants/index.tsx` file, 
add the arabic content to the respective key in the `ar` object.

Deployment
----------------------

To deploy it to production
▶️ we need the [export] (https://nextjs.org/docs/advanced-features/static-html-export) of the static files which is export of the Next.js application to static HTML, which can be run standalone without the need of a Node.js server.

▶️ We have to create a prod build by executing ⭐ `yarn export` which executes two seperate commands 
    👉 `next build`
    👉 `next export`
▶️ executing the above command will create a `_next` folder in out root directory and an `out` folder that will contain all the static HTML files that can be deployed to the production.

**`Please Note: `** NextJS 13 doesnt support next export with app Dir since App Dir is still experimental feature please refer [blog](https://beta.nextjs.org/docs/app-directory-roadmap)

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
