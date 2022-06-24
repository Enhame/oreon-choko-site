import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterParams } from './modules/shared/services/route-params/route-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public activeLink: string = '';

  constructor(public routeService: RouterParams) {
  }

  public ngOnInit(): void {
    this.routeService.params.subscribe((data) => {
      this.activeLink = data['name'];
    });
  }
}
