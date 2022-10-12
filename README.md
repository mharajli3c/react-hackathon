# React Hackathon

This project is built with Next.js! For more information visit https://nextjs.org

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

Now that you are able to fetch data via an api. Create a custom hook to contain your fetching logic. Use the same component file from challenge #2

1. Move your useEffect and useState code to a custom hook
2. Import your hook and verify the behaviour remains the same.

## Challenge 3: useMemo/useCallback

Debounce challenge: Use the useMemo or useCallback hook to memoize / optimize the rendering cycle within a form
Assume you have a list of thousands of items you want to filter via search text. In order to optimize for performance, you will need to perform a search only after the user stops typing for 1 second.

1. Open the `components/ChallengeThree.tsx` file to begin.
2. When the user enters some text, we want to use useMemo or useCallback to debounce the search handler.
3. Update the current search handler to utilize the useMemo or useCallback hook.

## Challenge 4: Component composition

Create a hierarchical component strucutre for the list of users created in challenge 2.
Rather than dumping everything in one component and calling it a day. Break out the component into two.

1. Create two new files
UserList.tsx: Accepts Prop: users = Array of user objects provided by the API endpoint.
UserItem.tsx: Accepts Prop: firstName = string, lastName = string
2. Render the same list via the two components rather than everything all on one page.

## Challenge 5: Sharing state with context

Passing props down to many child components, also known as prop drilling, can become tedious.
Create a React context component to store the users' "auth" state. When the app loads, fetch a mock "user session" via the `/api/auth/login` endpoint.

1. Create a new React context object via `React.createContext()`;
2. Setup the context provider within `components/ChallengeFive.tsx`
3. Within the same file, fetch the auth data when the component mounts
4. Set the context value equal to the response of the api at `/api/auth/login`
5. In a child component, render the current value of the context without passing props.

## Challenge 6: useRef

Refs are an important concept in React. They allow us to persist state in React between renders or reference DOM elements in a nice API.

In `components/ChallengeSix.tsx` add a useRef hook to focus the input element when the page loads.

1. Create a useRef instance
2. Attach the ref to the defined <input> element
3. Utilize useEffect to trigger a 'focus' on the input element when the page loads.