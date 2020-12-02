import {Component, OnInit} from '@angular/core';
import {UploadFilesService} from '../../services/upload-files.service';
import {FileConstants} from '../../shared/utils/file-constants';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {

  FileConstants = FileConstants;
  textFiles: File[] = [];
  resultText: any;

  constructor(private uploadService: UploadFilesService) { }

  ngOnInit(): void {
  }

  uploadFiles() {
    if (this.textFiles.length) {
      const dataFile = new FormData();
      this.textFiles.forEach(textFile => {
        dataFile.append('files', textFile, textFile.name);
      });
      this.uploadService.upload(dataFile).subscribe(res => {
        this.resultText = res;
      });
    }
  }
}
