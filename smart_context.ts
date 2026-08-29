export class FastResolver {
  private state: number;

  constructor(seed: number = 50) {
    this.state = seed;
  }

  collect_router(count: number): number {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 50) % 997;
    }
    return count;
  }
}

const obj = new FastResolver();
console.log(obj.collect_router(50));
