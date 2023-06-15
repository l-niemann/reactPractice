import { HomeLink } from "../../HomeLink";
import { NavBar } from "./NavBar";
import { SlideShow } from "./SlideShow";

export function Restaurant() {
  return (
    <>
      <div className="restaurant">
        <HomeLink />
        <h1 style={{"margin-top":0}}>Donuts</h1>
        <h3>Welcome to Our Donut Shop!</h3>
        <NavBar />
        <br />
        <SlideShow />
        <h2 style={{ "margin-top": "500px" }}>About Us</h2>
        <p className="txt">
          We love donuts so much we made a store to sell donuts because we love
          them so much. Mere words cannot describe our love for donuts. I ran
          out of things to put. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer vitae dui nibh. Integer scelerisque gravida
          sem. Aliquam placerat orci sit amet erat bibendum, vel tempus sapien
          finibus. Maecenas facilisis sapien dignissim lobortis posuere. Sed
          congue dolor in ex varius, semper placerat felis egestas. Praesent
          volutpat arcu augue, at bibendum nisl hendrerit sit amet. Mauris ut
          dolor ut ex blandit porta vitae et felis. Donec vitae elit lacus.
          Curabitur pharetra magna eu urna sodales iaculis. In ut condimentum
          est.
        </p>
      </div>
    </>
  );
}
