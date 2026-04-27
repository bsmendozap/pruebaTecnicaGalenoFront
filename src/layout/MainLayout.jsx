import Navbar from "../shared/components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <main className="p-8">
        <div className="bg-white rounded-2xl shadow p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;