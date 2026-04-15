function MyInput(props) {
  const { ref, label } = props;

  return (
    <div>
      <label style={{ display: "block", fontWeight: "bold" }}>{label}</label>
      <input
        ref={ref}
        {...props}
        style={{
          padding: "10px",
          border: "2px solid #3b82f6",
          borderRadius: "8px",
          width: "200px",
        }}
      />
    </div>
  );
}

export default MyInput;
