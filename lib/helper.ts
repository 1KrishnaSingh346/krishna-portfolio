    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
  
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const offsetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    export default handleSmoothScroll;