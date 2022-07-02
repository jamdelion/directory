export const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
      end = start;
      start = 0;
    }
    for (let i = start; i < end; i += step) {
      output.push(i);
    }
    return output;
  };

const generateCohorts = () => {
    const cohortArray = range(1, 29).map((num) => {
      let obj = {};

      obj.value = `FAC${num}`;
      obj.label = `FAC${num}`;
      return obj;
    });
    return cohortArray;
  };

export const cohortOptions = generateCohorts();