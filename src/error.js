const createErrorFactory = function(name){
    return class MyErrors extends Error {
        constructor(message) {
            super(message);
            this.name = name;
        }
    }
}

export const ValidationError = createErrorFactory('ValidationError');
export const NotFoundError = createErrorFactory('NotFoundError');