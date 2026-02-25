import { renderHook } from '@testing-library/react';
import { useEffect } from 'react';
import { expect, test, vi } from 'vitest';

test('should run effect only once on mount', () => {
  const spy = vi.fn();

  renderHook(() => {
    useEffect(() => {
      spy();
    }, []); // Empty deps
  });

  expect(spy).toHaveBeenCalledTimes(1);
});


test('should call cleanup function on unmount', () => {
  const cleanupSpy = vi.fn();

  const ret = renderHook(() => {
    useEffect(() => {
      return () => cleanupSpy(); // Cleanup logic
    }, []);
  });

  console.log("ret : ", ret);

  ret.unmount();
  expect(cleanupSpy).toHaveBeenCalledTimes(1);
});

test('should re-run effect when dependencies change', () => {
  const spy = vi.fn();

  const { rerender } = renderHook(
    ({ count }) => {
      useEffect(() => {
        spy();
      }, [count]);
    },
    { initialProps: { count: 0 } }
  );

  expect(spy).toHaveBeenCalledTimes(1);

  // Trigger a re-render with a NEW prop value
  rerender({ count: 1 });
  expect(spy).toHaveBeenCalledTimes(2);

  // Trigger a re-render with the SAME prop value
  rerender({ count: 1 });
  expect(spy).toHaveBeenCalledTimes(2); // Should NOT increase

  rerender({ count: 5 });
  expect(spy).toHaveBeenCalledTimes(3); // Should NOT increase
});