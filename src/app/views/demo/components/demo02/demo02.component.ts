import { Component, OnInit } from '@angular/core';
import { FilePond, FilePondOptions} from 'filepond';

interface IImage {
  id:number|null;
  image: string|null;
}

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss']
})

export class Demo02Component implements OnInit {

  image?: IImage | null;
  constructor() { }

  myPond!: FilePond;

  pondOptions: FilePondOptions = {
    allowMultiple: false,
    labelIdle: 'Drop files here...',
    //acceptedFileTypes: ['image/jpeg, image/png', 'image/jpg'],
  }

  pondFiles: FilePondOptions["files"] = [
    {
      source: 'assets/photo.jpeg',
      options: {
        type: 'local'
      }
    }
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

  pondHandleRemoveFile(event: any) {
    console.log('A file was removed', event);
  }

  pondHandleActivateFile(event: any) {
    console.log('A file was activated', event)
  }

  uploadFiles(){
    console.log(this.myPond.getFiles());
  }

  ngOnInit(): void {
    this.image = {id:1, image: "assets/photo.jpeg"}
  }

}
