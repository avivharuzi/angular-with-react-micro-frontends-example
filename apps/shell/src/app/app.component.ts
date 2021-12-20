import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  importFactory = () => import('cart/Component');

  load() {
    import('cart/Component')
      .then((component) => {
        console.log(component);
      })
      .catch(console.log);
  }
}
