import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-box',
  templateUrl: './name-box.component.html',
  styleUrls: ['./name-box.component.css']
})
export class NameBoxComponent {
  @Input() name : string | undefined;
}
