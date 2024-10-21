import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
@ViewChild('form') private form ?: ElementRef<HTMLFormElement>; 
// private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

// @Output() add = new EventEmitter<{title: string, text: string}>();
add = output<{title: string; text: string}>();

 onSubmit(title: string, ticketText: string){
  this.add.emit({
    title: title,
    text: ticketText
  })
  this.form?.nativeElement.reset();
  // this.form()?.nativeElement.reset();
 }

 ngAfterViewInit() {
   console.log('AFTER VIEW INIT');
   console.log(this.form?.nativeElement)
 }

 ngOnInit(){
  console.log('ON INIT');
  console.log(this.form?.nativeElement)
 }
}
