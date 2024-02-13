export default function TopBar() {
  const buttons = ["Home", "Projects", "About", "Contact"];

  return (
    <div className="flex justify-between p-4">
      <h1 className="text-white">My Portfolio</h1>
      <div className="flex space-x-4">
        {buttons.map((button) => (
          <a href="" key={button} className="text-gray-500">
            {button}
          </a>
        ))}
      </div>
    </div>
  );
}
