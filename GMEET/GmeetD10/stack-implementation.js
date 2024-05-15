class stack{
    #container = [];
    #maxSize;

    constructor(maxSize = 10){
        this.#maxSize = maxSize;
    }
    
    #isFull(){
        return this.#container.length >= this.#maxSize
    }

    #isEmpty(){
        return this.#container.length === 0;
    }

    push(element){
        if (this.#isFull()){
            console.log("Stack overflow!");
            return;
        }

        this.#container.push(element)
    }

    pop(){
        if(this.#isEmpty()){
            console.log("Stack overload!");
            return;
        }

        this.#container.push()
    }

    getElement(){
        return this.#container;
    }
}

const Stack = new stack()
Stack.push("Netflix")
Stack.push("Google")
Stack.push("Youtube")
Stack.push("Whatsapp")
Stack.pop()
Stack.pop()

console.log(Stack.getElement());