import { random } from '@angular-with-react-micro-frontends-example/shared/data-access-products';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  rdm = random;

  importFactory = () => import('cart/Component');

  load() {
    import('cart/Component')
      .then((component) => {
        console.log(component);
      })
      .catch(console.log);
  }
}
