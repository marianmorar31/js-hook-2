module.exports = {
    rules: {
      // Define allowed commit types
      'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore']],
      
      // Ensure the commit message matches "<type>(TEAM-<jira-ticket-number>): <description>"
      'subject-pattern': [2, 'always', '^([a-z]+)\\(TEAM-[0-9]+\\):\\s.{1,50}$'],
      
      // Ignore subject case rules, as this might be causing conflicts
      'subject-case': [0],
  
      // Optional: Limit subject length to 50 characters
      'subject-max-length': [2, 'always', 72],
    }
  };
  