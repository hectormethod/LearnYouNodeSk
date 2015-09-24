var total = 0;
var length = process.argv.length;
(function(){
  console.log('These are contents of argv: ' + process.argv.slice(2,length));
})();
for (var i = 2; i < process.argv.length; i ++) {
  total += parseInt(process.argv[i]);
  console.log(total);
}
