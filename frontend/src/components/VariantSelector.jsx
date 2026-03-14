const VariantSelector = ({ variants, selectedVariant, onSelect }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "10px" }}>
      {variants.map((variant, index) => {
        const active = selectedVariant?.color === variant.color;

        return (
          <button
            key={index}
            onClick={() => onSelect(variant)}
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              border: active ? "2px solid black" : "1px solid gray",
              background: variant.color
            }}
          />
        );
      })}
    </div>
  );
};

export default VariantSelector;