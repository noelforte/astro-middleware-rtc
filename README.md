# Astro middleware with Image component

This repository serves as a minimally viable reduced test case for testing Astro's `<Image />` component when running the dev server with middleware.

## What is expected to happen

Running `astro dev` should result in the page displaying and rendering the image component without issues, as the dev server middleware returns the response exactly as it was retrieved, without modification.

## What actually happened

The page renders, but the image does not and is replaced with a broken image icon along with the image's `alt` text. Furthermore, inspecting the Network tab in Chrome DevTools shows that no 404 error is being thrown, the image url is just returning a broken image.

## Workaround

The immediate workaround is to delete, move, or rename the `onRequest` function that is exported in the `middleware.js` file, effectively disabling it. Once the dev server is started and then the page is hard-reloaded with a clear cache, the image renders correctly.
