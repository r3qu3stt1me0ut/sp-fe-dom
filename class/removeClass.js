/**
 * 
 * @param {String,Node,Nodelist} selector 
 * @param {String} className 
 */

const {
  isElement,
  isNodeList
} = require('../common/index');

const removeClass = (selector, className) => {
  if (isElement(selector)) {
    selector.classList.remove(className);
  } else {
    let selectorList = isNodeList(selector) ? selector : document.querySelectorAll(selector);
    if (selectorList) {
      selectorList.forEach(item => {
        item.classList.remove(className);
      })
    }
  }
};
module.exports = removeClass;