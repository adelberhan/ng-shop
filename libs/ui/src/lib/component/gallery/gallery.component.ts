import { Component ,Input,OnInit} from '@angular/core';

@Component({
  selector: 'ui-gallery',
  templateUrl: './gallery.component.html',
  styles: [
  ]
})
export class GalleryComponent implements OnInit {
  selectedImage: string;

  @Input() imgs: string[];


  ngOnInit(): void {
    if (this.imgs.length) {
    this.selectedImage = this.imgs[0]

    }
  }

  changeImage(imgs:string) {
  this.selectedImage=imgs
  }

  get hasImages() {
    return this.imgs.length >0
  }


  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 4,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 2,
    },
    {
      breakpoint: '400px',
      numVisible: 1,
    },
  ];

}
