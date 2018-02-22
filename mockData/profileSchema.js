const profileSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
      unique: true,
      minimum: 0,
      exclusiveMinimum: true
    },
    name: {
      type: 'object',
      properties: {
        first: {
          faker: 'name.firstName'
        },
        last: {
          faker: 'name.lastName'
        }
      },
      required: ['first', 'last']
    },
    gender: {
      type: 'string',
      chance: {
        pickone: [
          ['male', 'female']
        ]
      }
    },
    title: {
      unique: true,
      faker: 'name.jobTitle'
    },
    email: {
      unique: true,
      faker: 'internet.email'
    },
    registered: {
      faker: 'date.past'
    },
    phone: {
      faker: 'phone.phoneNumber'
    },
    location: {
      type: 'object',
      properties: {
        street: {
          faker: 'address.streetAddress'
        },
        city: {
          faker: 'address.streetName'
        },
        state: {
          faker: 'address.state'
        },
        postcode: {
          faker: 'address.zipCode'
        },
        latitude: {
          faker: 'address.latitude'
        },
        longitude: {
          faker: 'address.longitude'
        }
      },
      required: ['street', 'city', 'state', 'postcode', 'latitude', 'longitude']
    },
    picture: {
      type: 'object',
      properties: {
        large: {
          faker: 'internet.avatar'
        },
        thumbnail: {
          faker: 'internet.avatar'
        }
      },
      required: ['large', 'thumbnail']
    },
    roles: {
      type: 'array',
      items: {
        chance: {
          pickone: [
            [
              { key: 1, title: 'UI Design', value: 'ui' },
              { key: 2, title: 'UX Design', value: 'ux' },
              { key: 3, title: 'Frontend', value: 'fe' },
              { key: 4, title: 'Backend', value: 'be' },
              { key: 5, title: 'Fullstack', value: 'fs' },
              { key: 6, title: 'Manager', value: 'man' }
            ]
          ]
        }
      },
      maxItems: 1
    },
    tasks: {
      type: 'array'
    }
  },
  required: [ 'id', 'name', 'title', 'email', 'registered', 'phone', 'gender', 'location', 'tasks', 'picture', 'roles' ]
}

module.exports = profileSchema