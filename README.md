# next-router-shallow

## Shallow routing

Shallow routing allows you to change the URL without running data fetching methods again.

## The Issue Tracker

https://github.com/vercel/next.js/discussions/48110

## Installation

### npm

```shell
npm install next-router-shallow
```

### yarn

```shell
yarn add next-router-shallow
```

### pnpm

```shell
pnpm add next-router-shallow
```

### Usage

```ts
import { useRouter } from "next/navigation";
import "next-router-shallow";

export default function MyComponent() {
  const router = useRouter();
  
  const onClick = () => {
    router.shallow("/blog?search=shallow");
  };
  ...
}
```

> [!IMPORTANT]  
> This import must be made in any file that uses the `router.shallow()` method.
