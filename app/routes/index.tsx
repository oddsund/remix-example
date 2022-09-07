import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/noerrorboundary">No errorboundary</Link>
        </li>
        <li>
          <Link to="/errorboundary">Errorboundary</Link>
        </li>
        <li>
          <Link to="/catchboundary">Catchboundary</Link>
        </li>
        <li>
          <Link to="/catchanderrorboundary">Catch and errorboundary</Link>
        </li>
      </ul>
    </div>
  );
}
