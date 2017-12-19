export interface IUser {
    uid:         string;
    postKey:     string;
    loading?:    boolean;
    error?:      string;
}

export class User {
    constructor(public uid: string, public postKey: string) {}
}
