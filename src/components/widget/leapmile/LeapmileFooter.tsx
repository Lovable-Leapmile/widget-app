interface LeapmileFooterProps {
  text?: string;
}

const LeapmileFooter = ({ text = "© 2026 Leapmile Logistics Pvt.Ltd" }: LeapmileFooterProps) => {
  return (
    <div className="py-4 text-center">
      <div className="inline-block bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/30">
        <span className="text-sm text-[hsl(263,61%,20%)] font-medium">{text}</span>
      </div>
    </div>
  );
};

export default LeapmileFooter;
