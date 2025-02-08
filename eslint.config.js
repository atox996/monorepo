import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  javascript: {
    overrides: {
      'no-console': 'off',
    },
  },
  overrides: [
    {
      files: ['apps/web-app/**/*'],
      parserOptions: {
        project: ['./apps/web-app/tsconfig.json'],
      },
    },
  ],
})
