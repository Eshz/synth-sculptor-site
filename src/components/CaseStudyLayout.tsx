import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  backLabel?: string;
}

const CaseStudyLayout = ({ children, backLabel = "Back to work" }: CaseStudyLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky back nav */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
      >
        <div className="px-6 md:px-12 lg:px-20 max-w-[1200px] mx-auto py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xs font-body font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            data-interactive
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>
          <span className="font-body text-xs font-medium tracking-[0.15em] uppercase text-foreground">
            Eshchar Zychlinski
          </span>
        </div>
      </motion.nav>

      {children}

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 md:px-12 lg:px-20 py-8 max-w-[1400px] mx-auto border-t border-border"
      >
        <p className="text-sm text-muted-foreground font-body">
          © 2026 Eshchar Zychlinski
        </p>
      </motion.footer>
    </div>
  );
};

export default CaseStudyLayout;
