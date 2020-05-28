---
path: "/blog/day-8-strapi"
date: "2020-05-28"
title: "Day 8: Strapi"
---

# Day 8: Strapi

I came across Strapi by scrolling through DEV.to. Not really knowing what it was, I figured I explore it as part of the Thirty Days of Code.

Strapi is a headless CMS in which you can configure all content that can be consumed by a frontend application. There is no frontend to it (unlike something like WordPress), just a backoffice in which you can configure content types with very extensive editors. What I really liked about those content type configurations is that you can even define complex relations and then also configure the entry pages for content types to include or exclude these relations and other fields.

Gatsby has plugins that allow you to create pages from the resources fetched from this Strapi API. This runs at compile time so the result is visible at https://ericpolman.github.io/thirty-days-of-code/strapi-page
