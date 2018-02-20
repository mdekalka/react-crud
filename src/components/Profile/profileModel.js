const profileModel = {
  id: null,
  name: {
    first: '',
    last: ''
  },
  gender: '',
  title: '',
  email: '',
  registered: null,
  phone: '',
  location: {
    street: '',
    city: '',
    state: '',
    postcode: '',
    latitude: '',
    longitude: ''
  },
  picture: {
    large: null,
    thumbnail: null
  },
  roles: [],
  tasks: []
};

export default profileModel;
