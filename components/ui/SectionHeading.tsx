
import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, description, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
      <div className={`flex items-center mb-3 ${centered ? 'justify-center' : ''}`}>
        <div className="w-6 h-0.5 bg-spark-blue mr-2"></div>
        <span className="text-spark-blue font-bold uppercase tracking-wider text-sm">{subtitle}</span>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0b1b36] mb-6 leading-tight">
        {title}
      </h2>
      {description && <p className="text-gray-500 text-lg leading-relaxed">{description}</p>}
    </div>
  );
};

export default SectionHeading;
