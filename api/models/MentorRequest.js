"use strict";

/**
 * MentorRequest
 * @description :: Model for storing MentorRequest records
 */

module.exports = {
  schema: true,

  attributes: {
    // Fill your attributes here
    from:{
        model:'User'
    },

    mentor:{
      model:'Mentor'
    },

    approved:{
      type:'string',
      enum:["Yes","Waiting","No"],
      defaultsTo:"Waiting"
    },

    menteeStatus:{
      type:'string',
      enum:["Yes","Waiting","No"],
      defaultsTo:"Waiting"
    },

    preferredDates:{
      type:'Array'
    },

    preferredModes:{
      type:'string',
      enum:['Call', 'Skype', 'Hangouts', 'Whatsapp'],
      defaultsTo:'Call'
    },

    approvedDate:{
      type:'datetime'
    },

    approvedMode:{
      type:'string',
      enum:['Call', 'Skype', 'Hangouts', 'Whatsapp'],
    },

    lastModifiedBy:{
      model:'User'
    },

    toJSON() {
      return this.toObject();
    }
  },

  beforeUpdate: (values, next) => next(),
  beforeCreate: (values, next) => next()
};
