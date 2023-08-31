import AuthRepository from "./AuthRepository";
import CommunityRepository from "./CommunityRepository";

const repositories = {
    auth: AuthRepository,
    community: CommunityRepository
};

export const RepositoryFactory = {
  get: (name) => repositories[name],
};