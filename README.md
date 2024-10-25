This is project [ChatVibe](https://chat-vibe-ashy.vercel.app) created by team MERNMaestro.

This is a video and audio conference application, crated for seamless and high performance audio and video conference. At first a user can see the landing page of our application. After login or register user can access the user dashboard by clicking try now button or dashboard page. 

By using the dashboard panel users can use the feature of our application.


## Features
### Dashboard Features
* Create Instant meeting
* Join a meeting
* Schedule Meeting
* See all of the Schedule meeting on Upcoming page.
* See all the old meeting on previous page
* See meeting recordings in Recording page.
* Personal room

### In meeting Features
* Camera and mic toggling
* Multiple camera and mic support
* Send multiple types of reaction in meeting
* Screen sharing
* Record meeting
* Leave call
* Select layout
* See all the percents
* In call messaging

### Meeting host control
* End call for everyone button only for meeting creator
* Pin/unpin for everyone
* block in meeting
* Enter full screen
* Allow video/audio
* Disable video/audio
* Allow screen share
* Disable screen share






## Getting Started

First, run the development server:

#for cloning the repo
[git clone https:www.github.com/](https://github.com/md-nasim-mondal/chatVibe.git)

after cloning the repo you need to manage the some secret

* NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
* CLERK_SECRET_KEY
* NEXT_PUBLIC_CLERK_SIGN_IN_UR
* NEXT_PUBLIC_CLERK_SIGN_UP_URL
* NEXT_PUBLIC_STREAM_API_KEY
* STREAM_SECRET_KEY
* NEXT_PUBLIC_BASE_URL
* MONGODB_URL
* appName

After adding .env.local you need to provide this secret in .env.local file

```bash

#then run `npm i` for install dependencies
npm i

#then
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
