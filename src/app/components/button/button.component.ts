import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() disabled!: boolean;
  @Input() type!: string | null;
  @Input() textButton!: string | null;

  constructor() { }

  ngOnInit(): void {
  }

}
