import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  importFactory = () => import('cart/Component');
}
