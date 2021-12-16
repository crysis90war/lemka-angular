import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-floating-input',
  templateUrl: './floating-input.component.html',
  styleUrls: ['./floating-input.component.scss']
})
export class FloatingInputComponent implements OnInit {
  @Input() label: string;
  @Input() classValid: string = '';
  @Input() inputType: string = 'text';
  @Input() forId: string = 'floatingInput';
  @Input() placeHolder: string = 'Exemple';
  @Input() field;

  constructor() {
  }

  ngOnInit(): void {
  }

}
