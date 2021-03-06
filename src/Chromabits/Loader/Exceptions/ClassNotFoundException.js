'use strict';

/**
 * ClassNotFoundException
 *
 * Thrown when a class is not found
 */
class ClassNotFoundException extends Error
{
    /**
     * Construct an instance of a ClassNotFoundException
     *
     * @param className
     */
    constructor (className) {
        super(...arguments);

        this.setClassName(className);
    }

    /**
     * Set the name of the class that was not found
     *
     * @param {string} className -
     *
     * @returns {undefined} -
     */
    setClassName (className) {
        this.message = 'Class `' + className + '` is not defined in the current'
        + ' context. Check your class map setup';
    }
}

export default ClassNotFoundException;
