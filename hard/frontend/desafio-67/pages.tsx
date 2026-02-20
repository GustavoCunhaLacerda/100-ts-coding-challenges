import React from "react";

const useAuth = () => ({ user: null as { name: string } | null, loading: false });

export function DashboardPage() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;
  return <div>Dashboard for {user.name}</div>;
}

export function ProfilePage() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;
  return <div>Profile of {user.name}</div>;
}

export function SettingsPage() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!user) return <p>Please login</p>;
  return <div>Settings for {user.name}</div>;
}
