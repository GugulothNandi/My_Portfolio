function Layout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed text-white"
      style={{
        backgroundImage:
          "url('https://cdn.wallpapersafari.com/66/12/JswdDP.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 -z-10"></div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default Layout;
