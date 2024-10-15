import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { CardComponent } from '../ui/card/card.component';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-baseform',
  standalone: true,
  imports: [DetailsComponent, CardComponent, ResultsComponent],
  templateUrl: './baseform.component.html',
})
export class BaseformComponent {

}
