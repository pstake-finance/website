// https://developers.google.com/analytics/devguides/collection/gtagjs/pages

import { ANALYTICS } from "./config";

export const pageview = (url) => {
  window.gtag("config", ANALYTICS, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
