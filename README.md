# Sticky challenge

## Stack
- react vite
- tailwindcss
- typescript



## Missing bonus feature
### Saving notes to REST API

This bonus feature wasn't implemented due lack of time but I would give an aproximation of how would I had done it :)

I would have created an api.ts simulating an async layer with (async) functions to retreive notes, creat, update and delete notes as endpoints.
Each function with a delay to simulate a latency.
We would continue using localstorage as a fake db
UI action -> api function ->    [OK] -> save it (at our localstorage as fake db)
                                [ERROR] -> show error and don't save

Using a real api with data on a real db localstorage would be nice to be used as a cache db (redis is also an option) with resync options when first mount



## Posible project enhancements

- Add formatter
- Support rich-text
- Add rich-text sanitize
- Add edit note feature
- Add confirm delete note
- Update note position on dragend event
- Add toast to inform error or success actions
