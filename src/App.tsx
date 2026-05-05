import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const CaseStudyGenway = lazy(() => import("./pages/CaseStudyGenway.tsx"));
const CaseStudyIntelliframe = lazy(() => import("./pages/CaseStudyIntelliframe.tsx"));
const CaseStudyTranscript = lazy(() => import("./pages/CaseStudyTranscript.tsx"));

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/genway" element={<CaseStudyGenway />} />
          <Route path="/work/intelliframe" element={<CaseStudyIntelliframe />} />
          <Route path="/work/transcript" element={<CaseStudyTranscript />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
