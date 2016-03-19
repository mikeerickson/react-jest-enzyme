/**
 * Add custom settings to Jasmine.
 */

/*globals jasmine*/

msg.log('is this called intrisically ');
jasmine.VERBOSE = true;

require('jasmine-reporters');
var reporter = new jasmine.JUnitXmlReporter("output/");
jasmine.getEnv().addReporter(reporter);