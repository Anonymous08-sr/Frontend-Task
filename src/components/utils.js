export function resolveAfterFewSeconds(delay = 500) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved");
      }, delay);
    });
  }
  