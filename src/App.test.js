import  { increment, decrement , INCREMENT, DECREMENT}  from "./redux-store/actions"

describe("action creator test", () => {
  it("action creator for increment", () => {
    const testINC = {
      type: INCREMENT
    }
    Object.is(increment(), testINC);
  })

  it("action creator for decrement", () => {
    const testINC = {
      type: DECREMENT
    }
    Object.is(decrement(), testINC);
  })
})