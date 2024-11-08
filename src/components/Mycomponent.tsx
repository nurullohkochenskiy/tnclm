import { useEffect, useState } from 'react';

export default function Mycomponent() {
  // Set the type of tgWebAppVersion to 'string | null'
  const [tgWebAppVersion, setTgWebAppVersion] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    const params = new URLSearchParams(hash);
    setTgWebAppVersion(params.get('tgWebAppVersion'));
  }, []);

  return (
    <div>
      <p>TG Web App Version: {tgWebAppVersion}</p>
    </div>
  );
}
