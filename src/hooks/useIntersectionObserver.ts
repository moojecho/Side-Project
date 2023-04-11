import { RefObject, useState, useEffect } from "react";

const useIntersectionObserver = (
  targetRef: RefObject<Element>,
  options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: "0px",
  }
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const isIntersecting = entry?.isIntersecting;

  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setEntry(entry);
  };

  useEffect(() => {
    const targer = targetRef?.current;

    if (isIntersecting || !targer) return;

    const observer = new IntersectionObserver(updateEntry, options);

    observer.observe(targer);

    return () => {
      observer.disconnect();
    };
  }, [
    targetRef,
    options.root,
    options.rootMargin,
    options.threshold,
    isIntersecting,
  ]);

  return entry;
};

export default useIntersectionObserver;
