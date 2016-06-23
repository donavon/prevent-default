import preventDefault from "../src/preventDefault";
import sinon from "sinon";
import { expect } from "chai";

describe("preventDefault", function() {
    beforeEach(() => {
        this.cb = sinon.stub();
        this.fn = preventDefault(this.cb);
    });
    it("returns a function when called", () => {
        expect(typeof this.fn).to.equal("function");
    });
    describe(("calling said function with an event object"), () => {
        beforeEach(() => {
            this.preventDefaultStub = sinon.stub();
            this.event = {
                preventDefault: this.preventDefaultStub
            };
            this.fn(this.event);
        });
        it("will call ev.preventDefault", () => {
            expect(this.preventDefaultStub.calledOnce).to.equal(true);
        });
        it("will call our callback function", () => {
            expect(this.cb.calledOnce).to.equal(true);
        });
        it("will call our callback function with the event object", () => {
            expect(this.cb.calledWith(this.event)).to.equal(true);
        });
    });
    describe(("calling said function with an event object AND additional parameters"), () => {
        beforeEach(() => {
            this.preventDefaultStub = sinon.stub();
            this.event = {
                preventDefault: this.preventDefaultStub
            };
            this.fn(this.event, "foo", "bar");
        });
        it("will call ev.preventDefault", () => {
            expect(this.preventDefaultStub.calledOnce).to.equal(true);
        });
        it("will call our callback function", () => {
            expect(this.cb.calledOnce).to.equal(true);
        });
        it("will call our callback function with the event object and the additional parameters", () => {
            expect(this.cb.calledWith(this.event, "foo", "bar")).to.equal(true);
        });
    });
});
