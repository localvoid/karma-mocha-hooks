# Karma plugin that exposes hooks from mocha framework

```ts
interface TestHooks {
  before: () => void;
  after: () => void;
}

declare global {
  interface Window {
    __test_hooks__?: TestHooks;
  }
}
```
