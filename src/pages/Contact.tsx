import React from 'react';

const Contact: React.FC = () => {
  const handleCopyEmail = () => {
    const email = "remilekunelijah21997@gmail.com";
    navigator.clipboard.writeText(email);
  };

  return (
    <div className="flex flex-col gap-16 max-w-[600px]">
      <header className="flex flex-col gap-2">
        <h1 className="font-geist font-bold text-2xl dark:text-slate-12 text-slate-light-12">Contact</h1>
        <p className="text-slate-light-11 dark:text-slate-11 sm:text-sm text-base">
          let's build something great together
        </p>
      </header>

      <section className="flex flex-col gap-6">
        <h3 className="dark:text-slate-11 dark:opacity-[0.66] sm:text-xs text-slate-light-11 text-sm uppercase">~/ Get In Touch</h3>
        <div className="sm:text-sm text-base text-balance leading-relaxed">
          whether you need a robust backend system, want to scale your existing infrastructure, 
          or have an interesting technical challenge to solve, i'd love to hear from you. 
          i'm always open to discussing new opportunities, collaborating on projects, 
          or just chatting about technology and system design.
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h3 className="dark:text-slate-11 dark:opacity-[0.66] sm:text-xs text-slate-light-11 text-sm uppercase">~/ Availability</h3>
        <div className="sm:text-sm text-base text-balance leading-relaxed">
          i'm currently available for freelance projects and open to full-time opportunities 
          that focus on backend development, system architecture, or full-stack roles with 
          significant backend components. remote work preferred, but i'm open to hybrid 
          arrangements for the right opportunity.
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h3 className="dark:text-slate-11 dark:opacity-[0.66] sm:text-xs text-slate-light-11 text-sm uppercase">~/ Contact Information</h3>
        
        <div className="space-y-6">
          <div className="flex group justify-between items-center p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all">
            <div>
              <h4 className="font-medium text-slate-light-12 dark:text-slate-12 mb-1">Email</h4>
              <p className="text-slate-light-11 dark:text-slate-11 sm:text-sm text-base">
                preferred method for project inquiries
              </p>
            </div>
            <button 
              className="flex group dark:hover:text-slate-12 flex-row gap-2 hover:text-slate-light-11 items-center sm:text-sm text-base transition-all px-3 py-2 border border-slate-200 dark:border-slate-800 rounded-md hover:border-slate-300 dark:hover:border-slate-700" 
              type="button" 
              onClick={handleCopyEmail}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 6V3.5C10 2.67157 9.32843 2 8.5 2H3.5C2.67157 2 2 2.67157 2 3.5V8.5C2 9.32843 2.67157 10 3.5 10H6M7.5 6H12.5C13.3284 6 14 6.67157 14 7.5V12.5C14 13.3284 13.3284 14 12.5 14H7.5C6.67157 14 6 13.3284 6 12.5V7.5C6 6.67157 6.67157 6 7.5 6Z" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-slate-11 stroke-slate-light-12 dark:group-hover:stroke-slate-12 group-hover:stroke-slate-light-11"></path>
              </svg>
              Copy Email
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a 
              href="https://github.com/Remilekun-Elijah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <h4 className="font-medium text-slate-light-12 dark:text-slate-12 mb-1 group-hover:text-slate-light-11 dark:group-hover:text-slate-11">
                GitHub
              </h4>
              <p className="text-slate-light-11 dark:text-slate-11 sm:text-sm text-base">
                /remilekun-elijah
              </p>
            </a>

            <a 
              href="https://www.linkedin.com/in/remilekunelijah/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <h4 className="font-medium text-slate-light-12 dark:text-slate-12 mb-1 group-hover:text-slate-light-11 dark:group-hover:text-slate-11">
                LinkedIn
              </h4>
              <p className="text-slate-light-11 dark:text-slate-11 sm:text-sm text-base">
                /in/remilekunelijah
              </p>
            </a>

            <a 
              href="https://read.cv/mosess" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <h4 className="font-medium text-slate-light-12 dark:text-slate-12 mb-1 group-hover:text-slate-light-11 dark:group-hover:text-slate-11">
                Resume
              </h4>
              <p className="text-slate-light-11 dark:text-slate-11 sm:text-sm text-base">
                read.cv/mosess
              </p>
            </a>

            <a 
              href="https://x.com/remilekunelijah" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <h4 className="font-medium text-slate-light-12 dark:text-slate-12 mb-1 group-hover:text-slate-light-11 dark:group-hover:text-slate-11">
                Twitter
              </h4>
              <p className="text-slate-light-11 dark:text-slate-11 sm:text-sm text-base">
                @remilekunelijah
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h3 className="dark:text-slate-11 dark:opacity-[0.66] sm:text-xs text-slate-light-11 text-sm uppercase">~/ Response Time</h3>
        <div className="sm:text-sm text-base text-balance">
          i typically respond to emails within 24-48 hours. for urgent matters or time-sensitive projects, 
          please mention it in your subject line. i'm based in Lagos (GMT+1) but work with clients globally.
        </div>
      </section>
    </div>
  );
};

export default Contact;