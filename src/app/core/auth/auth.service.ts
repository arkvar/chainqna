import { User } from '../users/user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Injectable } from '@angular/core';
declare var steem: any;

@Injectable()
export class AuthService {

    tryLogin(uid: string, postKey: string): Observable<any> {
        console.log('AuthService.tryLogin: ' + uid + ' - ' + postKey);
        const accounts = this.getAccounts(uid);
        return accounts.then(function(result) {
            if (result.length === 0 || !result[0].posting) {
                console.log('AuthService ERROR');
                return Observable.throw(new Error('wrong credentials'));
            }
            const pubWif = result[0].posting.key_auths[0][0];
            const isvalid = steem.auth.wifIsValid(postKey, pubWif);
            if (isvalid) {
                // payload.user = new User(name, postKey);
                console.log('AuthService SUCCESS');
                return Observable.of(new User(uid, postKey));
                // return Observable.of({name: name, postKey: postKey});
            }
            console.log('AuthService ERROR');
            return Observable.throw(new Error('wrong credentials'));
        })
    }

    logout(): Observable<any> {
        return Observable.throw(new Error('not implemented yet'));
    }

    getFullAccount(name: string) {
        steem.api.setOptions({ url: 'wss://steemd-int.steemit.com/' });
        return Observable.fromPromise(steem.api.getAccountsAsync([name]));
    }

    private getAccounts(name: String) {
        steem.api.setOptions({ url: 'wss://steemd-int.steemit.com/' });
        return steem.api.getAccounts([name]);
    }
}

