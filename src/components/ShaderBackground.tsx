import React from 'react';

export function ShaderBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(168, 197, 230, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(215, 199, 233, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(255, 107, 53, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 90% 10%, rgba(168, 197, 230, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(215, 199, 233, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 60% 30%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%, 100% 100%, 80% 80%, 60% 60%, 70% 70%, 90% 90%',
          animation: 'float 20s ease-in-out infinite'
        }}
      />
    </div>
  );
}