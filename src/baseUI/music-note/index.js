import React, { useRef } from "react";
import { useImperativeHandle } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { Container } from "./style";

const ICON_NUMBER = 3;

const createNode = (text) => {
  const template = `<div class="icon_wrapper">${text}</div>`;
  const templateNode = document.createElement("div");
  templateNode.innerHTML = template;
  return templateNode.firstChild;
};
const MusicNote = ({}, ref) => {
  const iconsRef = useRef();
  const iconsStatus = useRef([]);

  useEffect(() => {
    for (let i = 0; i < ICON_NUMBER; i++) {
      const node = createNode(`<div class="iconfont icon-icon-"></div>`);

      node.dataset.index = i;
      iconsStatus.current[i] = false;

      node.addEventListener(
        "transitionend",
        function () {
          this.style.cssText = `display: none; transform: translate3d(0, 0, 0);`;
          const icon = this.querySelector("div");
          icon.style.cssText = `transform: translate3d(0, 0, 0);`;
          iconsStatus.current[this.dataset.index] = false;
        },
        false
      );
      iconsRef.current.appendChild(node);
    }
  }, []);

  const startTransition = useCallback((x, y) => {
    const domArr = [].slice.call(iconsRef.current.children);
    for (let i = 0; i < ICON_NUMBER; i++) {
      const dom = domArr[i];

      if (iconsStatus.current[i] === false) {
        iconsStatus.current[i] = true;
        dom.style.cssText = `
					display: inline-block; 
					left: ${x}px; 
					top: ${y}px;
				`;
        setTimeout(() => {
          dom.style.cssText = `
						display: inline-block;
					 	left: ${x}px;
					  top: ${y}px; 
						transform: translate3d(0, 750px, 0);
						transition: transform 1s cubic-bezier(0.62, -0.1, 0.86, 0.57);
					`;
          const icon = dom.querySelector("div");
          icon.style.cssText = `
						transform: translate3d(-40px, 0, 0);
						transition: transform 1s;
					`;
        }, 20);
        break;
      }
    }
  }, []);

  useImperativeHandle(ref, () => ({
    startTransition,
  }));

  return <Container ref={iconsRef} />;
};

export default React.forwardRef(MusicNote);
