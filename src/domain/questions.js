export const Questions = (state) => {
  function whatFieldsDoesAnObjectHave(shapeId) {
    const shape = state.shapes[shapeId];
    if (shape) {
      return Object.keys(shape.fields)
        .map((i) => state.fields[i].name)
        .sort();
    } else {
      return undefined;
    }
  }

  function whatAreTheRequiredFieldsOfAnObject(shapeId) {
    const shape = state.shapes[shapeId];
    if (shape) {
      return Object.keys(shape.fields)
        .filter((i) => shape.fields[i].required)
        .map((i) => state.fields[i].name)
        .sort();
    } else {
      return undefined;
    }
  }

  function whatAreTheOptionalFieldsOfAnObject(shapeId) {
    const shape = state.shapes[shapeId];
    if (shape) {
      return Object.keys(shape.fields)
        .filter((i) => !shape.fields[i].required)
        .map((i) => state.fields[i].name)
        .sort();
    } else {
      return undefined;
    }
  }

  function isAFieldRequired(fieldId) {
    if (!state.fields[fieldId]) {
      return false;
    }

    const requiredFields = whatAreTheRequiredFieldsOfAnObject('root');
    const name = state.fields[fieldId].name;

    return requiredFields.includes(name);
  }

  function whatTypeIsExpectedForAField(fieldId) {
    return state.fields[fieldId] && state.fields[fieldId].type;
  }

  function doesThisShapeMatch(shapeId, data) {
    const diffs = [];

    function getExpectedType(name) {
      const [id, value] = Object.entries(state.fields).find(
        (i) => i[1].name === name
      );
      if (value) {
        return value.type;
      }
    }

    const requiredFields = whatAreTheRequiredFieldsOfAnObject(shapeId);

    const validRequired = requiredFields.map((i) => {
      const assertion1 = data.hasOwnProperty(i);
      const assertion2 = typeof data[i] === getExpectedType(i);

      if (!assertion1) {
        diffs.push(`Required field ${i} is missing`);
      }
      if (assertion1 && !assertion2) {
        diffs.push(
          `Required field ${i} was a ${typeof data[
            i
          ]}, expected ${getExpectedType(i)}`
        );
      }

      return assertion1 && assertion2;
    });

    const optionalFields = whatAreTheOptionalFieldsOfAnObject(shapeId);

    const validOptional = optionalFields.map((i) => {
      const assertion1 = data.hasOwnProperty(i);

      if (!assertion1) {
        return true;
      }

      const assertion2 = typeof data[i] === getExpectedType(i);

      if (assertion1 && !assertion2) {
        diffs.push(
          `Optional field ${i} was a ${typeof data[
            i
          ]}, expected ${getExpectedType(i)}`
        );
      }

      return assertion2;
    });

    const extrasFields = Object.keys(data).filter((i) => {
      return !requiredFields.includes(i) && !optionalFields.includes(i);
    });

    extrasFields.forEach((i) => diffs.push(`Undocumented field ${i} observed`));

    return {
      matches:
        extrasFields.length === 0 &&
        validOptional.every((i) => Boolean(i)) &&
        validRequired.every((i) => Boolean(i)),
      diffs,
    };
  }

  return {
    whatFieldsDoesAnObjectHave,
    whatAreTheRequiredFieldsOfAnObject,
    whatAreTheOptionalFieldsOfAnObject,
    whatTypeIsExpectedForAField,
    isAFieldRequired,
    doesThisShapeMatch,
  };
};
