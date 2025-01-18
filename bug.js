function foo(a, b) {
  return a + b;
}

function bar() {
  let x = 10;
  let y = 20;

  let z = foo(x, y);

  console.log(z);
}

bar();
//This code looks simple and it works correctly. However, if the foo function was more complex and made a mistake that could cause an error in another part of the program, then the error could be difficult to debug.
//This is an example of an uncommon code error that is difficult to find and correct. 