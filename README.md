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


## Used Technologies
* Next js
* react
* mongodb
* mongose
* nodemailer
* typescript
* react hot toast
* react tooltip
* react select
* react icons
* react hook form
* react datepicker
* socket io client
* sweet alert2
* tailwind css
* tailwindcss animate
* axios
* streem-io/react video sdk
* streem-io/node sdk
* clerk / clerk-react
* clerk/nextjs
* redix ui
* lucid react
* clsx
* framer motion




## Getting Started

First, run the development server:

#for cloning the repo
```bash
[git clone https:www.github.com/](https://github.com/md-nasim-mondal/chatVibe.git)

```

After cloning the repo you need to manage the some secret

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

## Chating backend
 This project has separate backend for in call message. This is a node, express, socket server for realtime communication.

 Server link: This is project [ChatVibe socket server](https://github.com/mohammad-atikuzzaman/chatvibeCahtingBackend)

