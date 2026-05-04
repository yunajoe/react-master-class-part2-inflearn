import { useDeferredValue, useState, useTransition } from "react";
const HeavyView = memo(({ value }) => {
  const items = Array.from({ length: 3000 }, (_, i) => (
    <div key={i}>
      Row {i}: {value}
    </div>
  ));
  return (
    <div
      style={{ height: "200px", overflowY: "auto", border: "1px solid #ccc" }}
    >
      {items}
    </div>
  );
});

function HeavyViewWrapper() {
  const [query, setQuery] = useState("");
  const [transQuery, setTransQuery] = useState("");
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);

  const [isPending, startTransition] = useTransition();

  const deferredText = useDeferredValue(text);

  const handleTrans = (e) => {
    setQuery(e.target.value);
    startTransition(() => {
      setTransQuery(e.target.value);
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Concurrency Summary</h2>
      <input value={query} onChange={handleTrans} placeholder="Type here..." />
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ flex: 1 }}>
          <h4>useTransition</h4>
          {isPending ? <p>Pending...</p> : <p>Ready</p>}
          <HeavyView value={transQuery} />
        </div>
        <div style={{ flex: 1 }}>
          <h4>useDeferredValue</h4>
          {query !== deferredQuery ? <p>Stale...</p> : <p>Ready</p>}
          <HeavyView value={deferredQuery} />
        </div>
      </div>
    </div>
  );
}

export default HeavyViewWrapper;
