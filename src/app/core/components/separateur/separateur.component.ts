import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-separateur',
  templateUrl: './separateur.component.html',
  styleUrls: ['./separateur.component.scss']
})
export class SeparateurComponent implements OnInit {

  @Input() titre!: string
  @Input() sousTitre!: string

  constructor() { }

  ngOnInit(): void {
  }

}
