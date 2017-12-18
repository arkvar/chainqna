export class Reply {
    author: String = '';
    body: String = '';

    constructor(origin: any = null) {
        if (origin === null) {
          return;
        }
        this.author = origin.author;
        this.body = origin.body;
    }
}
