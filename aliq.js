// Base class defining the template method
class MutationHandler {
    // Template method that contains the algorithm but defers iteration to subclasses
    handleMutation() {
        // Perform mutation handling logic
        this.preProcess();
        // Subclasses must implement the iteration logic
        this.iterate();
        this.postProcess();
    }

    // Abstract method for subclasses to implement
    iterate() {
        throw new Error('Subclasses must implement iterate method.');
    }

    // Optional hook methods that can be overridden by subclasses
    preProcess() {
        console.log('Default pre-processing');
    }

    postProcess() {
        console.log('Default post-processing');
    }
}

// Example subclass implementing the iteration logic
class ConcreteHandler extends MutationHandler {
    iterate() {
        console.log('Performing iteration in ConcreteHandler');
        // Here, you would implement your specific iteration logic
    }

    // Optionally override hooks if needed
    preProcess() {
        console.log('Custom pre-processing for ConcreteHandler');
    }
}

// Usage example
const handler = new ConcreteHandler();
handler.handleMutation();
