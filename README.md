## Create an app with Next13 using
- using appDir : true - config of next
  - deleting "page"
  - page.jsx used for define the new pages 
  - layout like extends
  - new styles css hashing
  - change the useEffect , useState to just a fetch and async compponent
  - configuring fetch to
    - ,{cache:"no-store"} for server side / dynamic
    - ,{next:{revalidate:60}} refresh every ${time}
  - using loading - page
  - throw new Error - page
  - using (with-banner) with layout like extend for a benner with marquee
- "use client"
  - 'the alternative of fetch is "use"'


![image](https://user-images.githubusercontent.com/93483481/199947530-831581e9-2177-4298-a441-ee41cba30b43.png)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
