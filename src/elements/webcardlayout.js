import '@material/web/all.js';
const WebCardContent = ({ website, displayName, githubUsername, description }) => {
  const avatarSrc = `https://github.com/${githubUsername}.png`;

  return (
    <figure className="w-full p-2 bg-gray-300 h-auto rounded-xl flex items-center mt-2 mx-auto font-google">
      <md-ripple></md-ripple>
      <img className="rounded-full w-24 mr-2" src={avatarSrc} alt={`${displayName} avatar`} />
      
      <div>
        <h3 className="text-lg font-bold">{displayName}</h3>
        <p className="text-gray-600">{website}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </figure>
  );
};

export default WebCardContent;