import {AddField, AddShape, ChangeFieldType, MakeFieldOptional} from './facts';

export const defaultFacts = [
  AddShape('root', 'object'),
  AddField('root', 'field1', 'name', 'string'),
  AddField('root', 'field2','founded_year', 'string'),
  AddField('root', 'field3', 'mascot_name', 'string'),
  AddField('root', 'field4', 'city', 'string'),
  AddField('root', 'field5', 'website', 'string'),
  MakeFieldOptional('field2'),
  MakeFieldOptional('field5'),
  ChangeFieldType('field2', 'number')
]

export function buildState(otherFacts = [], offset= defaultFacts.length) {
  const shapes = {}
  const fields = {}

  const facts = [...defaultFacts, ...otherFacts].slice(0, offset)

  facts.map(fact => {
    if (fact.AddShape) {
      const properties = fact.AddShape
      shapes[properties.shapeId] = Shape(properties.shapeId, [])
    } else if (fact.AddField) {
      const properties = fact.AddField
      const parent = shapes[properties.parentId]
      if (parent) {
        fields[properties.fieldId] = Field(properties.fieldId, properties.name, properties.type)
        parent.fields[properties.fieldId] = {required: true}
      }
    } else if (fact.MakeFieldOptional) {
      const properties = fact.MakeFieldOptional
      const parentShape = Object.values(shapes).find(i => Object.keys(i.fields).includes(properties.fieldId))
      if (parentShape) {
        parentShape.fields[properties.fieldId] = {required: false}
      }
    } else if (fact.MakeFieldRequired) {
      const properties = fact.MakeFieldRequired
      const parentShape = Object.values(shapes).find(i => Object.keys(i.fields).includes(properties.fieldId))
      if (parentShape) {
        parentShape.fields[properties.fieldId] = {required: true}
      }
    } else if (fact.ChangeFieldType) {
      const properties = fact.ChangeFieldType
      const field = fields[properties.fieldId]
      if (field) {
        field.type = properties.type
      }
    }
  })

  return {fields, shapes}
}

function Shape(id, fields = {}) {
  return {id, fields}
}
function Field(id, name, type) {
  return {id, name, type}
}
