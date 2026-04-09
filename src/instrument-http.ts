import { initSentry } from "./observability/sentry.js";

// Must run before Express is loaded so Sentry can instrument it.
initSentry("http");
