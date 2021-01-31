module.exports = {
    root: true,
    env: {
        node: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier', 'react'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        curly: 'off',
        'no-console': 'off',
        'no-sparse-arrays': 'off',
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': ['error', 'always'],
        'react/prop-types': 'off',
        'react/jsx-boolean-value': 'off',
        'react/jsx-no-bind': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    },
}