// Import the core angular services.
import { ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Event as RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';
import { Params } from '@angular/router';
import { Router } from '@angular/router';

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@Injectable({
  providedIn: 'root'
})
export class RouterParams {

  public params: BehaviorSubject<Params>;
  public paramsSnapshot: Params;

  private router: Router;

  // I initialize the router params service.
  constructor(router: Router) {

    this.router = router;

    this.paramsSnapshot = {};
    this.params = new BehaviorSubject(this.paramsSnapshot);

    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): boolean => {

            return (event instanceof NavigationEnd);

          }
        )
      )
      .subscribe(() => {

          var snapshot = this.router.routerState.snapshot.root;
          var nextParams = this.collectParams(snapshot);

          if (this.paramsAreDifferent(this.paramsSnapshot, nextParams)) {
            this.params.next(this.paramsSnapshot = nextParams);
          }
        });
  }

  private collectParams(root: ActivatedRouteSnapshot): Params {

    var params: Params = {};

    (function mergeParamsFromSnapshot(snapshot: ActivatedRouteSnapshot) {

      Object.assign(params, snapshot.params);

      snapshot.children.forEach(mergeParamsFromSnapshot);

    })(root);

    return (params);

  }

  private paramsAreDifferent(
    currentParams: Params,
    nextParams: Params
  ): boolean {

    var currentKeys = Object.keys(currentParams);
    var nextKeys = Object.keys(nextParams);

    if (currentKeys.length !== nextKeys.length) {
      return true;
    }

    for (var i = 0, length = currentKeys.length; i < length; i++) {
      var key = currentKeys[i];

      if (currentParams[key] !== nextParams[key]) {
        return true;
      }
    }

    return false;
  }

}
