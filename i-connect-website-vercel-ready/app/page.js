export default function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{padding:"20px", borderBottom:"1px solid #1f2937", display:"flex", justifyContent:"space-between"}}>
        <div>
          <h1>I-Connect Internet Solutions</h1>
          <p style={{color:"#94a3b8"}}>Premium Fiber for Homes & Offices</p>
        </div>
        <a href="https://wa.me/254716957717" style={{color:"white", background:"#22c55e", padding:"10px 16px", borderRadius:"20px", textDecoration:"none"}}>
          WhatsApp Us
        </a>
      </header>

      {/* Hero */}
      <section style={{padding:"80px 20px", textAlign:"center"}}>
        <h2 style={{fontSize:"48px"}}>Fast Fiber Internet Installation</h2>
        <p style={{color:"#94a3b8", marginTop:"10px"}}>
          Reliable connectivity for homes, businesses, and enterprises in Kenya
        </p>
      </section>

      {/* Services */}
      <section style={{padding:"40px 20px"}}>
        <h3>Our Services</h3>
        <ul>
          <li>Home Fiber Installation</li>
          <li>Office Network Setup</li>
          <li>Maintenance & Support</li>
        </ul>
      </section>

      {/* Contact */}
      <section style={{padding:"40px 20px"}}>
        <h3>Contact</h3>
        <p>Call/WhatsApp: 0716957717</p>
      </section>

      {/* Footer */}
      <footer style={{padding:"20px", borderTop:"1px solid #1f2937", textAlign:"center", color:"#94a3b8"}}>
        © 2026 I-Connect Internet Solutions
      </footer>
    </div>
  );
}
