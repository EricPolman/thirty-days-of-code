---
path: "/blog/day-10-pwa"
date: "2020-06-03"
title: "Day 11: Video File Streaming"
---

# Day 11: Video File Streaming

## Introduction

Video file streaming sounds very complicated and I wanted to figure out if it was. Due to the `<video>` tag in HTML5, this is all very well doable, you just need to write the backend code. Following [this Medium article](https://medium.com/better-programming/video-stream-with-node-js-and-html5-320b3191a6b6) I set up a very small video streaming endpoint using Node and Express.

## Result

The result is a Node server with a single endpoint that streams an 18mb demo video to a page with a simple video tag. Nothing fancy, but exploring what headers to use to request ranges of data and using `fs` to request parts of a file was new for me and will probably come in handy some day.
