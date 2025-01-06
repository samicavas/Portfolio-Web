'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type CookieContextType = {
  cookiesAccepted: boolean;
  acceptCookies: () => void;
  rejectCookies: () => void;
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const accepted = localStorage.getItem('cookiesAccepted');
    setCookiesAccepted(accepted === 'true');
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setCookiesAccepted(false);
  };

  return (
    <CookieContext.Provider value={{ cookiesAccepted: !!cookiesAccepted, acceptCookies, rejectCookies }}>
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie() {
  const context = useContext(CookieContext);
  if (context === undefined) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
} 