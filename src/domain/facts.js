
export function AddShape(shapeId, type) {
  return {AddShape: {shapeId, type}}
}

export function AddField(parentId, fieldId, name, type) {
  return {AddField: {parentId, fieldId, name, type}}
}

export function MakeFieldRequired(fieldId) {
  return {MakeFieldRequired: {fieldId}}
}

export function MakeFieldOptional(fieldId) {
  return {MakeFieldOptional: {fieldId}}
}

export function RemoveField(fieldId) {
  return {RemoveField: {fieldId}}
}

export function ChangeFieldType(fieldId, type) {
  return {ChangeFieldType: {fieldId, type}}
}
