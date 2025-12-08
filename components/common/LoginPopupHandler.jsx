'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function LoginPopupHandler({ setIsSigninOpen, initialOpenHandled, setInitialOpenHandled }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const showLoginParam = searchParams.get('showLogin');

    if (showLoginParam === 'true' && !initialOpenHandled) {
      // 1. Open the Signin Modal
      setIsSigninOpen(true);
      setInitialOpenHandled(true); 

      // 2. Clean up the URL
      // Use pathname and query to ensure the cleanup is correct on any page
      const currentPath = router.pathname || '/'; 
      // Replace the current history state without the showLogin param
      router.replace(currentPath, { scroll: false }); 
    }
  }, [searchParams, initialOpenHandled, setInitialOpenHandled, setIsSigninOpen, router]);

  // This component doesn't render any UI itself, so it returns null.
  return null;
}