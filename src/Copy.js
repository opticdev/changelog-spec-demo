export const factsWhy = `
In a Changelog Spec, a sequence of immutable Facts represent the domain being described. This has many advantages over a mutable data structure humans maintain:

- Native support for temporal use cases. Easy to understand how the domain changes over time.
- Simple data structure that's easy for tools to read and append to.
- Pure model of the domain being described. Removing the requirement for a spec to be human readable/modifiable allows cleaner modeling that remains forwards/backwards compatible. Facts are immutable. You can add more, or change how they are reduced, but changelog specs don't have to worry about breaking changes in the spec affecting users or tooling.
- Simplicity, and the lack of multiple concurrent versions of spec to support, make accurate reference implementations feasible to produce.
`.trim();

export const factsWhy2 = `
Tooling can dispatch new Facts by appending directly to the Changelog Spec or through the reference implementation's \`handleCommand\` function, which maintains the integrity of the Changelog by preventing invalid events or duplicate IDs from being applied.

`.trim();

export const questionsWhy = `
Changelog Specs are the union of Facts + Questions. As you add more Facts, the answers to Questions you ask about the domain will also change.

- Many important questions can be answered with nothing but the facts ie "Which fields are required?"
- Some questions may compare the state of the spec to some external data ie "Does this JSON match the shape with ID 'root'?"
- And another class of questions are about how the domain has changed over time, ie "What's changed since offset X?"

Some core Questions will be part of the Changelog Spec reference implementation and will be treated as immutable (safe to depend on). Other more vendor-specific use cases can be built on-top of those stable Questions, or on the immutable Facts themselves.

`.trim();

export const specSpecCopy = `
Adjust both (N) and (N+1) sliders to compare the spec across different points in its history
`.trim();
