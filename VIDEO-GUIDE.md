# Psykata — Video Guide

Everything you need to record, edit, and publish your martial arts training videos.

---

## Step 1 — Install Kdenlive (Free Video Editor)

Kdenlive is a free professional video editor. It works on Windows, Mac, and Linux.

### Windows
1. Go to https://kdenlive.org/en/download/
2. Click the Windows download button
3. Run the installer
4. Open Kdenlive from your Start menu

### Mac
1. Go to https://kdenlive.org/en/download/
2. Click the Mac download button
3. Open the .dmg file
4. Drag Kdenlive into your Applications folder

### Linux
```bash
sudo apt install kdenlive
```

---

## Step 2 — Set Up Your First Project

When you open Kdenlive for the first time:

1. Click **New Project**
2. Set the resolution to **1920 x 1080** — this is standard HD, looks great on any screen
3. Set the frame rate to **30fps**
4. Give your project a name — example: `psykata-beginner-lesson-1`
5. Click **OK**

---

## Step 3 — Import Your Video Files

1. In the top left panel click **Add Clip**
2. Find your video files on your computer
3. Select them and click **Open**
4. Your clips now appear in the project panel

---

## Step 4 — Basic Editing

### Add a clip to the timeline
Drag your clip from the project panel down to the timeline at the bottom.

### Cut a clip
1. Move the playhead (the vertical line) to where you want to cut
2. Press **S** on your keyboard
3. The clip splits into two — delete the part you don't want

### Add a title card
1. Click **Add Title Clip** in the project panel
2. Type your text — example: "Beginner Lesson 1 — Basic Stance"
3. Drag it to the beginning of your timeline

### Add music or audio
1. Import your audio file the same way as video
2. Drag it to the audio track below your video

### Trim the beginning and end
Click the edge of a clip and drag it inward to trim dead space at the start or end.

---

## Step 5 — Export Your Video

When your edit is done:

1. Click **Render** in the top menu
2. Select **MP4** as the format
3. Set quality to **High** or **Very High**
4. Choose where to save the file
5. Click **Render to File**
6. Wait for it to finish — time depends on video length

---

## Step 6 — Upload To Vimeo

Vimeo keeps your training videos private so only your paying members can watch them. YouTube is public — do not use it for paid content.

### Set up Vimeo
1. Go to https://vimeo.com/upgrade
2. Sign up for the Starter plan — about $12 per month
3. Create an account

### Upload your video
1. Click **New Video** on your Vimeo dashboard
2. Drag your exported MP4 file in
3. Wait for it to process — usually a few minutes

### Make it private
1. Click on your uploaded video
2. Go to **Privacy settings**
3. Set it to **Only people with the password** or **Only me**
4. This stops anyone from finding it on Vimeo directly

### Get the embed code
1. Click **Share** on your video
2. Click **Embed**
3. Copy the embed code — it looks like this:

```
<iframe src="https://player.vimeo.com/video/XXXXXXXXX" ...></iframe>
```

---

## Step 7 — Add Your Video To The Psykata Site

Open `videos.html` in a text editor. Find the section for the level you want — Beginner, Intermediate, or Advanced. Look for the placeholder that says:

```html
<!-- Add your video embed here -->
```

Replace it with your Vimeo embed code:

```html
<iframe src="https://player.vimeo.com/video/XXXXXXXXX" 
        width="640" 
        height="360" 
        frameborder="0" 
        allowfullscreen>
</iframe>
```

Replace XXXXXXXXX with your actual Vimeo video ID.

Save the file, push to GitHub, and Vercel updates the live site automatically.

---

## Recommended Video Structure For Training

Keep each video focused on one thing. Short and specific beats long and general.

| Level | Video Length | What To Cover |
|---|---|---|
| Beginner | 5 to 10 minutes | One technique, shown slowly, repeated |
| Intermediate | 10 to 15 minutes | Combinations, detail on common mistakes |
| Advanced | 15 to 20 minutes | Advanced application, sparring context |

---

## Recording Tips

- **Light in front of you** — never behind you or your face goes dark
- **Plain background** — a wall or mat, nothing distracting
- **Stable camera** — use a tripod or prop your phone against something solid
- **Speak clearly** — closer to the mic is better than louder
- **Record in short takes** — easier to edit than one long recording
- **Wear your gi or training clothes** — it sets the context immediately

---

## Quick Reference

| Task | Tool | Where |
|---|---|---|
| Edit videos | Kdenlive | Your computer |
| Host videos privately | Vimeo | https://vimeo.com |
| Show videos on your site | Vimeo embed code | videos.html |
| Save your site changes | GitHub | https://github.com/PaulMack430/psykata |
| Publish to the internet | Vercel | https://vercel.com |

---

## Built By

Paul Maclean — Applied AI Engineer
https://github.com/PaulMack430

Built as part of the Psykata martial arts training platform setup guide.
