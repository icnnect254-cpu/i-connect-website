export const metadata = {
  title: "I-Connect Internet Solutions",
  description: "Premium Fiber Internet for Homes & Offices"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#020617", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
