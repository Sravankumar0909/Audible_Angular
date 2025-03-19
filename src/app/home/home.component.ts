import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../objects/user';
import { UserService } from '../services/user.service';
import { Audiobook } from '../objects/audiobook';
import { AudiobookService } from '../services/audiobook.service';
import { BookcartService } from '../services/bookcart.service';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user!: User;
  audiobooks: Audiobook[] = [];
  sorts: string[] = ['Price: Low to High', 'Price: High to Low', 'Rating: High to Low', 'Rating: Low to High'];
  imagePath: string = '/assets/images/'
  successMessage: string = '';
  errorMessage: string = '';


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user)
    // write required logic
  }

  searchBook() {
    // write logic to search books
  }

  sortBooks() {
    // write logic to sort books
  }

  addToCart(audiobookId: number) {
    // write logic to add books to cart
  }


  bookDetail(audiobookId: number) {
    this.router.navigate(['audiobook', audiobookId]);
  }


}
