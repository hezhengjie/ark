// 创建节点
function createElement(type, props, ...children) {
    return {
      type,
      props: {
        ...props,
        children:children.map(child =>
            typeof child === "object"
              ? child
              : createTextElement(child)
          ),
      },
    }
  }

//   创建文本节点
  function createTextElement(text) {
    return {
      type: "TEXT_ELEMENT",
      props: {
        nodeValue: text,
        children: [],
      },
    }
  }

  module.exports = {
    createElement
  }
