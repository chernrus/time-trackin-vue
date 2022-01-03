module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': 0,
        'linebreak-style': 0,
        camelcase: 0,
        'no-irregular-whitespace': 0,
        'no-undef': 0,
        'no-param-reassign': [
            'warn',
        ],
        'import/no-extraneous-dependencies': [
            'warn',
        ],
        'template-curly-spacing': 0,
        'no-unused-vars': [
            'error',
            {
                args: 'none',
            },
        ],
        'max-len': 0,
        indent: ['warn', 4],
        'vue/html-indent': 0,
    },
};
