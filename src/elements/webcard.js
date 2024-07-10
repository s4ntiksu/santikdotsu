import React, { lazy, Suspense } from 'react';

const WebCard = ({ website, displayName, githubUsername }) => {
  const WebCardContent = lazy(() => import('./webcardlayout'));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <a href={`https://${website}`} target="_blank" rel="noreferrer">
          <WebCardContent website={website} displayName={displayName} githubUsername={githubUsername} />
        </a>
      </Suspense>
    </div>
  );
};

export default WebCard;