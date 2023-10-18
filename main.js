class Books{
    constructor(book,author,year,price){
        this.book = book
        this.author = author
        this.year = year
        this.price = price
    }
    discount_Price(discount){
        const discountprice = (this.price / 100 * discount)
        this.discountprice = this.price - discountprice
    }
}

const myBook = new Books ("The Lord of the Rings","J. R. R. Tolkien","1954",30)

myBook.discount_Price(30)

console.log(myBook);