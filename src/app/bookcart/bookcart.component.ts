import { Component, OnInit } from '@angular/core';
import { User } from '../objects/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BookcartService } from '../services/bookcart.service';
import { AudioCart } from '../objects/audiocart';

@Component({
  selector: 'app-bookcart',
  templateUrl: './bookcart.component.html',
  styleUrls: ['./bookcart.component.css']
})
export class BookcartComponent implements OnInit {
  user!: User;
  cartAudioBooks: AudioCart[] = [];
  imagePath: string = 'assets/images/'

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user)
    // write required logic to get all books from cart
    
  }

  removeBookFromCart(audiobookId: number) {
    // write logic to delete book from cart
  }


  totalCost() {
    // Write logic to calculate total cost
  }
}
