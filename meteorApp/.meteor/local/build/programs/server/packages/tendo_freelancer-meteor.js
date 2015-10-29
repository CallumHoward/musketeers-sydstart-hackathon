(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var ECMAScript = Package.ecmascript.ECMAScript;
var babelHelpers = Package['babel-runtime'].babelHelpers;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var Freelancer;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/tendo_freelancer-meteor/freelancer-meteor.js             //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
Freelancer = Npm.require('freelancer-node')(Meteor.settings.Freelancer.developerId, Meteor.settings.Freelancer.developerKey);
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['tendo:freelancer-meteor'] = {
  Freelancer: Freelancer
};

})();

//# sourceMappingURL=tendo_freelancer-meteor.js.map
