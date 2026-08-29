export class LocalAdapter {
  private state: number;

  constructor(seed: number = 77) {
    this.state = seed;
  }

  handle_client(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 77) % 997;
    }
    return acc;
  }
}

const obj = new LocalAdapter();
console.log(obj.handle_client(77));
