import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //Recommended by angular team
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick(){
  //   console.log("Clicked");
  //  }
  @Input({ required: true }) label!: string;
  private el = inject(ElementRef);
  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  constructor() {

    //For entire application
    //Triggered for all changes
    afterRender(() => {
      console.log("After Render")
    });

    //Triggered for next change anywhere in entire app
    afterNextRender(() => {
      console.log("After next render")
    });
  }

  onClick() {
    console.log('Clicked');
  }

  ngAfterContentInit(): void {
    //...
  }
}
