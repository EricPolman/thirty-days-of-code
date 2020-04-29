# Day 3: React MobX

## Introduction

Today I am looking into an alternative to Redux. What bothers me about Redux is how non-trivial it is to include side effects in a platform-independent way. At the core of MobX, there are Reactions. Reactions are functions that don't produce any state, but cause side effects like logging and caching.

There are alternatives to MobX which will definitely be explored on other days, but today's focus is on setting up a basic React app with MobX. A problem I definitely want to tackle today is when and how to display toasts, preferrably without a deep integration between React and MobX.
