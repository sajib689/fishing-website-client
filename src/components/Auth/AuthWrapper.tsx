'use client';

import { ReactNode } from 'react';

interface AuthWrapperProps {
    children: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
    return (

          <>
            {/* Login/Register Content */}
            <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center px-4 relative overflow-hidden">
                {children}
            </div>
          </>
        
    );
}
