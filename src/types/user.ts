interface User {
  login: string;
  id: string;
  avatar_url: string;
  url: string;
  name: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
}

export default User;
