import Clock from "./Clock";
import Welcome from "./Welcome";

export default function App() {
  return (
    <>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
      <Welcome name="Charlie" />
      <Clock />
    </>
  )
}
