import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { WidgetDataGrid } from "@/components/widget";
import { WidgetTextField } from "@/components/widget";
import { ColDef } from "ag-grid-community";
import { toast } from "sonner";
import leapmileLogo from "@/assets/leapmile-logo.png";

interface ShipmentRow {
  id: string;
  customer: string;
  origin: string;
  destination: string;
  weight: string;
  status: string;
  date: string;
}

const sampleData: ShipmentRow[] = [
  { id: "SHP-001", customer: "Flipkart", origin: "Mumbai", destination: "Delhi", weight: "12 kg", status: "Delivered", date: "2026-03-01" },
  { id: "SHP-002", customer: "Amazon", origin: "Bangalore", destination: "Chennai", weight: "5 kg", status: "In Transit", date: "2026-03-02" },
  { id: "SHP-003", customer: "Myntra", origin: "Hyderabad", destination: "Pune", weight: "3 kg", status: "Delivered", date: "2026-03-03" },
  { id: "SHP-004", customer: "Meesho", origin: "Delhi", destination: "Kolkata", weight: "8 kg", status: "Pending", date: "2026-02-28" },
  { id: "SHP-005", customer: "Flipkart", origin: "Chennai", destination: "Mumbai", weight: "15 kg", status: "In Transit", date: "2026-03-04" },
  { id: "SHP-006", customer: "Amazon", origin: "Pune", destination: "Jaipur", weight: "2 kg", status: "Delivered", date: "2026-03-05" },
  { id: "SHP-007", customer: "Snapdeal", origin: "Kolkata", destination: "Lucknow", weight: "6 kg", status: "Cancelled", date: "2026-03-05" },
  { id: "SHP-008", customer: "Myntra", origin: "Jaipur", destination: "Bangalore", weight: "4 kg", status: "Pending", date: "2026-02-25" },
];

const LeapmileStatusRenderer = ({ value }: { value: string }) => {
  const lower = value?.toLowerCase();
  const colorClass =
    lower === "delivered"
      ? "bg-green-100 text-green-800"
      : lower === "in transit"
      ? "bg-blue-100 text-blue-800"
      : lower === "pending"
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800";
  return (
    <span className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${colorClass}`}>
      {value || "N/A"}
    </span>
  );
};

const Leapmile = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const columnDefs = useMemo<ColDef<ShipmentRow>[]>(
    () => [
      { headerName: "Shipment ID", field: "id", maxWidth: 130 },
      { headerName: "Customer", field: "customer", minWidth: 130 },
      { headerName: "Origin", field: "origin", minWidth: 120 },
      { headerName: "Destination", field: "destination", minWidth: 120 },
      { headerName: "Weight", field: "weight", maxWidth: 100 },
      { headerName: "Status", field: "status", maxWidth: 140, cellRenderer: LeapmileStatusRenderer },
      { headerName: "Date", field: "date", maxWidth: 130 },
    ],
    []
  );

  const filteredData = useMemo(() => {
    if (!searchTerm) return sampleData;
    return sampleData.filter(
      (row) =>
        row.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="leapmile-theme flex min-h-screen flex-col bg-background">
      {/* Header - gradient matching Admin App */}
      <div className="mx-4 mt-4 mb-6">
        <div className="bg-gradient-to-r from-[#351C75] via-[#5B4596] to-[#8E7CC3] rounded-3xl shadow-2xl p-5 border border-white/20">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                ← Back
              </button>
              <img src={leapmileLogo} alt="Leapmile" className="h-8 w-auto" />
            </div>
            <button
              onClick={() => toast.success("Action triggered!")}
              className="rounded-xl bg-white/20 backdrop-blur-sm text-white px-4 py-2 text-sm font-medium hover:bg-white/30 transition-all border border-white/20"
            >
              New Shipment
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 px-4 pb-8">
        <div className="mx-auto max-w-6xl space-y-6">
          {/* Filters */}
          <div className="flex flex-wrap items-end gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
            <div className="flex-1 min-w-[200px]">
              <WidgetTextField
                label="Search Shipments"
                placeholder="Search by ID, customer, origin..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => toast.info("Search applied")}
                className="inline-flex items-center justify-center rounded-xl bg-[#351C75] text-white px-4 h-10 text-sm font-bold hover:bg-[#5B4596] transition-all shadow-lg"
              >
                Search
              </button>
              <button
                onClick={() => setSearchTerm("")}
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-[#20124D] px-4 h-10 text-sm font-medium hover:bg-gray-100 transition-all"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <p className="text-sm font-medium text-[#20124D]">Total Shipments</p>
              <p className="text-2xl font-bold text-[#351C75]">{sampleData.length}</p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <p className="text-sm font-medium text-[#20124D]">Delivered</p>
              <p className="text-2xl font-bold text-green-600">
                {sampleData.filter((r) => r.status === "Delivered").length}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <p className="text-sm font-medium text-[#20124D]">In Transit</p>
              <p className="text-2xl font-bold text-blue-600">
                {sampleData.filter((r) => r.status === "In Transit").length}
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <p className="text-sm font-medium text-[#20124D]">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">
                {sampleData.filter((r) => r.status === "Pending").length}
              </p>
            </div>
          </div>

          {/* Data Grid */}
          <div className="animate-scale-in leapmile-grid">
            <WidgetDataGrid
              rowData={filteredData}
              columnDefs={columnDefs}
              height="450px"
              paginationPageSize={10}
              onRowClicked={(e) => toast.info(`Clicked: ${e.data?.id} - ${e.data?.customer}`)}
            />
          </div>
        </div>
      </main>

      {/* Footer - matching Admin App style */}
      <div className="py-4 text-center">
        <div className="inline-block bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg border border-white/30">
          <span className="text-sm text-[#20124D] font-medium">© 2026 Leapmile Logistics Pvt.Ltd</span>
        </div>
      </div>
    </div>
  );
};

export default Leapmile;
