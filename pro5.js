/*FILTERED LS (Exercise 5 of 13)  
   
  Create a program that prints a list of files in a given directory,  
  filtered by the extension of the files. You will be provided a directory  
  name as the first argument to your program (e.g. '/path/to/dir/') and a  
  file extension to filter by as the second argument.  
   
  For example, if you get 'txt' as the second argument then you will need to  
  filter the list to only files that end with .txt. Note that the second  
  argument will not come prefixed with a '.'.  
   
  The list of files should be printed to the console, one file per line. You  
  must use asynchronous I/O.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
HINTS  
   
  The fs.readdir() method takes a pathname as its first argument and a  
  callback as its second. The callback signature is:  
   
     function callback (err, list) {  }  
   
  where list is an array of filename strings.  
   
  You may also find node's path module helpful, particularly the extname  
  method.  
     */

var fs = require('fs');
var fileType = '.' + process.argv[3];
var path= require('path');

fs.readdir(process.argv[2], function(err, list){
    if(!err){
        for(var i = 0; i < list.length; i++){
        if(path.extname(list[i]) === fileType){
            console.log(list[i]);
        }
    }
}
    
});