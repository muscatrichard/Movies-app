import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Input() query = '';
  @Input() loading = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();
}
