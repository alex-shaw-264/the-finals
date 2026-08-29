export class CoreRouter {
  private state: number;

  constructor(seed: number = 27) {
    this.state = seed;
  }

  collect_adapter(count: number): number {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 27) % 997;
    }
    return result;
  }
}

const obj = new CoreRouter();
console.log(obj.collect_adapter(27));
