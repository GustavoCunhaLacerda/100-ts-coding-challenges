type NotificationOptions = {
  title: string;
  message: string;
  type?: string;
  duration?: number;
  sound?: boolean;
};

export function buildNotification(options: NotificationOptions): string {
  const title = options.title;
  const message = options.message;
  const type = options.type !== undefined ? options.type : "info";
  const duration = options.duration !== undefined ? options.duration : 3000;
  const sound = options.sound !== undefined ? options.sound : false;

  return `[${type.toUpperCase()}] ${title}: ${message} (${duration}ms, sound: ${sound})`;
}

export function formatUser(user: { firstName: string; lastName: string; role: string }): string {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const role = user.role;
  return `${firstName} ${lastName} — ${role}`;
}
