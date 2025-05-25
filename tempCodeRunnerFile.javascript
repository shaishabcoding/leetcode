function fn(x = null){
  x ??= 0;

  return x
}

console.log(fn())