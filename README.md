# Next.js 15 Server Components Race Condition

This repository demonstrates a race condition that can occur in Next.js 15 server components when performing parallel data fetches. The issue arises from asynchronous operations where data dependencies are not properly handled, leading to unexpected `undefined` values or incomplete data.

## Bug Description
The `bug.js` file showcases the problematic code where user data and associated orders are fetched concurrently. The user data is then used before the order data is guaranteed to be available, causing the application to potentially crash or display incorrect information. 

## Solution
The `bugSolution.js` file provides a solution to this issue. It uses `Promise.all` to ensure both requests complete before using the data, eliminating the race condition.  Proper error handling is also implemented.

## How to reproduce
Clone this repository and run `npm install`. Start the Next.js development server using `npm run dev`. Observe the behaviour in the browser and note the potential inconsistencies. Then, switch to the `bugSolution.js` to observe the fix.