import Sidebar from "@/components/Sidebar";

export default function DocsLayout({ children }) {
  return (
    <div className="docs">
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
}
