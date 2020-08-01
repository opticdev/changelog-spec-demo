import { Questions } from './questions';
import deepEqual from 'deep-equal';

export const ChangelogQuestions = (state, state1) => {
  const questions1 = Questions(state);
  const questions2 = Questions(state1);

  function areTheseSpecsEqual() {
    //naive, should use projections
    return deepEqual(state, state1);
  }

  function whatHasChanged() {
    const changes = [];

    const reqSet1 = new Set([
      ...questions1.whatAreTheRequiredFieldsOfAnObject('root'),
    ]);
    const reqSet2 = new Set([
      ...questions2.whatAreTheRequiredFieldsOfAnObject('root'),
    ]);

    const newRequired = new Set([...reqSet2].filter((x) => !reqSet1.has(x)));
    newRequired.forEach((i) => changes.push(`Field ${i} was added`));

    const optSet1 = new Set([
      ...questions1.whatAreTheOptionalFieldsOfAnObject('root'),
    ]);
    const optSet2 = new Set([
      ...questions2.whatAreTheOptionalFieldsOfAnObject('root'),
    ]);

    const nowOptional = new Set([...reqSet1].filter((x) => !reqSet2.has(x)));
    nowOptional.forEach((i) => changes.push(`Field ${i} is now optional`));

    const fieldTypes1 = {};
    const fieldTypes2 = {};
    Object.entries(state.fields).map(
      ([key, value]) => (fieldTypes1[key] = value.type)
    );
    Object.entries(state1.fields).map(
      ([key, value]) => (fieldTypes2[key] = value.type)
    );

    Object.entries(fieldTypes2).map(([key, value]) => {
      if (fieldTypes1[key] !== value) {
        changes.push(
          `Field ${state1.fields[key].name} was changed from ${fieldTypes1[key]} to a ${value}`
        );
      }
    });

    //naive, should use projections
    return changes;
  }

  return {
    areTheseSpecsEqual,
    whatHasChanged,
  };
};
