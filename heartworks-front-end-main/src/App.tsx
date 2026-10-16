const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

function App() {
  return (
    <main>
      <h1>Heartworks</h1>
      <p>API: {apiUrl}</p>
    </main>
  )
}

export default App
