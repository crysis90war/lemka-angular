import {Component, OnInit} from '@angular/core';
import {IFeature} from "../../models";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public features: IFeature[] = [];

  constructor() {
  }

  ngOnInit(): void {

    this.features.push({
      title: "Confections",
      description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.",
      image: "../../../../assets/confections.jpg"
    });
    this.features.push({
      title: "Réparations",
      description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.",
      image: "../../../../assets/reparation.jpg"
    });
    this.features.push({
      title: "Retouches",
      description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.",
      image: "../../../../assets/retouche.jpg"
    });
    this.features.push({
      title: "Tissus",
      description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.",
      image: "../../../../assets/tissus.jpg"
    });
    this.features.push({
      title: "Demander devis",
      description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.",
      image: "../../../../assets/devis.jpg"
    });
    this.features.push({
      title: "Rendez-vous",
      description: "Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.",
      image: "../../../../assets/rendezvous.jpg"
    });
  }
}
