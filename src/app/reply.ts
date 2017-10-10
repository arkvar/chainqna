export class Reply {
    author: String = '';
    content: String = '';

    constructor(origin: any = null) {
        if (origin === null) {
          return;
        }
        this.author = origin.author;
        this.content = origin.content;
    }
}
