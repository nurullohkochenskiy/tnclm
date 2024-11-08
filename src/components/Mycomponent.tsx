// import { useEffect, useState } from 'react';
import { retrieveLaunchParams } from '@telegram-apps/sdk';
export default function Mycomponent() {
  // Set the type of tgWebAppVersion to 'string | null'
//   const [tgWebAppVersion, setTgWebAppVersion] = useState<string | null>(null);
//   const [tgWebAppData, setTgWebAppData] = useState<string | null>(null);
//   const [tgWebAppPlatform, setTgWebAppPlatform] = useState<string | null>(null);




const { initDataRaw } = retrieveLaunchParams();

fetch('http://localhost:3000/api', {
  method: 'POST',
  headers: {
    Authorization: `tma ${initDataRaw}`
  },
});
//   useEffect(() => {
//     const hash = window.location.hash.slice(1);
//     const params = new URLSearchParams(hash);
//     setTgWebAppVersion(params.get('tgWebAppVersion'));
//     setTgWebAppData(params.get('tgWebAppData'));
//     setTgWebAppPlatform(params.get('tgWebAppPlatform'));
//   }, []);

  return (
    <div>
      {/* <p>TG Web App Version: {tgWebAppVersion}</p>
      <p>TG Web App Data: {tgWebAppData}</p>
      <p>TG Web App Platform: {tgWebAppPlatform}</p> */}
    </div>
  );
}
