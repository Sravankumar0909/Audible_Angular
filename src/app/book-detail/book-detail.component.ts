import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Audiobook } from '../objects/audiobook';
import { AudiobookService } from '../services/audiobook.service';
import { BookcartService } from '../services/bookcart.service';
import { UserService } from '../services/user.service';
import { User } from '../objects/user';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  audiobook!: Audiobook;
  user!: User;
  imagePath: string = 'assets/images/'
  errorMessage: string = '';
  successMessage: string = '';
  sampleAudioURL: string = 'assets/sample_audio/'
  

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user)
    // write required logic to get books from cart
  }  

  addToCart(audiobookId: number) {
    // write a logic to add book to cart
  }

}
