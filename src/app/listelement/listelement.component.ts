import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listelement',
  templateUrl: './listelement.component.html',
  styleUrls: ['./listelement.component.css']
})
export class ListelementComponent {
  @Input() name: string | undefined;
  @Input() time: string | undefined;
}
