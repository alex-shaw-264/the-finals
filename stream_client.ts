export class SecureRouter {
  private state: number;

  constructor(seed: number = 43) {
    this.state = seed;
  }

  handle_worker(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 43) % 997;
    }
    return acc;
  }
}

const obj = new SecureRouter();
console.log(obj.handle_worker(43));
