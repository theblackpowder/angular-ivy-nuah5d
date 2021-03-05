import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "hello world";
  isSpecial: boolean = true;
  messageWelcome: string = "";
  username: string = "";
  redColor = "Red";
  imageURL =
    "https://i.gaw.to/content/photos/43/39/433990-cette-subaru-impreza-22b-sti-est-a-vendre-pour-un-demi-million.jpg?460x287";
}

/**onClick(message , string) : void{
  messageWelcome = message;
} */
