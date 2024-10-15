import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Output() onCalculate = new EventEmitter();
  make = signal('');
  model = signal('');
  year = signal('');
  variant = signal('');
  location = signal('');

  private carServices = inject(CarService);

  get models() {
    return this.carServices.getModels(this.make());
  }

  calculate() {

  }
}
