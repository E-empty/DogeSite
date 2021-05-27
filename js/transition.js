import Highway from '@dogstudio/highway';
import { gsap } from "gsap";

class Fade extends Highway.Transition {
    in({ from, to, done }) {
        var tl = new gsap.timeline();
        tl.fromTo(to, {left: "-100%" }, { left: "0%", duration: 0.5}).fromTo(
            to,
            0.5,
            {height: "2vh"},
            {
            height: "90vh",
            top: "10%",
            onComplete: () => {
                
                from.remove();
                done();
              }
            }
        )
        .fromTo(to.children[0], 2, {opacity: 0}, {opacity: 1})
    }
    out({ from, done }) {
        done();
    }
}

export default Fade;