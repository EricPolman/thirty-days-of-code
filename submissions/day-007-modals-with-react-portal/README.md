---
path: "/blog/day-7-modals-with-react-portal"
date: "2020-05-07"
title: "Day 7: Modals with React Portal"
---

# Day 7: Modals with React Portal

## Introduction

Most web apps use modals or popups in some way. Asking the user for confirmation when they are pressing a delete button ensures they actually want to execute such a destructive action. The problem that arises when you want to show a full-screen popup in React is where the popup should live in the DOM.

Let's say you have a table with some rows containing users of an application. If you want to add the option to delete a user, you can add a trash bin or archive icon button in a column in that table. When the user presses this button you need to show a popup that covers the whole screen (perhaps with an overlay).

You can hack together a `div` that is absolute-positioned over the screen with a semi-transparent black background color and add your modal to that, with a high enough z-index to prevent issues with elements being rendered on top of the overlay, but you'll have to do that for every place you require a modal. This pollutes the DOM and makes no sense.

React introduced a solution to this problem called [Portals](https://reactjs.org/docs/portals.html). Portals allow you to render a component outside the DOM hierarchy of the parent component. This means that besides a `<div id="app-root"></div>` in which the React app is rendered we can add another element (`<div id="modal-root"></div>`) to the DOM and render React components inside that as well.

Today I'll explore some basic modal rendering using React Portals and Bootstrap.

## Result
