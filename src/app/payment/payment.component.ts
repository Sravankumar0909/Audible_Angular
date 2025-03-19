import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../objects/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { PaymentService } from '../services/payment.service';
import { Card } from '../objects/card';
import { LibraryService } from '../services/library.service';
import { BookcartService } from '../services/bookcart.service';
import { Audiobook } from '../objects/audiobook';
import { AudiobookService } from '../services/audiobook.service';
import { AudioCart } from '../objects/audiocart';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cards: Card[]=[];
  user!: User
  oldCard: boolean = false
  errorMessage!: String
  sucessMessage!: String

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.behaviorSubject$.subscribe((user) => this.user = user)
    this.userService.behaviorSubject$.subscribe((user) => this.user = user);
    //  Add form controls and required logic for adding cards
  }



  addCard(){
    //Write logic to add card here
  }

  viewAllCards(){
    // Write logic to get already existing cards
  }
  

  getDiscountAndPay(card:Card){
    // Write logic to get discount from backend
  }

  back(){
    this.oldCard=false
    this.sucessMessage=""
    this.errorMessage=""
  }

  // Below code will display popup for payment
  discountCard!:Card;
  openModel(card:Card){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='block'
    }
  }

  cvv="";
  pay(){
    // Write payment logic here
  }

// Below code will close the payment popup
  closeModel(){
    const modelDiv=document.getElementById('myModal');
    if(modelDiv!=null){
      modelDiv.style.display='none'
    }
  }

}
