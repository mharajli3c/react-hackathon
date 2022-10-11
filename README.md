# React Hackathon

## Prerequisites
1. npm / yarn / pnpm

## Getting Started
1. Open a terminal in the project root and enter the following:
- `npm install`
- `npm run dev`

You are now ready to get started. Each challenge will be outlined below!

Note: Each challenge will have a dedicated file for all work to be done. Focus on the single component file for each challenge.

## Challenge 1: useState

Add a counter using the useState hook.

1. Open the `components/ChallengeOne.tsx` file to begin.
2. Create two buttons. One button to increment the counter, and one to decrement the counter.
3. Add two functions one to handle incrementing and one to handle decrementing
4. Create a state variable using `useState` to store the value of our counter
5. Update the counter when clicking either button to decrement or increment.

## Challenge 2: useEffect

Fetch data via an API to be displayed in a component

1. Open the `components/ChallenegeTwo.tsx` file to begin.
2. Display a list of "users" by fetching the data from the provided API in a useEffect hook.
3. Use the endpoint `/api/users` to retrieve a mock list of users.

## Challenge 2.5: useEffect custom hook

Now that you are able to fetch data via an api. Create a custom hook to contain your fetching logic

1. Move your useEffect and useState code to a custom hook
2. Import your hook and verify the behaviour remains the same.

## Challenge 3: useMemo

Debounce challenge: Use the useMemo hook to memoize / optimize the rendering cycle within a form

1. Open the `components/ChallengeThree.tsx` file to begin.
2. Create an input field to simulate a search
3. When the user enters some text, we want to use useMemo to debounce before searching.

## Challenge 4: Component Composition

Create a hierarchical component strucutre for the list of users created in challenge 2.
Rather than dumping everything in one component and calling it a day. Break out the component into two.

1. Create two new files
  a.) UserList.tsx
    i.) Accepts Prop: users = Array of user objects provided by the API endpoint.
  b.) UserItem.tsx
    i.) Accepts Prop: firstName = string
    ii.) lastName = string
2. Render the same list via the two components rather than everything all on one page.