import assert from 'assert';
import WebAnnotation from "../src/WebAnnotation";

const fixtureAnnotation = {
  "@context": "http://iiif.io/api/presentation/3/context.json",
  type: "Annotation",
  body: [
    {
      type: "TextualBody",
      value: "This annotation was added via JS."
    }
  ],
  target: {
    selector: [
      {
        type: "TextQuoteSelector",
        exact: "that ingenious hero"
      },
      {
        type: "TextPositionSelector",
        start: 38,
        end: 57
      }
    ]
  }
};

describe("WebAnnotation", function() {
  describe("#isEqual()", function() {
    
    it("should return true if the other is the same object", () => {
      const a = new WebAnnotation(fixtureAnnotation);
      const b = new WebAnnotation(fixtureAnnotation);
      assert(a.isEqual(b));
    });

    it("should return false if either annotation has no ID set", () => {
      const a = new WebAnnotation({
        ...fixtureAnnotation,
        id: "https://www.example.com/anno1"
      });
      const b = new WebAnnotation({ ...fixtureAnnotation });
      assert.strictEqual(a.isEqual(b), false);
      assert.strictEqual(b.isEqual(a), false);
    });
  
  });
});
