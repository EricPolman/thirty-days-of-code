# Day 2: React Hooks - Creation (Dark Mode hook)

Today I am diving deeper into how Hooks work and am following a tutorial for setting up a hook for toggling an app between dark mode and light mode. ([Tutorial video](https://www.youtube.com/watch?v=BAf0uhKVHBk&feature=youtu.be))

For an explanation on how hooks work behind the scenes, [this article](https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/) explains it very well. [The talk](https://www.swyx.io/speaking/react-hooks/) dives even deeper. It boils down to closure usage (a topic to dive further into) and making sure you call hooks in the same order every time you render a component.

The result for today is a hook that can be used to store and get data from localStorage and synchronizing this across browser tabs. It uses useState and useEffect to hook into the lifecycles of React and provide instant updates to the UI. React Helmet is used to update the theme of the app, another subject I can dive into.
