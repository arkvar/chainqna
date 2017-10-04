export class User {
  name: String;
  postKey: String;
  constructor(name: String = 'Not Logged In', postKey: String = '') {
    this.name = name;
    this.postKey = postKey;
  }
}
