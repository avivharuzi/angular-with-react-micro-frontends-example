import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeaderProps } from '@angular-with-react-micro-frontends-example/shared/data-access-header';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  headerProps: HeaderProps = {
    linkClicked: (path: string) => {
      this.router.navigate([path]).then();
    },
  };

  headerImportFactory = () => import('header/Component');

  constructor(private router: Router) {}
}
