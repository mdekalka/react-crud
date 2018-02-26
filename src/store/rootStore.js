import { ProfileStore } from '../components/Profile/profileStore';

class RootStore {
  constructor() {
    this.profilesStore = new ProfileStore();
  }
}

export default new RootStore();
