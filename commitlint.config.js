module.exports = {
    rules: {
      // Allowed commit types
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
      
      // Ensure subject length and format
      'subject-max-length': [2, 'always', 72], // Enforce max length
      'subject-min-length': [2, 'always', 1], // Ensure at least one character
  
      // Enforce the presence of a ticket number
      'type-empty': [2, 'never'], // Ensure type is present
      'subject-empty': [2, 'never'], // Ensure subject is not empty
  
      // Optionally, enforce case rules
      'type-case': [2, 'always', 'lower-case'], // Ensure type is lowercase
      'subject-case': [2, 'always', 'lower-case'], // Ensure subject is lowercase
    },
  };
  