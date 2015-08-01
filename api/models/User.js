/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	  username:{
        type:"string", 
        required:true,
        minLength: 2,
        unique: true
      },
	  name:{
        type:"string", 
        required:true,
        minLength: 2
      },
      gender:{
        type:"string", 
        required:true,
        minLength: 1
      },
      phone:{
        type:"string",
        required:false,
        unique: false
      },
      email:{
        type:"email",
        required:false,
        unique: false
      },
      city:{
        type:"string",
        required:false
      }
      hometown:{
        type:"string",
        required:false
      }      
      country:{
        type:"string",
        required:false
      }
      language:{
        type:"string",
        required:false
      }  
      birthdate:{
      	type:"string",
      	required:false
      }          
  }
};

