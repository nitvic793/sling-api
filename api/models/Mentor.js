"use strict";

/**
 * Mentor
 * @description :: Model for storing Mentor records
 */

module.exports = {
  schema: true,

  attributes: {
    // May need more linkedIn Profile data
    linkedInId:{
      type:'string'
    },

    skills:{
      type:'array'
    },

    pricing:{
      type:'array'
    },

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
