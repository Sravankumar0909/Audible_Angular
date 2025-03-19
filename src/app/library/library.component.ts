import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { Audiobook } from '../objects/audiobook';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{
  user!: User;
  audioBooks: Audiobook[] = [];
  imagePath: string = 'assets/images/'
  audioPath: string = 'assets/audio/'

  constructor(private router: Router, private userService: UserService, private libraryService: LibraryService) {}

  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user)
    // Write required logic to fetch purchased books
  }

}
