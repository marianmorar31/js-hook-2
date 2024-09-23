module.exports = {
    rules: {
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
      'subject-pattern': [2, 'always', '^TEAM-[0-9]{1,5}:\\s.{1,50}$'],
      'subject-case': [0],  // Disable default case enforcement
    },
  };
  