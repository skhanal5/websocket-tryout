import Column from "@/components/containers/Column";
import Container from "@/components/containers/Container";

interface SenderMessageProps {
  message: string;
  timestamp: string; // should be a date
}

export default function SenderMessage({ message, timestamp }: SenderMessageProps) {
  return (
    <Column className="gap-2">
      <Container className="p-2 bg-white shadow-lg rounded-lg text-sm">
        {message}
      </Container>
      <div className="text-xs text-slate-900/50">{timestamp}</div>
    </Column>
  );
}
