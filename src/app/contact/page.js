"use client";
import PageHero from "../../components/PageHero";
import SectionHeader from "../../components/SectionHeader";
import PlasmaButton from "../../components/PlasmaButton";

const infoItems = [
  { icon:"📍", label:"Location",             value:"Faculty of Engineering & IT\nUniversity of Technology Sydney\n15 Broadway, Ultimo NSW 2007" },
  { icon:"✉️", label:"Email",                value:"Nabin.Sharma@uts.edu.au" },
  { icon:"📞", label:"Phone",                value:"+61 2 9514 0000" },
  { icon:"🎓", label:"Prospective Students", value:"We accept PhD, Masters, and Honours students. Email us with your CV and research interests." },
  { icon:"🤝", label:"Industry & Government",value:"Interested in a research partnership? We would love to hear from you." },
];

const inputClasses = "w-full bg-tint/[0.03] border border-tint/10 rounded-lg px-4 py-2.5 text-sm text-fg placeholder:text-slate-500 focus:outline-none focus:border-electric-cyan/50 focus:shadow-glow transition-all";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact PIUS Lab"
        subtitle="We welcome enquiries from prospective students, industry partners, government agencies, and collaborating researchers." />
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <SectionHeader tag="Details" title="Reach us" />
              <div className="space-y-6">
                {infoItems.map(item => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-10 h-10 flex-shrink-0 bg-electric-cyan/10 border border-electric-cyan/20 rounded-xl flex items-center justify-center text-base">{item.icon}</div>
                    <div>
                      <p className="text-xs uppercase tracking-widest font-semibold text-electric-cyan mb-1">{item.label}</p>
                      <p className="text-sm text-muted leading-relaxed whitespace-pre-line">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-muted mb-1.5">Full Name</label>
                  <input type="text" placeholder="Dr. Jane Smith" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-muted mb-1.5">Email</label>
                  <input type="email" placeholder="jane@example.com" className={inputClasses} />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-muted mb-1.5">Organisation</label>
                <input type="text" placeholder="University / Company / Agency" className={inputClasses} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-muted mb-1.5">Subject</label>
                <input type="text" placeholder="PhD enquiry / Research collaboration / ..." className={inputClasses} />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-muted mb-1.5">Message</label>
                <textarea rows={5} placeholder="Tell us about yourself and your interest..." className={`${inputClasses} resize-none`} />
              </div>
              <PlasmaButton type="submit">
                Send Message →
              </PlasmaButton>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
