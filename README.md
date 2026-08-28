# Psykata — Martial Arts Training Website

A membership website for martial arts students. Watch training videos, track your progress, and level up from beginner to advanced.

---

## What Is This?

Psykata is a website for a martial arts school. It has three parts:

1. A landing page — the front door. Visitors see what the school is about and can sign up.
2. A video library — training videos organized into Beginner, Intermediate, and Advanced levels.
3. A login page — members sign in to access their content.

Think of it like Netflix, but for martial arts training.

---

## What Is In The Folder

- index.html — The landing page
- videos.html — The video library with beginner, intermediate, and advanced tabs
- login.html — The member login page
- css/styles.css — All the colors, fonts, and layout
- js/main.js — Makes the tabs and navigation work

---

## How To Open It On Your Computer

No installation needed. Just open the files in your browser.

On Linux: xdg-open index.html
On Mac: open index.html
On Windows: double-click index.html in your file explorer

---

## How To Put It On The Internet

Step 1 - Create a GitHub account at https://github.com

Step 2 - Push this folder to GitHub
On GitHub click the plus button, click New repository, name it psykata, do NOT check Initialize with README, click Create repository. Then run the commands GitHub shows you.

Step 3 - Deploy to Vercel for free
Go to https://vercel.com, sign up with your GitHub account, click Add New Project, select your psykata repo, click Deploy. Vercel gives you a live URL instantly.

Step 4 - Buy a domain for about 12 dollars a year
Go to https://www.cloudflare.com/products/registrar and search for your domain name.

Step 5 - Attach your domain to Vercel
In Vercel go to Settings then Domains. Add your domain. Copy the two DNS records Vercel gives you and paste them into Cloudflare DNS settings. Wait 10 to 30 minutes.

---

## What Is Not Built Yet

Real login system — members can actually log in — needs Supabase which is free to start
Payment system — charge for membership — needs Stripe at 2.9 percent per transaction
Real videos — private training videos — needs Vimeo Starter at about 12 dollars per month
Student progress tracking — know who watched what — needs a database via Supabase

---

## Video Hosting

Do not use YouTube for paid content. YouTube is public and shows competitor ads.

Use Vimeo instead. Videos are private and only play on your site. No ads. No competitor videos. Streams fast on any device. About 12 dollars per month at https://vimeo.com/upgrade

---

## How To Make Changes

Using Claude in your browser:
1. Go to https://claude.ai
2. Paste your GitHub repo link
3. Tell Claude what you want to change in plain English
4. Copy the updated code back into your files
5. Push to GitHub and Vercel updates automatically

Using Claude Code in your terminal:
curl -fsSL https://claude.ai/install.sh | bash
cd ~/psykata
claude

---

## Cost To Launch

Domain — about 12 dollars per year
Vercel hosting — free
Supabase database — free to start
Stripe payments — 2.9 percent per transaction
Vimeo video hosting — about 12 dollars per month

Total to launch: about 12 dollars for the domain. Everything else free until you have paying students.

---

## Built By

Paul Maclean — Applied AI Engineer
https://github.com/PaulMack430

Built as a starter template for the Psykata martial arts training platform.
