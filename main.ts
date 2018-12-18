function baz_odd(x: number): number {
  return 2 + baz_even(x - 1);
}

function baz_even(x: number): number {
  if (x == 0) return 0;
  return 2 + baz_odd(x - 1);
}

function bar(x: number): number {
  return (x % 2) ? baz_odd(x) : baz_even(x);
}

function foo(x: number): number {
  return bar(bar(x));
}

console.log(foo(21));
