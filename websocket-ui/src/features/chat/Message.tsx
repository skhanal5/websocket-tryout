interface MessageProps {
  message: string;
  sender: string;
  timestamp: string; // should be a date
}

export default function Message({ message, sender, timestamp }: MessageProps) {
  return (
    <div>
      <div>{message}</div>
      <div>{sender}</div>
      <div>{timestamp}</div>
    </div>
  );
}
