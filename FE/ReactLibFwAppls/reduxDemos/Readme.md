###### TRK demo
You should only ever have one Provider and one Store for your entire application.

If you place the Provider inside App.jsx instead of main.jsx, only children of App can see Redux.

By placing it in the entry file (main.jsx), you ensure that even navigation bars, sidebars, and modals have access to the global state.