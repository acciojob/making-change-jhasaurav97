const makeChange = (c) => {
  // your name here
  const changes = {};

  changes.q = Math.floor(c / 25);
  c = c % 25;

  changes.d = Math.floor(c / 10);
	c = c % 10;

  changes.n = Math.floor(c / 5);
	c = c % 5;

  changes.p = c;

  return changes;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
