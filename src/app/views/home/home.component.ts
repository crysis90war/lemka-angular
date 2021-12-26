import { Component, OnInit } from '@angular/core';
import { IFeature } from 'src/app/core/models';
import featuresJson from '../../_files/features.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public features: IFeature[] = [];

  constructor() {}

  ngOnInit(): void {
    this.features = featuresJson;
  }
}
