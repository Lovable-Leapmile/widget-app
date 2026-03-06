interface QikpodFooterProps {
  text?: string;
}

const QikpodFooter = ({ text = "© 2026 QikPod. All rights reserved." }: QikpodFooterProps) => {
  return (
    <footer className="border-t border-border bg-card px-6 py-3">
      <p className="text-center text-xs text-muted-foreground">{text}</p>
    </footer>
  );
};

export default QikpodFooter;
