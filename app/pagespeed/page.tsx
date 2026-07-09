import PageSpeedTool from "@/components/PageSpeedTool";

export const metadata = {
  title: "PageSpeed Tool | Test jouw website snelheid",
  description:
    "Test jouw website snelheid met de officiële Google PageSpeed Insights tool. Krijg inzicht in Core Web Vitals, SEO en performance.",
};

export default function PageSpeedPage() {
  return (
    <section className="bg-[#FAFAFA] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading font-black uppercase text-4xl sm:text-5xl tracking-tight leading-[0.95]">
            Gratis <span className="text-[#FF4500]">PageSpeed</span> Tool
          </h1>
          <p className="mt-4 text-lg text-[#525252] max-w-2xl mx-auto">
            Test jouw website op snelheid, SEO en Core Web Vitals. 
            Gebaseerd op officiële Google PageSpeed Insights data.
          </p>
        </div>
        <PageSpeedTool />
      </div>
    </section>
  );
}
