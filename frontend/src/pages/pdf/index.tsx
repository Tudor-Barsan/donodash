import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/sidebar";

const PDFViewer = (): JSX.Element => {
  return (
    <div className="flex bg-gray-50">
      <aside className="h-screen sticky top-0">
        <Sidebar />
      </aside>
      <img
        src="/tax.png"
        alt="card-image"
        className="h-full w-full object-cover"
      />
    </div>
  );
};
export default PDFViewer;
