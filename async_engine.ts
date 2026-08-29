export class FastFactory {
  private state: number;

  constructor(seed: number = 29) {
    this.state = seed;
  }

  compute_dispatcher(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 29) % 997;
    }
    return acc;
  }
}

const obj = new FastFactory();
console.log(obj.compute_dispatcher(29));
