import React, { Component } from "react";

interface Props { userId: string; }
interface State {
  user: { name: string; email: string } | null;
  posts: { id: number; title: string }[];
  loading: boolean;
  error: string | null;
  windowWidth: number;
  isOnline: boolean;
}

export class LegacyDashboard extends Component<Props, State> {
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(props: Props) {
    super(props);
    this.state = { user: null, posts: [], loading: true, error: null, windowWidth: window.innerWidth, isOnline: navigator.onLine };
    this.handleResize = this.handleResize.bind(this);
    this.handleOnline = this.handleOnline.bind(this);
    this.handleOffline = this.handleOffline.bind(this);
  }

  async componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
    this.intervalId = setInterval(() => this.refreshData(), 30_000);
    await this.loadData();
  }

  async componentDidUpdate(prevProps: Props) {
    if (prevProps.userId !== this.props.userId) {
      this.setState({ loading: true, error: null });
      await this.loadData();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
    if (this.intervalId) clearInterval(this.intervalId);
  }

  handleResize() { this.setState({ windowWidth: window.innerWidth }); }
  handleOnline() { this.setState({ isOnline: true }); }
  handleOffline() { this.setState({ isOnline: false }); }

  async loadData() {
    try {
      const [userRes, postsRes] = await Promise.all([
        fetch(`/api/users/${this.props.userId}`),
        fetch(`/api/posts?userId=${this.props.userId}`),
      ]);
      const user = await userRes.json();
      const posts = await postsRes.json();
      this.setState({ user, posts, loading: false });
    } catch (e) {
      this.setState({ error: "Failed to load data", loading: false });
    }
  }

  async refreshData() { await this.loadData(); }

  render() {
    const { user, posts, loading, error, windowWidth, isOnline } = this.state;
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
      <div>
        <p>Window: {windowWidth}px | {isOnline ? "Online" : "Offline"}</p>
        <h1>{user?.name}</h1>
        <p>{user?.email}</p>
        <ul>{posts.map((p) => <li key={p.id}>{p.title}</li>)}</ul>
      </div>
    );
  }
}
