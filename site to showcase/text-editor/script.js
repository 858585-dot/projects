    // Copy functionality
    function copyCode(button) {
      const textarea = button.previousElementSibling;
      textarea.select();
      document.execCommand("copy");
      button.innerText = "Copied!";
      setTimeout(() => button.innerText = "Copy Code", 2000);
    }

    // GSAP Animation
    gsap.from(".text-box", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      stagger: 0.2,
      ease: "power3.out"
    });