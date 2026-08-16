const CACHE_NAME = "budget-v7";

const FILES_TO_CACHE = [
  "index.html",
  "style.css",
  "manifest.json",
  "logotransparent2.png"
];


/***************************************************************
 * INSTALL
 ***************************************************************/

self.addEventListener("install", event => {

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache =>
        cache.addAll(FILES_TO_CACHE)
      )
  );

  /*
   * Activate the new service worker
   * without waiting for the old one
   * to disappear.
   */
  self.skipWaiting();
});


/***************************************************************
 * ACTIVATE
 ***************************************************************/

self.addEventListener("activate", event => {

  event.waitUntil(

    caches
      .keys()
      .then(cacheNames => {

        return Promise.all(

          cacheNames

            .filter(
              cacheName =>
                cacheName !== CACHE_NAME
            )

            .map(
              cacheName =>
                caches.delete(cacheName)
            )

        );

      })

  );

  /*
   * Allow the newly activated worker
   * to control open pages immediately.
   */
  self.clients.claim();
});


/***************************************************************
 * FETCH
 ***************************************************************/

self.addEventListener("fetch", event => {

  event.respondWith(

    fetch(event.request)

      .catch(() =>
        caches.match(event.request)
      )

  );

});
