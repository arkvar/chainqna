export class Vote {
  percent: Number;
  reputation: String;
  rshares: Number;
  time: String;
  voter: String;
  weight: Number;
  constructor(voter: String) {
    this.voter = voter;
  }
}
