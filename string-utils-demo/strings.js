var Strings = function()
{
    this.isEmpty = function(str)
    {
        return (str == undefined || str.length == 0);
    };

    this.format = function()
    {
        var s = arguments[0];
          for (var i = 0; i < arguments.length - 1; i++) {
               var reg = new RegExp("\\{" + i + "\\}", "gm");
               s = s.replace(reg, arguments[i + 1]);
          }
          return s;
    };
    
    this.sortArray = function(array)
    {
        array.sort(function(a, b)
        {
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        });
    };
}

module.exports = new Strings();