import React from 'react';

const Resume: React.FC = () => {
  // Use a space-free filename to avoid dev-server rewrites breaking downloads
  const resumeUrl = `${process.env.PUBLIC_URL || ''}/resume.pdf`;

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Resume</h1>
          <p className="text-slate-600 dark:text-slate-300">Preview and download</p>
        </div>

        <div className="mb-4 flex justify-center">
          <a
            href={resumeUrl}
            download="Durga-Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-light-steel-blue to-pastel-purple text-slate-900 font-medium rounded-lg shadow hover:opacity-90 transition"
          >
            Download PDF
          </a>
        </div>

        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow overflow-hidden">
          <iframe
            title="Resume Preview"
            src={resumeUrl}
            className="w-full h-[80vh]"
          />
          <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400">
            If the preview does not load, <a className="underline" href={resumeUrl} target="_blank" rel="noopener noreferrer">open the PDF in a new tab</a> or use the Download button above.
            Place your resume file at <code>public/resume.pdf</code> (no spaces) for reliable downloads.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;


