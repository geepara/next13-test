"use client";

import Markdoc from "@markdoc/markdoc";
import React from "react";
import Counter from "../components/Counter";

const tags = {
  callout: {
    render: "Callout",
    attributes: {},
  },
};

const doc = `
  {% callout %}
  Attention, over here!
  {% /callout %}
  `;

const ast = Markdoc.parse(doc);
const content = Markdoc.transform(ast, { tags });

function Callout({ children }: { children: any }) {
  return (
    <div className="flex p-10">
      <div className="flex items-center bg-gray-300 rounded-2xl text-gray-600 gap-4 p-4">
        💡
        {children}
        <Counter />
      </div>
    </div>
  );
}

export default function Docs() {
  return Markdoc.renderers.react(content, React, {
    components: {
      Callout: Callout,
    },
  });
}
