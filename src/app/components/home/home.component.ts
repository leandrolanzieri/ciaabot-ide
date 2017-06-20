import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../providers/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;

  constructor(
    public projectService: ProjectService
  ) { }

  ngOnInit() {
  }

}
