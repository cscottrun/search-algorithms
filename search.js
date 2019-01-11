
const search = {

  linear: function (n, arr) {
    for ( let i = 0; i < arr.length; i++) {
      if ( arr[i] === n) return i;
    } 
    return -1;
  },

  binary: function (arr, n, i = 0) {
	
    let mid = Math.ceil(arr.length / 2 -1 )
    
    if (arr[mid] === n) {
      i += mid
      return i;

    } else if (arr[mid] > n) {
      return this.binary(arr.slice(0, mid+1), n, i);

    } else if (arr[mid] < n) {
      i += mid + 1
      return this.binary(arr.slice(mid+1, arr.length), n, i);

    } 
    return -1
  
  }

}



module.exports = search;