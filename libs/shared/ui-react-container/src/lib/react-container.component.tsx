import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

@Component({
  selector: 'shared-react-container[importFactory]',
  templateUrl: './react-container.component.html',
  styleUrls: ['./react-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactContainerComponent<Props extends Record<string, unknown>>
  implements AfterViewInit
{
  @Input() importFactory!: () => Promise<{ default: React.ComponentType }>;

  @Input()
  get props(): Partial<Props> {
    return this._props;
  }
  set props(props: Partial<Props>) {
    this._props = props;
    this.renderComponent();
  }

  @ViewChild('reactContainer') private reactContainer: ElementRef | null = null;

  private _props: Partial<Props> = {};
  private isAfterViewInit = false;

  ngAfterViewInit(): void {
    this.isAfterViewInit = true;
    this.renderComponent();
  }

  private renderComponent(): void {
    if (!this.isAfterViewInit || !this.reactContainer?.nativeElement) {
      return;
    }

    const rootElement = this.reactContainer.nativeElement as HTMLElement;
    const Component = React.lazy(this.importFactory);

    ReactDOM.render(
      <React.Suspense fallback="">
        <Component {...this.props} />
      </React.Suspense>,
      rootElement
    );
  }
}
