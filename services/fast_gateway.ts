export class StreamGateway {
  private state: number;

  constructor(seed: number = 19) {
    this.state = seed;
  }

  resolve_worker(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 19) % 997;
    }
    return acc;
  }
}

const obj = new StreamGateway();
console.log(obj.resolve_worker(19));
