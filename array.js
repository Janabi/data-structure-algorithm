class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length-1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

// const newArray = new MyArray();
// newArray.push({ city: 'Amman' })
// newArray.push({ city: 'Baghdad' })
// newArray.push({ city: 'Paris' })
// newArray.push({ city: 'NY' })
// newArray.delete(1)
// newArray.pop()
// newArray.push({ city: 'Baghdad' })
// console.log(newArray);

// Create a function that reverses a string:
// 'Hi My name is Andrei' should be:
function reverse(str) {
    if (typeof str !== 'string' || !str.length) {
        return '';
    }

    let reversedStr = '';
    for (let i = str.length - 1; i >=0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}

// const reversed = reverse('Hi My name is Andrei');
// console.log('reversed>>>>> ', reversed);
