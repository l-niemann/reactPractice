import { HomeLink } from "../../HomeLink";
import { NavBar } from "./NavBar";
import { SlideShow } from "./SlideShow";

export function Restaurant() {
  const imageArr = [{name: "donut1.webp"},{name: "donut2.webp"},{name: "donut3.webp"}]
  return (
    <>
      <div className="restaurant">
        <HomeLink />
        <h1 style={{ marginTop: 0 }}>Donuts</h1>
        <h3>Welcome to Our Donut Shop!</h3>
        <NavBar />
        <br />
        <SlideShow imageArr={imageArr}/>
        <h2 style={{ marginTop: "500px" }}>About Us</h2>
        <p className="txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          dui nibh. Integer scelerisque gravida sem. Aliquam placerat orci sit
          amet erat bibendum, vel tempus sapien finibus. Maecenas facilisis
          sapien dignissim lobortis posuere. Sed congue dolor in ex varius,
          semper placerat felis egestas. Praesent volutpat arcu augue, at
          bibendum nisl hendrerit sit amet. Mauris ut dolor ut ex blandit porta
          vitae et felis. Donec vitae elit lacus. Curabitur pharetra magna eu
          urna sodales iaculis. In ut condimentum est.
        </p>
      </div>
    </>
  );
}
