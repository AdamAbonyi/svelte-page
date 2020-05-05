# Adams Svelte Routify Playground

My test project to get my knowledge of Sveltejs and Routfy started. Used the starter template for [Routify](https://github.com/sveltech/routify). 

![Build](https://github.com/ad-ab/svelte-page/workflows/Build/badge.svg)

## SSR and pre-rendering

SSR and pre-rendering are included in the default build process.

To render async data, call the `$ready()` helper whenever your data is ready.

If $ready() is present, rendering will be delayed till the function has been called.

Otherwise it will be rendered instantly.

See [src/pages/example/api/[showId].svelte](https://github.com/sveltech/routify-starter/blob/master/src/pages/example/api/%5BshowId%5D.svelte) for an example.

## Production

* For SPA or SSR apps please make sure that url rewrite is enabled on the server.
* For SPA redirect to `__dynamic.html`.
* For SSR redirect to the lambda function or express server.

## Issues?

File on Github! See https://github.com/sveltech/routify/issues .

## Todo Tech

* Do some demos from https://rustwasm.github.io/book/
* Create something simple with https://github.com/deepstreamIO/deepstream.io (https://blog.mgechev.com/2014/12/26/multi-user-video-conference-webrtc-angularjs-yeoman/)
* Implement Crossfade animation during page transitions
* webfontloader and anime.js
* https://github.com/albinotonnina/albinotonnina.com