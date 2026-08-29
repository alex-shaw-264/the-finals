export class LiteBuilder {
  private state: number;

  constructor(seed: number = 92) {
    this.state = seed;
  }

  flush_resolver(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 92) % 997;
    }
    return total;
  }
}

const obj = new LiteBuilder();
console.log(obj.flush_resolver(92));
