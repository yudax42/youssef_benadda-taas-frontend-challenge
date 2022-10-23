import type { Author, Branch, Commits, Repository } from "@/types/repository";
import type User from "@/types/user";

function userSerializer(user: User): User {
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

function repoSerializer(repo: Repository): Repository {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.url,
    default_branch: repo.default_branch,
    owner: repo.owner,
  };
}

function branchSerializer(branch: Branch): Branch {
  return {
    name: branch.name,
    commit: branch.commit,
  };
}
function authorSerializer(author: Author): Author {
  return {
    name: author.name,
    avatar_url: author.avatar_url,
    login: author.login,
  };
}

function commitSerializer(commit: Commits): Commits {
  return {
    url: commit.url,
    sha: commit.sha,
    node_id: commit.node_id,
    html_url: commit.html_url,
    comments_url: commit.comments_url,
    commit: commit.commit,
    author: authorSerializer(commit.author),
    committer: commit.committer,
    parents: commit.parents,
  };
}

export { userSerializer, repoSerializer, branchSerializer, commitSerializer };
