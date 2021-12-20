import {
  AfterViewInit,
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
})
export class ReactContainerComponent implements AfterViewInit {
  @Input() importFactory!: () => Promise<{ default: React.ComponentType }>;

  @ViewChild('reactContainer') private reactContainer: ElementRef | null = null;

  ngAfterViewInit(): void {
    this.renderComponent();
  }

  renderComponent(): void {
    if (!this.reactContainer?.nativeElement) {
      return;
    }

    const rootElement = this.reactContainer.nativeElement as HTMLElement;
    const Component = React.lazy(this.importFactory);

    ReactDOM.render(
      <React.Suspense fallback="Loading...">
        <Component />
      </React.Suspense>,
      rootElement
    );
  }
}
