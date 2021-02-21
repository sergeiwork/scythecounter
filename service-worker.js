import { createHandlerBoundToURL, precacheAndRoute } from "workbox-precaching";
import { registerRoute, NavigationRoute } from "workbox-routing";
import { skipWaiting, clientsClaim } from "workbox-core";
skipWaiting();
clientsClaim();
// eslint-disable-next-line no-restricted-globals
const precacheManifest = [].concat(self.__WB_MANIFEST || []);
precacheAndRoute(precacheManifest);

const handler = createHandlerBoundToURL("/index.html");
const navigationRoute = new NavigationRoute(handler, {
  denylist: [/^\/_/, /\/[^/?]+\.[^/]+$/],
});
registerRoute(navigationRoute);
