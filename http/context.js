/*var pet = {
    words: '...',
    speak: () => {
        console.log(this.words);
        console.log(this === pet);
        console.log(this);
    }
}

pet.speak();*/

var pet = {
    words: '...',
    speak: function() {
        console.log(this.words);
        console.log(this === pet);
        console.log(this);
    }
}

pet.speak();

/*function pet(words) {
    this.words = words;
    console.log(global==this);
    console.log(this.words);
    console.log(this);
}

pet('...')*/

/*function pet(words) {
    this.words = words;
    this.speak = () => {
        console.log(this.words);
        console.log(this);
    }
}

var cat = new pet('Miao');
cat.speak()*/