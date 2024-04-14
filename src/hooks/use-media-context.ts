const useMediaContext = () => {
  const isDesktop = window.matchMedia("(min-width: 600px)").matches;

  return { isDesktop };
};

export default useMediaContext;
