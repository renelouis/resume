import { useEffect, useRef, useState } from "react";

export const useResponsiveHeaderShrink = (headerRef) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [showHamburger, setShowHamburger] = useState(
    () => window.innerWidth <= 700
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const isShrunkRef = useRef(false);

  console.log("scrollY:", window.scrollY);
  console.log(
    "header height:",
    headerRef.current ? headerRef.current.offsetHeight : "null"
  );
  console.log("body height:", document.body.offsetHeight);
  useEffect(() => {
    const SHRINK_THRESHOLD = 60;
    const UNSHRINK_THRESHOLD = 5;

    const handleUpdate = () => {
      if (!headerRef.current) return;

      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 700;

      // if (scrollY < 70) return;

      if ((scrollY > SHRINK_THRESHOLD || isMobile) && !isShrunkRef.current) {
        headerRef.current.classList.add("shrink");
        setShowHamburger(true);
        setIsShrunk(true);
        isShrunkRef.current = true;
      } else if (
        scrollY < UNSHRINK_THRESHOLD &&
        isShrunkRef.current &&
        !isMobile
      ) {
        headerRef.current.classList.remove("shrink");
        setShowHamburger(false);
        setMenuOpen(false);
        setIsShrunk(false);
        isShrunkRef.current = false;
      }
    };

    window.addEventListener("scroll", handleUpdate);
    window.addEventListener("resize", handleUpdate);
    handleUpdate(); // run once on mount

    return () => {
      window.removeEventListener("scroll", handleUpdate);
      window.removeEventListener("resize", handleUpdate);
    };
  }, [headerRef]);

  return {
    isShrunk,
    showHamburger,
    menuOpen,
    setMenuOpen,
  };
};
