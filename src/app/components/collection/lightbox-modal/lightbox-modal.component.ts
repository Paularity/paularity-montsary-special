import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-lightbox-modal",
  templateUrl: "./lightbox-modal.component.html",
  styleUrls: ["./lightbox-modal.component.scss"],
})
export class LightboxModalComponent implements OnInit {

  data;
  showImg = false;

  constructor(
    public dialogRef: MatDialogRef<LightboxModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.data = data;
  }

  ngOnInit() {}
}
