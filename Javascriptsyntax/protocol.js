class Log{
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push({message, timestamp: Data.now()});
    }
    [Symbol.iterator]() {
        return this.messages.values();
    }
} 