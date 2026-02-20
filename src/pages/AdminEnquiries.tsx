import { useEffect, useState } from "react";

function AdminEnquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/enquiries/")
      .then(res => res.json())
      .then(data => {
        setEnquiries(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching enquiries:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading enquiries...</h2>;
  }

  if (enquiries.length === 0) {
    return <h2>No enquiries found</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Panel – Enquiries</h1>

      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px"
      }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={thStyle}>Full Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone</th>
            <th style={thStyle}>Subject</th>
            <th style={thStyle}>Message</th>
            <th style={thStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.id}>
              <td style={tdStyle}>{enquiry.fullname}</td>
              <td style={tdStyle}>{enquiry.email}</td>
              <td style={tdStyle}>{enquiry.phone}</td>
              <td style={tdStyle}>{enquiry.subject}</td>
              <td style={tdStyle}>{enquiry.message}</td>
              <td style={tdStyle}>
                {new Date(enquiry.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left"
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd"
};

export default AdminEnquiries;