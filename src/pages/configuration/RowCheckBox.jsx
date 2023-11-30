//@ts-nocheck
import { forwardRef, useEffect, useRef } from "react";

// eslint-disable-next-line react/display-name
const RowCheckBox = forwardRef(({ intermediate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.intermediate = intermediate;
  }, [resolvedRef, intermediate]);

  return <input type="checkbox" ref={resolvedRef} {...rest} />;
});

export default RowCheckBox;
