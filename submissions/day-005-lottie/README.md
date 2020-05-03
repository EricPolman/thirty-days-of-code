---
path: "/blog/day-5-lottie-animations"
date: "2020-05-02"
title: "Day 5: Lottie animations"
---

# Day 5: Lottie animations

## Introduction

During my development on React Native apps, I came across Lottie. It is a package developed by AirBnB to play After Effects animations on web, mobile, and Windows. I never took the time to try it out, so I figured it was a good idea to try it out here. The goal of today is to setup a very small app containing several Lottie animations from [LottieFiles](https://lottiefiles.com/).

## Result

Today's result is a basic website that loads weather data for your current location via OpenWeather API. It parses the weather icon string in the response and looks up a corresponding Lottie animation to show. You can change the animation being shown by clicking a weather type in the side nav. There is also a basic loading animation using Lottie.
