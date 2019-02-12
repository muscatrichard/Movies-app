import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { KeyValueObject } from '../../movies/models/movie';

@Component({
  selector: 'app-dd-menu',
  templateUrl: './dd-menu.component.html',
  styleUrls: ['./dd-menu.component.scss']
})
export class DdMenuComponent implements OnChanges {

  @Input() options: KeyValueObject[] = [];
  @Input() value = '';
  @Output() selectedValue = new EventEmitter<string>();
  public displayValue: string;

  ngOnChanges() {
    this.displayValue = this.options.find(option => option.value === this.value).key;
    this.selectedValue.emit(this.value);
  }
}
