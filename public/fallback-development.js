/******/ (() => {
  // webpackBootstrap
  /******/ 'use strict';
  var __webpack_exports__ = {};

  self.fallback = async (request) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/RequestDestination
    switch (request.destination) {
      case 'document':
        if (true)
          return caches.match('/offline', {
            ignoreSearch: true,
          });
      case 'image':
        if (true)
          return caches.match('/fallback.png', {
            ignoreSearch: true,
          });
      case 'audio':
        if (false) {
        }
      case 'video':
        if (false) {
        }
      case 'font':
        if (false) {
        }
      case '':
        if (false) {
        }
      default:
        return Response.error();
    }
  };
  /******/
})();
