import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Phone, Calendar, User } from "lucide-react";

interface Enquiry {
  id: number;
  fullname: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at: string;
}

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://yeshraj.pythonanywhere.com/api/enquiries/")
      .then((res) => res.json())
      .then((data) => {
        setEnquiries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching enquiries:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">

          {/* Header */}
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Admin Dashboard
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Enquiries Overview
            </h1>
            <p className="text-muted-foreground mt-3">
              Manage all customer enquiries received from ZenHills website.
            </p>
          </div>

          {/* Stats Card */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-card rounded-2xl shadow-zen p-6">
              <p className="text-muted-foreground text-sm">Total Enquiries</p>
              <p className="text-3xl font-bold text-primary mt-2">
                {enquiries.length}
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-zen p-6">
              <p className="text-muted-foreground text-sm">Latest Enquiry</p>
              <p className="text-sm mt-2">
                {enquiries[0]
                  ? new Date(enquiries[0].created_at).toLocaleDateString()
                  : "—"}
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-zen p-6">
              <p className="text-muted-foreground text-sm">System Status</p>
              <p className="text-green-600 font-semibold mt-2">
                {loading ? "Loading..." : "Connected"}
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-card rounded-2xl shadow-zen overflow-hidden">
            {loading ? (
              <div className="p-10 text-center text-muted-foreground">
                Loading enquiries...
              </div>
            ) : enquiries.length === 0 ? (
              <div className="p-10 text-center text-muted-foreground">
                No enquiries found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4">Customer</th>
                      <th className="px-6 py-4">Contact</th>
                      <th className="px-6 py-4">Subject</th>
                      <th className="px-6 py-4">Message</th>
                      <th className="px-6 py-4">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enquiry) => (
                      <tr
                        key={enquiry.id}
                        className="border-t hover:bg-muted/50 transition duration-200"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 font-medium">
                            <User className="w-4 h-4 text-primary" />
                            {enquiry.fullname}
                          </div>
                        </td>

                        <td className="px-6 py-4 space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-muted-foreground" />
                            {enquiry.email}
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-muted-foreground" />
                            {enquiry.phone}
                          </div>
                        </td>

                        <td className="px-6 py-4 font-medium">
                          {enquiry.subject}
                        </td>

                        <td className="px-6 py-4 max-w-xs truncate">
                          {enquiry.message}
                        </td>

                        <td className="px-6 py-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            {new Date(enquiry.created_at).toLocaleString()}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}

export default AdminEnquiries;