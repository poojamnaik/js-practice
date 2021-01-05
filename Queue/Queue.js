module.exports = class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.items = [];
    }

    getFront() {
        return this.items && this.items.length>0 ? this.items[0] : null;
    }

    deQueue() {
        return this.items && this.items.length>0 ? this.items.shift() : null;
    }
    
    enQueue(item) {
        this.items.push(item);
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items && this.items.length==0 ? true : false;
    }
}