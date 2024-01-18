import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//String Interpolitan

position="Web Designer"
Work_experience=5
email="miguellee.com"
website="www.leewebdesign.com"
phone=111-111-1111

//Image Interpolitan/binding
imageUrl:string="assets/resume.jpg";
imageW: number = 110;
imageH: number = 110;

}
