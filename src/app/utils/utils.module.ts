import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http, XHRBackend, ConnectionBackend, RequestOptions } from '@angular/http';

import { ShellComponent } from '../components/shell/shell.component';
import { HeaderComponent } from '../components/header/header.component';
import { HttpService } from '../utils/http/http.service';
import { HttpCacheService } from '../utils/http/http-cache.service';

export function createHttpService(backend: ConnectionBackend,
                                  defaultOptions: RequestOptions,
                                  httpCacheService: HttpCacheService) {
  return new HttpService(backend, defaultOptions, httpCacheService);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    ShellComponent,
    HeaderComponent
  ],
  providers: [
    HttpCacheService,
    {
      provide: Http,
      deps: [XHRBackend, RequestOptions, HttpCacheService],
      useFactory: createHttpService
    }
  ]
})
export class UtilsModule {

  constructor(@Optional() @SkipSelf() parentModule: UtilsModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
