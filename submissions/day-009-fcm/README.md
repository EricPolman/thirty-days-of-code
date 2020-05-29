---
path: "/blog/day-9-fcm"
date: "2020-05-29"
title: "Day 9: FCM sending and receiving"
---

# Day 9: FCM sending and receiving

## Introduction

In mobile development one of the most frequently requested features are push / remote notifications. However, now that PWAs are becoming more popular, I want to figure out how to use notifications in the browser. Firebase Cloud Messaging is a great solution to get cross-platform push notifications to work without a lot of hassle.

## Result

Today I set up a small React application in which you can send and receive FCM notifications. You can give the permission for remote notifications, after which a token will appear. You can use this token to send notifications to yourself (still goes via Firebase).

You can also use the form to send remote notifications to any Firebase client, including iOS and Android. Only works if you have their token though. Received messages are stored in local storage and unfortunately not updated when a message is received when the tab is in the background due to service workers not having access to local storage.

Sidenote: This was my first time trying Ant Design (https://ant.design) and I like it a lot so far. The form validation works smooth, styling looks clean, and usage is easy. The documentation is clear and has great examples.
