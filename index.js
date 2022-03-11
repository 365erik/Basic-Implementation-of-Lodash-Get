// A function that behaves much like _.get();
const gettish = (obj, path, def) => {
  let context = { ...obj };
  const value = path.split('.').every(current => {
    if (context.hasOwnProperty(current)) {
      context = context[current];
      return true;
    }
    return false;
  });

  if (value) {
    return context;
  } else if (def !== undefined) {
    return def;
  }
};

const obj = {
  person: {
    fname: `Erik`,
    lname: `Smith`,
    appearance: {
      height: 71,
      weight: 160,
      hair: null,
    }
  }
}

console.log(gettish(obj, `person`));
console.log(gettish(obj, `person.appearance`));
console.log(gettish(obj, `person.appearance.weight`));
console.log(gettish(obj, `person.appearance.hair`, `brown`)); // <= null
console.log(gettish(obj, `person.appearance.weight.gained`)); //<= undefined
console.log(gettish(obj, `person.appearance.weight.gained`, 0)); // 0