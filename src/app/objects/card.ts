export class Card {
    cardNo!: number
    expiresOn!: Date
    name!: String
    customerId!:number;
    cvv!: string;
    cardType!:Cardtype;
}

enum Cardtype{
    CREDIT_CARD,DEBIT_CARD
}