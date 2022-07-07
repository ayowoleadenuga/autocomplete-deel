# Autocomplete

Autocomplete is a component for input autocompletion and can be used as an element of UI kit.

Stack: `React` + `TypeScript`

## Description

Autocomplete suggestions input component. Provides useful hints based on user input value.

Required props:

- `value` string
- `label` string
- `onChange` function handling input changes
- `suggestions` array of strings, data for autocomplete list

Optional props:

- `placeholder` string
- `isLoading` boolean - triggers the loading spinner
- `sort` boolean - if true suggestions will be sorted alphabetically

## Instruction
To start the application, run `yarn && yarn start`