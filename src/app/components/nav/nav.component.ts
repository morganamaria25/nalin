import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogCancelComponent} from '../dialog-cancel/dialog-cancel.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  // tslint:disable-next-line:typedef
  openDialogCancel() {
    this.dialog.open(DialogCancelComponent);
  }

  ngOnInit(): void {
  }

}
