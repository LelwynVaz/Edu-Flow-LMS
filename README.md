This is a Learning Management System(LMS) Platform project build using Next, React, Tailwind, MySQL, Prisma, ShadCN, amd Mux.

## Getting Started

First, insatll all the required pacakages:

```bash
npm install
```

Next create a **.env** file inside the project folder and add the following:

- Create an account on [Clerk](https://dashboard.clerk.com/) and add your API keys using the following names to avoid making changes in the code.
  
```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= # your publishable key
CLERK_SECRET_KEY= # your secret key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```
- Add your MySQL Database server url. I am using [Aiven](https://aiven.io/free-mysql-database) as my database server
  
  ```bash
  DATABASE_URL= # your database server url
  ```
- Create an account on [UploadThing](https://uploadthing.com/) and add your API key
  
  ```bash
  UPLOADTHING_TOKEN= # your UploadThing API here
  ```
- Create a [Mux Account](https://www.mux.com/) and add your API keys
  
  ```bash
  MUX_TOKEN_ID= # your mux token ID
  MUX_TOKEN_SECRET= #your mux secret key
  ```
- Add your [Stripe](https://stripe.com/in) API key
  
  ```bash
  STRIPE_API_KEY= # your stripe secret key here
  ```
- Install [Stripe CLI](https://docs.stripe.com/stripe-cli?install-method=windows) using the installation guide and generate stripe webhook key
  
  ```bash
  STRIPE_WEBHOOK_SECRET= # your stripe webhook key here
  ```
- Add the public URL of your app 
  
  ```bash
  # Add this URL to run your app locally
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```
- Add the user ID of the of the teacher in order to create courses. You can find the user IDs of the registered users at [Clerk](https://dashboard.clerk.com/). Copy the user ID of the user and add in **.env** file like shown below in order to allow user to create and edit courses.
  
  ```bash
  NEXT_PUBLIC_TEACHER_ID= # teacher user ID
  ```
Now, set up Prisma for your project by running the following prisma commands

```bash
# Set up a new Prisma project
npx prisma init
# Generate prisma client
npx prisma generate
# Push the prisma schema to the database
npx prisam db push
# Run the script 
node .\scripts\seed.ts
# Run the prisma server in saperate terminal. This is optional
npx prisma studio
```
Open [http://localhost:5555](http://localhost:5555) with your browser to see your Prisma server.


Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features 

This project include following features for now:

- Student Dashboard with In Progress and Completed Courses included
- Teacher Mode
- Course Analytics for Teacher
- Authenticatioon using Clerk
- Course progress calculated for each course for student
- Mark chapters as Completed or Uncompleted
- Purchase course using Stripe
- Easily change chapter position with drag and drop
- Video processing using Mux
- HLS Video player using Mux
- Prisma ORM and MySQL database
- Rich text editor for chapter description
- Upload chapter image, videos and attachments using UploadThing
