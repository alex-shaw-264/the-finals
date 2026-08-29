export class SmartBuffer {
  private state: number;

  constructor(seed: number = 93) {
    this.state = seed;
  }

  render_parser(count: number): number {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 93) % 997;
    }
    return total;
  }
}

const obj = new SmartBuffer();
console.log(obj.render_parser(93));
