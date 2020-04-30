# Day 3: React MobX

## Introduction

Today I am looking into an alternative to Redux. What bothers me about Redux is how non-trivial it is to include side effects in a platform-independent way. At the core of MobX, there are Reactions. Reactions are functions that don't produce any state, but cause side effects like logging and caching.

There are alternatives to MobX which will definitely be explored on other days, but today's focus is on setting up a basic React app with MobX. A problem I definitely want to tackle today is when and how to display toasts, preferrably without a deep integration between React and MobX.

## Result

The result for today is an app in which you can load, change and add todos using MobX for state managemente. When loading and adding todos, an alert is pushed to the AlertsStore, which is processed by an AlertHandler component.

I learned some basic MobX usage today in combination with React. MobX allows for very clean code by simply wrapping a component in an `observer()` call and then simply accessing the store's state. No local state, props, or hooks are required here, unless you want to setup specific reactions or parts of computed state.

I also learned an important note about alerts. If I want to trigger alerts in platform-independent action-driven state management, I have to treat the alerts as part of the state and process them platform-dependently in a component that has access to this state. I don't think storing them as "alerts" is the best way to go, as the state layer should not determine how the UI should present sommething, but that's something to explore on another day.
