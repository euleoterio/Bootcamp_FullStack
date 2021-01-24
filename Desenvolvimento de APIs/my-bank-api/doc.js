export const swaggerDocument = {
  swagger: '2.0',
  info: {
    description: 'My Bank API description',
    version: '1.0.0',
    title: 'My Bank API',
  },
  host: 'localhost:3000',
  tags: [
    {
      name: 'account',
      description: 'Account management',
    },
  ],
  paths: {
    '/account': {
      get: {
        tags: ['account'],
        summary: 'All accounts',
        description: 'Returns all created accounts',
        produces: ['application/json'],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/AccountWithId',
              },
            },
          },
          400: {
            description: 'Error occurred',
          },
        },
      },
      post: {
        tags: ['account'],
        summary: 'Create a new account',
        description: 'Create a new account with the received parameters',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/Account',
            },
          },
        ],
        responses: {
          200: {
            description: 'Account created',
            schema: {
              items: {
                $ref: '#/definitions/AccountWithId',
              },
            },
          },
          400: {
            description: 'Invalid account',
          },
        },
      },
      put: {
        tags: ['account'],
        summary: 'Updated acount',
        description: 'This can only be done by the logged in user.',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/AccountWithId',
            },
          },
        ],
        responses: {
          200: {
            description: 'Account created',
            schema: {
              items: {
                $ref: '#/definitions/AccountWithId',
              },
            },
          },
          400: {
            description: 'Invalid account supplied',
          },
          404: {
            description: 'Account not found',
          },
        },
      },
    },
    '/account/{id}': {
      get: {
        tags: ['account'],
        summary: 'Find account by ID',
        description: 'Returns a single account',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of account to return',
            required: true,
            type: 'integer',
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
            schema: {
              $ref: '#/definitions/AccountWithId',
            },
          },
          400: {
            description: 'Invalid ID supplied',
          },
          404: {
            description: 'ID not found',
          },
        },
      },
      delete: {
        tags: ['account'],
        summary: 'Delete account by ID',
        description:
          'For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'ID of the account that needs to be deleted',
            required: true,
            type: 'integer',
            minimum: 1,
            format: 'int64',
          },
        ],
        responses: {
          200: {
            description: 'Successful operation',
          },
          400: {
            description: 'Account ID supplied',
          },
          404: {
            description: 'Account not found',
          },
        },
      },
    },
    '/account/updateBalance': {
      patch: {
        tags: ['account'],
        summary: 'Update account balance by ID',
        description: 'Update account balance',
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Account object',
            required: true,
            schema: {
              $ref: '#/definitions/AccountUpdateBalance',
            },
          },
        ],
        responses: {
          200: {
            description: 'Account balance updated',
            schema: {
              $ref: '#/definitions/AccountWithId',
            },
          },
          400: {
            description: 'Invalid account',
          },
        },
      },
    },
  },
  definitions: {
    Account: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Vinicius Euleoterio',
        },
        balance: {
          type: 'integer',
          example: 3200,
        },
      },
    },
    AccountWithId: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        name: {
          type: 'string',
          example: 'Vinicius Euleoterio',
        },
        balance: {
          type: 'integer',
          example: 3200,
        },
      },
    },
    AccountUpdateBalance: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int64',
        },
        balance: {
          type: 'integer',
          example: 3200,
        },
      },
    },
  },
};
