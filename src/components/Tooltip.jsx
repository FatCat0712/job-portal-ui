import { useId } from 'react';

const Tooltip = ({ children, content, className = '' }) => {
  const tooltipId = useId();

  return (
    <span
      className={`group relative inline-flex cursor-help outline-none ${className}`}
      tabIndex={0}
      aria-describedby={tooltipId}
    >
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary-600/20 to-purple-600/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100"
      />
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 w-64 -translate-x-1/2 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 px-4 py-3 text-center text-xs font-medium leading-relaxed text-white opacity-0 shadow-xl shadow-primary-950/30 transition-all duration-200 group-hover:-translate-y-1 group-hover:opacity-100 group-focus:-translate-y-1 group-focus:opacity-100"
      >
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-2 rotate-45 bg-purple-600"
        />
        {content}
      </span>
    </span>
  );
};

export default Tooltip;
