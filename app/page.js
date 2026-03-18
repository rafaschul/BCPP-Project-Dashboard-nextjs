export default function Page() {
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/legacy-dashboard.html"
        title="BCPP Dashboard"
        style={{ border: 0, width: '100%', height: '100%' }}
      />
    </main>
  );
}
