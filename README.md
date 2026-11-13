# GardenConnect

An interactive React frontend for a gardening community. Built with Vite, React, and Lucide icons. Everything lives in React state; there is no backend, database, authentication service, localStorage, or persistence. Refreshing resets accounts, posts, comments, likes, and saved posts.

## Run locally

Requires Node.js 22.12+ (developed on Node.js 24).

```sh
npm install
npm run dev
```

Open the local address printed by Vite. `npm run build` creates the production frontend in `dist`; `npm run preview` serves that build.

## Features

- Session-only login and account creation, password confirmation, logout, and duplicate-account checking. Any new username/password can log in; an existing session account must use its chosen password. This is a demonstration, not secure authentication.
- Feed filters for questions, events, and jobs; newest/most-liked sorting; case-insensitive search through titles, descriptions, and all comments and replies.
- New posts with required title, description, and type; up to four JPG, PNG, WebP, or GIF images, each up to 5 MB. Uploaded images remain in memory.
- Event date and time appear and are required only when Event is selected. Times use the viewer's local time. Events are ordered chronologically in the sidebar.
- Post detail pages, clickable usernames, searchable and filterable user histories, likes, bookmarks, threaded replies, and comments ordered by highest upvote at every level.
- Saved-post collection, photo enlargement, empty states, keyboard-accessible dialogs, browser back/forward navigation, and responsive flex layouts.
- Messages displays a coming-soon page.

## Assignment 5 revisions

The supplied documents were treated as design references. Their testing-script instructions are not application features. All three specified revisions are implemented: event-only required date/time inputs; a single Description field without Additional Information; and clickable usernames opening searchable user-history feeds.

## Design and assets

Palette: cream `#FFEFB3`, bright fern `#71B340`, sage `#669D31`, and forest moss `#598B2C`. Lora is used for the brand and headings; DM Sans for interface and body copy. Fonts load from Google Fonts with Georgia/sans-serif fallbacks. Stock photography is downloaded into `public/images`, so post and banner images do not require a third-party request at runtime. No generated images are used.

Unsplash image sources:

- Garden tools / planting: https://images.unsplash.com/photo-1416879595882-3373a0480b5b
- Tomatoes: https://images.unsplash.com/photo-1592841200221-a6898f307baa
- Seedlings: https://images.unsplash.com/photo-1466692476868-aef1dfb1e735

## Browser checks

```sh
npm test
```

Playwright uses installed Google Chrome (`channel: 'chrome'`) and starts/reuses a local Vite server on port 5173. Tests cover filtering, comment-text search, sorting, user history, bookmarks, account validation, photo uploads, event fields, publishing, reload reset, likes, threaded replies, comment upvotes, logout, stock asset loading, browser navigation, and overflow at 1440, 1024, 768, and 390 pixels.

## Team Contribution

Atkin: Worked on Comments and Post page
Ryan: Worked on Main feed page
Dhvani: Worked on New Post page
Davin: Worked on Navbar, sign in, sign up
Alicia: Worked on styling and ui elements

