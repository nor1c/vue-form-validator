import { defineComponent as a, onMounted as u, openBlock as m, createElementBlock as f, renderSlot as p } from "vue";
const v = ["id"], g = /* @__PURE__ */ a({
  __name: "NorForm",
  props: {
    identifier: {
      type: String,
      default: ""
    }
  },
  emits: [
    "validated"
  ],
  setup(n, { emit: y }) {
    const i = n;
    u(() => {
      window.onload = function() {
        const e = document.querySelector("form");
        e.onsubmit = r.bind(e);
      };
      const r = async (e) => {
        e.preventDefault(), await l();
      };
    });
    const l = () => {
      var r, e;
      if (i.identifier === "")
        console.error('form must have a prop identifier (:id="string")');
      else {
        const o = document.getElementById(i.identifier).getElementsByTagName("input");
        document.querySelectorAll(".error-content").forEach((t) => t.remove());
        for (let t = 0; t < o.length; t++) {
          const s = (e = (r = o[t].getAttribute("rules")) == null ? void 0 : r.split("|")) != null ? e : [], c = o[t].value;
          if (s.length && s.includes("required") && c === "") {
            console.error(`validation error: input for ${o[t].name} is required`);
            const d = document.querySelectorAll("div[error-for]")[0];
            d.innerHTML = '<span class="error-content">' + o[t].name + " is required</div>";
          }
        }
      }
    };
    return (r, e) => (m(), f("form", { id: n.identifier }, [
      p(r.$slots, "default")
    ], 8, v));
  }
}), S = {
  install: (n) => {
    n.component("NorForm", g);
  }
};
export {
  g as NorForm,
  S as default
};
