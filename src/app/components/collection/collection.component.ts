import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
// import { MatDialog, MatDialogConfig } from "@angular/material";
import { BehaviorSubject, Observable } from "rxjs";
import { COLLECTION_LIST } from "./collection_list";
import { LightboxModalComponent } from "./lightbox-modal/lightbox-modal.component";
@Component({
  selector: "app-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.scss"],
})
export class CollectionComponent implements OnInit {
  imagePorts: any[];
  pinCode: BehaviorSubject<String> = new BehaviorSubject<String>("");
  showInputPinCode: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(
    false
  );
  inputTryCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private SECRET_CODE = "5139";

  isHeart = false;

  constructor(public dialog: MatDialog) {
    this.imagePorts = COLLECTION_LIST.collections.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  openDialog(src) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = { src };
    this.clickedAudio();
    setTimeout(() => {
      const dialogRef = this.dialog.open(LightboxModalComponent, dialogConfig);
    }, 3000);

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  getSecretCode() {
    return this.SECRET_CODE;
  }

  ngOnInit() {}

  sendAccessCode(code) {
    this.pinCode.next(code.value);
    this.inputTryCount.next(this.inputTryCount.value + 1);
  }

  toggleAccessCodeInput() {
    this.showInputPinCode.next(!this.showInputPinCode.value);
  }

  hasExceededMaximumTryCount() {
    if (this.inputTryCount.value >= 3) return true;
    return false;
  }

  toggleHeart() {
    this.isHeart = !this.isHeart;
  }

  clickedAudio() {
    let audio = new Audio();
    audio.src = "../../../assets/audio/universe.mp3";
    audio.load();
    audio.play();
  }
}
