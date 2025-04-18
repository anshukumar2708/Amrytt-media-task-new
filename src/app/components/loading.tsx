const ThreeDotsLoader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="h-10 flex items-center justify-center space-x-5">
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-5 h-5 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
};

export default ThreeDotsLoader;
