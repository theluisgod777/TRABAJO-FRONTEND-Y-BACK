import { Component, type OnInit } from "@angular/core"

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  showProfileMenu = false

  constructor() {}

  ngOnInit(): void {}

  toggleProfileMenu(): void {
    this.showProfileMenu = !this.showProfileMenu
  }
}
