import {Component, Input, OnInit} from '@angular/core';
import {IFeature} from "../../models";

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  @Input() feature!: IFeature;

  constructor() { }

  ngOnInit(): void {
  }

}
