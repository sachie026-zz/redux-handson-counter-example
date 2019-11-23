import  { increment, decrement , INCREMENT, DECREMENT}  from "./redux-store/actions"
import * as rt from "./redux-store/reset-actions"

describe("action creator test", () => {
  it("action creator test for increment", () => {
    const testINC = {
      type: INCREMENT
    }
    Object.is(increment(), testINC);
  })

  it("action creator test for decrement", () => {
    const testINC = {
      type: DECREMENT
    }
    Object.is(decrement(), testINC);
  })

  it("action creator test for resrt", () => {
    const resetTest = {
      type: rt.RESET
    }

    Object.is(rt.reset(), resetTest)
  })
})