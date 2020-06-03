---
path: "/blog/day-10-pwa"
date: "2020-06-03"
title: "Day 10: Basic PWA exploration"
---

# Day 10: Basic PWA exploration

## Introduction

For today's submission, I want to explore PWAs. I ran into PWAs some time ago and I couldn't figure out what was happening and why my app wasn't properly updating. What I wanted to explore are how service workers work, how offline apps are set up, how to show those update-dialogs when a new version is available and how I can add a PWA to my Android home screen by configuring the manifest.json.

## Result

The result is a small CRA application with the service worker enabled. Enabling this simply requires you to change the line in index.js from `serviceWorker.unregister()` to `serviceWorker.register()`. This registers the service worker when you load the app for the first time and then directly activates it.

CRA is setup to use Workbox, a toolset from Google that simplifies working with PWAs in Single-Page Applications. By default, all static assets (bundle files, stylesheets, html files, assets) are cached in the service worker cache and served upon page load, if the serviceworker is already registered.

Showing an update dialog requires you to listen for an update event from the service worker. If a new service worker is registered, but an old one is still active, it waits for all tabs using this application to close before replacing the service worker with the new version. However, if you listen for new installations you can either tell it to just `skipWaiting` or you can show a dialog that tells you to reload the page to update the app. I prefer the latter, because it ensures that the new javascript is also running, which isn't the case if you simply replace the service worker. The new code needs to be running.

Configuring the manifest.json is really trivial, but one cool thing to keep in mind is the `maskable` property of an icon. This allows for apps to be cropped to a rounded rectangle or a circle or other shapes, whereas not adding this property the square icon will be placed inside the circle, leaving lots of whitespace.

To test my PWA experiments, I used ![surge.sh](https://surge.sh). This allows you to deploy your frontend PWAs to an HTTPS-enabled publicly accessible URL from the command line for free. My PWA is hosted on https://abject-brain.surge.sh.
