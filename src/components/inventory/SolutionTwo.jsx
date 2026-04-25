import { memo, useCallback, useMemo, useState } from "react";

function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  console.log("🎨 [Theme] 배경색 변경됨");
  return (
    <div
      style={{
        background: isDark ? "#2d3436" : "#fff",
        color: isDark ? "#dfe6e9" : "#2d3436",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <button onClick={() => setIsDark(!isDark)}>다크모드 토글</button>
      {children}
    </div>
  );
}

const ProductItem = memo(function ProductItem({ product, onRemove }) {
  console.log(`❌ [Bad Render] ID: ${product.id}`);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderBottom: "1px solid #eee",
      }}
    >
      <span>
        {product.name} | {product.price.toLocaleString()}원
      </span>
      <button onClick={() => onRemove(product.id)}>삭제</button>
    </div>
  );
});

const initialProducts = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Enterprise Model-${i + 1}`,
  price: Math.floor(Math.random() * 100000) + +10000,
}));

function SolutionTwo() {
  const [products, setProducts] = useState(initialProducts);
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);

  // 문제 1: 매번 다시 연산됨
  const filtered = useMemo(
    () =>
      products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase()),
      ),

    [search],
  );

  // 문제 2: 매번 주소값이 바뀜
  const handleRemove = useCallback((id) => {
    setProducts(products.filter((p) => p.id !== id));
  }, []);

  return (
    <ThemeProvider>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="검색어를 입력하면 화면이 매우 버벅입니다..."
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />
      <div>
        {filtered.map((p) => (
          <ProductItem key={p.id} product={p} onRemove={handleRemove} />
        ))}
      </div>
    </ThemeProvider>
  );
}

export default SolutionTwo;
