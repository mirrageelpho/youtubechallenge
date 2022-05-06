This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Techs
This project was been create with:
NextJs -> used to build application.
Next Auth -> used to implement Google Authentication.
react-player-> to play vídeos
styled-components -> to style application.
context API -> to controll state.

## Features
What we can do on aplication?

* sign in with google account
* load a video list from youtube
* search a video
* play a video
* change theme, dark or ligh


## To run on local


First:
you will need to access google console [https://console.cloud.google.com/apis/credentials?project=stormdesafio]to get a api key. this is necessary to get access a youtube api. End create a application to get GOOGLE_ID end GOOGLE_SECRET, this is to configure the Next-Auth to implement google login on application 

Next
* clone this repository
* rename the file .env.exemple to .env.local
* open the file e chance the variables to keys and Id that you has been obtained on google platform

lets run project

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
