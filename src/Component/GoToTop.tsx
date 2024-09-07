export default function GoToTop() {
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    const mybutton: HTMLElement | null = document.getElementById("goTop");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (mybutton) mybutton.style.display = "block";
    } else {
      if (mybutton) mybutton.style.display = "none";
    }
  };

  // When the user clicks on the button, scroll to the top of the document
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <a
      id="goTop"
      className="position-fixed btn bg-black "
      onClick={topFunction}
      style={{
        zIndex: "15000",
        bottom: "10%",
        right: "5%",
        borderRadius: "100%"
      }}
    >
      <i className={`fa fa-arrow-up p-0 m-0`}></i>
    </a>
  );
}
