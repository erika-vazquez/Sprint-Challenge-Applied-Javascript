class Carousel {

}

let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


class Carousel {
    constructor(element) {
        this.element = element;
        //references to the classes needed
        this.photoBox = this.element.querySelector('.carousel');
        this.prev = this.element.querySelector('.left-button');
        this.next = this.element.querySelector('.right-button');
        this.photos = this.element.querySelectorAll('.carousel img');

        //variable initialization 

        this.counter = 0; // Keeps track of which picture is showing
        this.current = this.photos[0];


    }


    navigate(direction) {


        // Keeps track of current photo showing
        this.counter = this.counter + direction;
        console.log(this.counter)



        this.current = this.photos[this.counter];
        this.current.classList.add('current');
    }

}
let carousel = document.querySelector(".carousel");

carousel = new Carousel(carousel)
carousel.navigate();