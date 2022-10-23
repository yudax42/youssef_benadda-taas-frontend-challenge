interface Author {
  name: string;
  avatar_url: string;
  login: string;
}

interface Parent {
  sha: string;
  url: string;
}

interface Tree {
  sha: string;
  url: string;
}

interface Commit {
  author: Author;
  committer: Author;
  comment_count: number;
  message: string;
  tree: Tree;
}

interface Branch {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
}

interface Commits {
  url: string;
  sha: string;
  node_id: string;
  html_url: string;
  comments_url: string;
  commit: Commit;
  author: Author;
  committer: Author;
  parents: Parent[];
}

interface Repository {
  id: string;
  name: string;
  description: string;
  url: string;
  default_branch: string;
  owner: Author;
}

export type { Commits, Repository, Author, Branch };
