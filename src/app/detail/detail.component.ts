import { Component, Input } from '@angular/core';
import {Donut} from "../shared/donut/domain/donut";

@Component({
  selector: 'app-donut-detail',
  styleUrls: ['./detail.component.css'],
  templateUrl: './detail.component.html'
})
export class DetailComponent {

  @Input() donut: Donut;
}
