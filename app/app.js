var read = require("read");
var strings = require('string-utils-demo');

function getFirstName(callback)
{
    function validate(firstName)
    {
        if(strings.isEmpty(firstName)) {
            read({prompt : "invalid string. enter a valid string"}, function(err, firstName)
            {
                validate(callback);
            });
        }
        else callback(firstName);
    };

    read({prompt : "what is your first name?" }, function(err, firstName)
    {
        validate(firstName);
    });
};

function getLastName(callback)
{
    read({prompt : "what is your last name?"}, function(err, lastName)
    {
           callback(lastName);
    });
}

function getHobbies(callback)
{
    read({prompt : "what are your hobbies?" }, function(err, hobbies){
        callback(hobbies);
    });
}

getFirstName(function(firstName)
{
    getLastName(function(lastName)
    {
        getHobbies(function(hobbies) {
        
            var value = strings.format("Hello {0} {1}", firstName, lastName);
            console.log(value);
        
            hobbyArray = hobbies.split(',');
            strings.sortArray(hobbyArray);
            
            var v2 = strings.format("Your hobbies are: {0}", hobbyArray.toString());
            console.log(v2);
        });
    });
});