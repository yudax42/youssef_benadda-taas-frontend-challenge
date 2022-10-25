import type { Author, Branch, Commits, Repository } from "@/types/repository";
import type User from "@/types/user";

function user(user: User): User {
  return {
    login: user.login,
    id: user.id,
    avatar_url: user.avatar_url,
    url: user.url,
    name: user.name,
    email: user.email,
    bio: user.bio,
    twitter_username: user.twitter_username,
    public_repos: user.public_repos,
    public_gists: user.public_gists,
    followers: user.followers,
    following: user.following,
    created_at: user.created_at,
  };
}

function repo(repo: Repository): Repository {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.url,
    default_branch: repo.default_branch,
    owner: repo.owner,
  };
}

function branch(branch: Branch): Branch {
  return {
    name: branch.name,
    commit: branch.commit,
  };
}
function author(author: Author): Author {
  return {
    name: author.name,
    avatar_url: author.avatar_url,
    login: author.login,
  };
}

function commit(commit: Commits): Commits {
  return {
    url: commit.url,
    sha: commit.sha,
    commit: commit.commit,
    committer: commit.committer,
  };
}

class Factory {
  create(type: string, data: any) {
    switch (type) {
      case "user":
        return user(data);
      case "repository":
        return repo(data);
      case "branch":
        return branch(data);
      case "author":
        return author(data);
      case "commit":
        return commit(data);
      default:
        return data;
    }
  }
}

export default Factory;
