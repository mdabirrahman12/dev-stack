Dev Stack Builder

A responsive web app where you can explore popular development technologies and put together your own ideal tech stack, 
one technology at a time.

Live Site:

Description

Dev Stack Builder helps developers pick the tools for their next project. The app loads a list of 15 technologies 
(frontend, backend, database, language, styling, DevOps and tools) from a JSON file and shows them as cards. You can add any 
technology to **Your Stack** in the sidebar, see how many you have selected, and remove them whenever you change your mind.

## Technologies Used

- **React 19**: component-based UI
- **TypeScript**: typed props and data
- **Vite**: fast dev server and build tool
- **Tailwind CSS v4** + **daisyUI**: styling and the theme
- **React Hot Toast**: success, error and info notifications
- **React Icons**: icons in the navbar and sidebar
- **JSON**: technology data stored in `public/data.json`

## Features

1. **Browse technologies**: 15 technologies shown as cards with an icon, badge, description, category, difficulty and rating. 
A loading spinner shows while the data is being fetched.
2. **Build your own stack**: add a technology to the "Your Stack" sidebar. The same technology cannot be added twice, the button changes 
to "Added to Stack", and a toast tells you what happened.
3. **Manage your stack**: remove a single technology with the ✕ button or clear everything with "Remove All". The sidebar shows a live 
count and an empty state when nothing is selected.


# 1. Clone the repository
git clone https://github.com/mdabirrahman12/dev-stack.git
cd dev-stack

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Build for production
npm run build
```

## React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets me write HTML-like code inside JavaScript. The browser cannot read it directly, 
so a tool (Vite) converts it into normal JavaScript. It is used because the UI and the logic live together in one place, 
and I can put JavaScript values inside the markup with `{}`. For example, `<h2>{tech.name}</h2>` in `TechCard`.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child. The child can only read them, not change them. State is data that a 
component owns and can change with a setter function. When state changes, React re-renders the component. In this project, `stack` is state in `MainLayout`, and it is passed down as a prop to `TechCard` and `Sidebar`.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` lets a component remember a value between renders and re-render when that value changes. It returns the current value and 
a function to update it. I used `useState` for `stack` (the selected technologies) in `MainLayout`:
 `const [stack, setStack] = useState<Technology[]>([])`. I also used it for `isMenuOpen` in the `Navbar` to open and close the mobile 
 menu.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` runs code after the component renders, which is the right place for side effects like fetching data. With an empty 
dependency array `[]`, it runs only once, when the component first appears. The usual way to load JSON is to call `fetch` inside 
`useEffect`, then save the result in state and track a loading flag.

In this project I load `data.json` in a slightly different way: `App.tsx` starts the `fetch`, and `MainLayout` reads the result with 
React's `use()` hook inside a `<Suspense>` boundary. While the data is loading, Suspense shows the `Loading` spinner, so I did not need 
`useEffect` or a manual loading state.

### 5. Why does every item in a .map() list need a unique key prop?

React uses the `key` to tell which item is which when the list changes. With a unique, stable key, React updates, adds or removes only 
the right items instead of re-rendering the whole list or mixing items up. I use `key={tech.id}` for the cards and the sidebar items,
 because the id of each technology never repeats.

### 6. What is conditional rendering?

Conditional rendering means showing different UI depending on a condition, using `? :` or `&&`. Example from this project: in the 
`Sidebar`, `{stack.length === 0 && <div>Your stack is empty.</div>}` shows the empty message only when nothing is selected.
 The "Remove All" button appears only when `stack.length > 0`, and the card button shows "Added to Stack" when the technology 
 is already selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props: `<Sidebar stack={stack} />`. A child cannot change the parent's state directly. 
Instead, the parent passes a function as a prop, and the child calls it. In this project, `TechCard` receives `setStack` and calls 
it when the card is clicked, and `Sidebar` receives `handleRemoveFromStack` and calls it with the technology id when ✕ is pressed.

# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


