'use strict';

// To disable all workbox logging during development, you can set self.__WB_DISABLE_DEV_LOGS to true
// https://developers.google.com/web/tools/workbox/guides/configure-workbox#disable_logging
//
self.__WB_DISABLE_DEV_LOGS = true;

self.addEventListener('message', (event) => {
  console.log(event.data);
});

window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage('update-check');
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });
    }

    navigator.serviceWorker.ready.then(async (registration) => {
      await registration.sync.register('sync');
      if ('periodicSync' in registration) {
        const status = await navigator.permissions.query({
          name: 'periodic-background-sync',
        });

        if (status.state === 'granted') {
          await registration.periodicSync.register('update-check', {
            minInterval: 24 * 60 * 60 * 1000,
          });
        }
      }

      if (window.matchMedia('(display-mode: standalone)').matches) {
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState !== 'hidden') {
            navigator.serviceWorker.controller?.postMessage('update-check');
            registration.update();
          }
        });
      }
    });
  }
});
