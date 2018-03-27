var ifItPalindrome = function(arr){
    if (arr.length % 2 != 0){
      var middle = arr[arr.length/2].split("");
      if (middle.length % 2 != 0){
        return -1;
      } else {
        for (var i = 0; i < middle.length/2; i++){
          if (middle[i] != middle[arr.length -i]){
            return -1;
          };
        };
      } ;
      for (var i = 0; i < arr.length/2; i++){
        var temp = arr[(arr.length - 1) - i].split('').reverse().join('');

        if (arr[i] != temp){
            return -1;
        };
      };
    } else {
      for (var i = 0; i < arr.length/2; i++){
        var temp = arr[(arr.length - 1) - i].split('').reverse().join('');

        if (arr[i] != temp){
            return -1;
        };
      };
      return 1;
  }
};

// UI logic
function primeNumber(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr[i]=true;
  }
  for (var i = 2; i < Math.sqrt(num); i++){
    if (arr[i]) {
      for(var j = i^2; j < num; j += i) {
        arr[j] = false;
      }
    }
  }

}
