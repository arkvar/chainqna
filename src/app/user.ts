export class User {
  name: String;
  postKey: String;
  constructor(name: String = '', postKey: String = '') {
    this.name = name;
    this.postKey = postKey;
  }
}
