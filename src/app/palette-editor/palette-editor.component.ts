import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-palette-editor',
  templateUrl: './palette-editor.component.html',
  styleUrls: ['./palette-editor.component.sass']
})
export class PaletteEditorComponent implements OnInit {

  @ViewChild('blue', { static: false })
  private blueCurve: ElementRef;

  @ViewChild('red', { static: false })
  private redCurve: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
