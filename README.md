# Sticky challenge

## Description

The app is a React + TypeScript single-page application built with Vite and styled with Tailwind. `App` is the single source of truth: it owns the `notes` state and exposes the operations (`addNote`, `updateNote`, `deleteNote`) to its children via props. The tree is simple: `Navbar` triggers the creation flow through a `CreateModal` form, and `Dashboard` renders the list of `Note` components and the trash and edit drop zones.

Persistence is isolated behind a small data layer. `storage.ts` reads and writes localStorage with type validation. 

Notes are controlled components: their position and size live in the state, and `Note` reports changes through callbacks. Dropping a note over the trash zone is detected by comparing the pointer position with the zone's bounding rectangle, and bringing a note to the front is done by moving it to the end of the array, since later items are drawn on top.

## Stack
- react vite
- typescript
- tailwindcss
- [react-rnd](https://www.npmjs.com/package/react-rnd)

## How to run
- npm install
- npm run dev
- go to http://localhost:5173/

## Features implemented
1. Create a new note of the specified size at the specified position.
2. Change note size by dragging.
3. Move a note by dragging.
4. Remove a note by dragging it over a predefined "trash" zone.
I. Entering/editing note text. (bonus)
II. Moving notes to front (in case of overlapping notes). (bonus)
III. Saving notes to local storage (restoring them on page load). (bonus)
IV. Different note colors. (bonus)


## Missing bonus feature
### Saving notes to REST API

This bonus feature wasn't implemented due lack of time but I would give an aproximation of how would I had done it :)

I would have created an api.ts simulating an async layer with (async) functions to retreive notes, creat, update and delete notes as endpoints.
Each function with a delay to simulate a latency.
We would continue using localstorage as a fake db.
```
UI action -> api function ->
    [OK] -> save it (at our localstorage as fake db)
    [ERROR] -> show error and don't save
```
Using a real api with data on a real db localstorage would be nice to be used as a cache db (redis is also an option) with resync options when first mount

## Disclaimer
This repo uses [react-rnd](https://www.npmjs.com/package/react-rnd) for dragging and resizing. If built in-house, I would wrap that logic in a reusable component, keeping it separate from the rest of the app.

## Timeline
- 00:00 - 1:00 [project setup](https://github.com/jafidiesel/sticky-challenge/pull/1)
- 1:00 - 4:00 [basic features (1-3)](https://github.com/jafidiesel/sticky-challenge/pull/2)
- 4:00 - 5:00 [extended features (4)](https://github.com/jafidiesel/sticky-challenge/pull/3)
- 5:00 - 6:00 [bonus features](https://github.com/jafidiesel/sticky-challenge/pull/4)


## Posible project enhancements

- Add formatter
- Support rich-text
- Add rich-text sanitize
- Add edit note feature
- Add confirm delete note
- Update note position on dragend event
- Add toast to inform error or success actions

