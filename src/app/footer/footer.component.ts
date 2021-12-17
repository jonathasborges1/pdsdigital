import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  defaultImage =  '/assets/img/coringa.png';
  youtubeimages = `/assets/img/footer/social/youtubesocialicon.png`;
  instagramimages = `/assets/img/footer/social/instagramsocialicon.png`;
  tiktokimages = `/assets/img/footer/social/tiktoksocialicon.png`;
  constructor() { }

  ngOnInit(): void {
  }

}
