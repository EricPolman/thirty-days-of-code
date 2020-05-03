---
path: "/blog/day-6-gatsby-static-site-generation"
date: "2020-05-03"
title: "Day 6: Gatsby - Static Site Generation"
---

# Day 6: Gatsby - Static Site Generation

## Introduction

At this moment, I don't really have a personal website / portfolio other than a blog that was last updated when I was still in colleg≥. My submissions for the #thirtydaysofcode challenge include READMEs that are actually small blog posts. It makes sense to turn these submissions into something I can put on my personal website and Gatsby seems to be a great tool to accomplish that.

Today I will setup a small static blog website using Gatsby and the READMEs included in every day's submission (including this one!).

## Result

Today's result is a fully working, very basic blog showing all articles / READMEs written as submissions in my #thirtydaychallenge. I use Gatsby's file loader to gain access to all files in the `submissions` folder and filter out everything but the README.md files in the top-level directories of the submissions. I then parse these into blog posts using Gatsby's createPage API. The page is wrapped in a Layout using Material UI, which I hadn't tried before.

The main page for the blog shows all blog posts with excerpts, sorted by the date provided at the top of the Markdown files. I also provide a link to the GitHub folder in every post by taking the absolute base path, removing everything non-related to the repository and replacing it with the GitHub repository URL.

The resulting blog will be updated over time and expanded with new features (and obviously new articles).
