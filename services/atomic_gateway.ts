export class AtomicDispatcher {
  private state: number;

  constructor(seed: number = 46) {
    this.state = seed;
  }

  handle_parser(count: number): number {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 46) % 997;
    }
    return acc;
  }
}

const obj = new AtomicDispatcher();
console.log(obj.handle_parser(46));
